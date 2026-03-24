import Stripe from "stripe";

export function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-01-27.acacia" as Stripe.LatestApiVersion,
  });
}

// ─── Connected Accounts ───

export async function createConnectedAccount(
  stripe: Stripe,
  opts: { email: string; type: "landlord" | "vendor"; businessName?: string }
) {
  return stripe.accounts.create({
    type: "express",
    email: opts.email,
    business_type: "individual",
    metadata: { role: opts.type, business_name: opts.businessName ?? "" },
    capabilities: {
      card_payments: { requested: true },
      transfers: { requested: true },
    },
  });
}

export async function createAccountLink(
  stripe: Stripe,
  accountId: string,
  returnUrl: string,
  refreshUrl: string
) {
  return stripe.accountLinks.create({
    account: accountId,
    refresh_url: refreshUrl,
    return_url: returnUrl,
    type: "account_onboarding",
  });
}

// ─── Escrow / Payment Intents ───

export async function createEscrowPayment(
  stripe: Stripe,
  opts: {
    amount: number;
    platformFeePercent: number;
    landlordStripeAccountId: string;
    vendorStripeAccountId: string;
    metadata: Record<string, string>;
  }
) {
  const platformFee = Math.round(opts.amount * (opts.platformFeePercent / 100));

  // Create payment intent on the platform — funds held by 3WB
  return stripe.paymentIntents.create({
    amount: opts.amount,
    currency: "usd",
    metadata: {
      ...opts.metadata,
      vendor_account: opts.vendorStripeAccountId,
      platform_fee: platformFee.toString(),
    },
    // Hold funds on platform, release later via transfer
    capture_method: "manual",
  });
}

export async function captureAndTransferToVendor(
  stripe: Stripe,
  paymentIntentId: string,
  vendorStripeAccountId: string,
  amount: number,
  platformFee: number
) {
  // Capture the held payment
  await stripe.paymentIntents.capture(paymentIntentId);

  // Transfer to vendor minus platform fee
  const transferAmount = amount - platformFee;
  return stripe.transfers.create({
    amount: transferAmount,
    currency: "usd",
    destination: vendorStripeAccountId,
    metadata: { payment_intent: paymentIntentId },
  });
}

export async function refundEscrow(stripe: Stripe, paymentIntentId: string, amount?: number) {
  return stripe.refunds.create({
    payment_intent: paymentIntentId,
    amount, // undefined = full refund
  });
}

// ─── Rent Payments ───

export async function createRentPaymentIntent(
  stripe: Stripe,
  opts: {
    amount: number;
    platformFeePercent: number;
    landlordStripeAccountId: string;
    tenantEmail: string;
    metadata: Record<string, string>;
  }
) {
  const platformFee = Math.round(opts.amount * (opts.platformFeePercent / 100));

  return stripe.paymentIntents.create({
    amount: opts.amount,
    currency: "usd",
    application_fee_amount: platformFee,
    transfer_data: {
      destination: opts.landlordStripeAccountId,
    },
    receipt_email: opts.tenantEmail,
    metadata: opts.metadata,
  });
}
