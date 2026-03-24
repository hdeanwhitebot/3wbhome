// ─── Users & Auth ───
export type UserRole = "resident" | "vendor" | "landlord" | "admin";

export interface User {
  id: string;
  email: string;
  full_name: string;
  phone: string | null;
  role: UserRole;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

// ─── Properties & Units ───
export interface Property {
  id: string;
  landlord_id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  type: "single_family" | "multi_family" | "condo" | "townhouse" | "apartment";
  unit_count: number;
  created_at: string;
}

export interface Unit {
  id: string;
  property_id: string;
  unit_number: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number | null;
  rent_amount: number;
  status: "occupied" | "vacant" | "maintenance";
}

// ─── Leases ───
export interface Lease {
  id: string;
  unit_id: string;
  tenant_id: string;
  landlord_id: string;
  start_date: string;
  end_date: string;
  monthly_rent: number;
  security_deposit: number;
  status: "active" | "expired" | "terminated" | "pending";
  document_urls: string[];
  created_at: string;
}

// ─── Rent Payments ───
export type PaymentStatus = "pending" | "processing" | "paid" | "failed" | "refunded";

export interface RentPayment {
  id: string;
  lease_id: string;
  tenant_id: string;
  landlord_id: string;
  amount: number;
  platform_fee: number;
  due_date: string;
  paid_date: string | null;
  status: PaymentStatus;
  stripe_payment_intent_id: string | null;
  auto_pay: boolean;
  created_at: string;
}

// ─── Work Orders ───
export type WorkOrderCategory =
  | "plumbing"
  | "electrical"
  | "hvac"
  | "appliance"
  | "general"
  | "painting"
  | "landscaping"
  | "pest_control"
  | "roofing"
  | "flooring";

export type WorkOrderUrgency = "low" | "medium" | "high" | "emergency";
export type WorkOrderStatus =
  | "submitted"
  | "reviewed"
  | "assigned"
  | "in_progress"
  | "completed"
  | "closed"
  | "cancelled";

export interface WorkOrder {
  id: string;
  unit_id: string;
  tenant_id: string;
  landlord_id: string;
  vendor_id: string | null;
  title: string;
  description: string;
  category: WorkOrderCategory;
  urgency: WorkOrderUrgency;
  status: WorkOrderStatus;
  photo_urls: string[];
  completion_photo_urls: string[];
  completion_notes: string | null;
  created_at: string;
  updated_at: string;
}

// ─── Vendors ───
export type VendorStatus = "pending" | "approved" | "suspended" | "rejected";

export interface Vendor {
  id: string;
  user_id: string;
  business_name: string;
  services: WorkOrderCategory[];
  license_number: string | null;
  insurance_url: string | null;
  license_url: string | null;
  service_area: string[];
  hourly_rate: number | null;
  flat_rate_min: number | null;
  flat_rate_max: number | null;
  rating: number;
  review_count: number;
  status: VendorStatus;
  stripe_account_id: string | null;
  portfolio_urls: string[];
  created_at: string;
}

// ─── Vendor-Landlord Relationships ───
export type VendorTrack = "approved" | "marketplace";

export interface VendorLandlordRelationship {
  id: string;
  vendor_id: string;
  landlord_id: string;
  track: VendorTrack;
  status: "pending" | "approved" | "revoked";
  created_at: string;
}

// ─── Bids ───
export type BidStatus = "pending" | "accepted" | "rejected" | "withdrawn" | "expired";

export interface Bid {
  id: string;
  work_order_id: string;
  vendor_id: string;
  amount: number;
  estimated_hours: number | null;
  description: string;
  available_date: string;
  status: BidStatus;
  created_at: string;
}

// ─── Invoices ───
export type InvoiceStatus = "draft" | "submitted" | "approved" | "paid" | "disputed";

export interface InvoiceLineItem {
  description: string;
  type: "labor" | "materials";
  quantity: number;
  unit_price: number;
  total: number;
}

export interface Invoice {
  id: string;
  work_order_id: string;
  vendor_id: string;
  landlord_id: string;
  line_items: InvoiceLineItem[];
  subtotal: number;
  platform_fee: number;
  total: number;
  receipt_urls: string[];
  status: InvoiceStatus;
  stripe_payment_intent_id: string | null;
  created_at: string;
  paid_at: string | null;
}

// ─── P&L / Accounting ───
export type TransactionType = "income" | "expense" | "fee";
export type TransactionCategory =
  | "rent"
  | "maintenance"
  | "plumbing"
  | "electrical"
  | "hvac"
  | "general_repair"
  | "platform_fee"
  | "insurance"
  | "other";

export interface Transaction {
  id: string;
  landlord_id: string;
  property_id: string;
  unit_id: string | null;
  type: TransactionType;
  category: TransactionCategory;
  amount: number;
  description: string;
  reference_id: string | null;
  reference_type: "rent_payment" | "invoice" | "fee" | null;
  date: string;
  created_at: string;
}

// ─── Notifications ───
export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: "rent" | "work_order" | "bid" | "payment" | "system";
  read: boolean;
  action_url: string | null;
  created_at: string;
}
