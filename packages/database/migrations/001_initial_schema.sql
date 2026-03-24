-- 3WB Home — Initial Schema
-- Covers: users, properties, units, leases, rent payments, work orders,
-- vendors, vendor-landlord relationships, bids, invoices, transactions, notifications

-- ─── Extensions ───
create extension if not exists "uuid-ossp";

-- ─── Users ───
create table public.users (
  id uuid primary key default uuid_generate_v4(),
  auth_id uuid unique not null,
  email text unique not null,
  full_name text not null,
  phone text,
  role text not null check (role in ('resident', 'vendor', 'landlord', 'admin')),
  avatar_url text,
  stripe_customer_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ─── Properties ───
create table public.properties (
  id uuid primary key default uuid_generate_v4(),
  landlord_id uuid not null references public.users(id),
  name text not null,
  address text not null,
  city text not null,
  state text not null,
  zip text not null,
  type text not null check (type in ('single_family', 'multi_family', 'condo', 'townhouse', 'apartment')),
  unit_count int not null default 1,
  created_at timestamptz not null default now()
);

-- ─── Units ───
create table public.units (
  id uuid primary key default uuid_generate_v4(),
  property_id uuid not null references public.properties(id) on delete cascade,
  unit_number text not null,
  bedrooms int not null default 1,
  bathrooms numeric(3,1) not null default 1,
  sqft int,
  rent_amount numeric(10,2) not null,
  status text not null default 'vacant' check (status in ('occupied', 'vacant', 'maintenance')),
  unique (property_id, unit_number)
);

-- ─── Leases ───
create table public.leases (
  id uuid primary key default uuid_generate_v4(),
  unit_id uuid not null references public.units(id),
  tenant_id uuid not null references public.users(id),
  landlord_id uuid not null references public.users(id),
  start_date date not null,
  end_date date not null,
  monthly_rent numeric(10,2) not null,
  security_deposit numeric(10,2) not null default 0,
  status text not null default 'pending' check (status in ('active', 'expired', 'terminated', 'pending')),
  document_urls text[] not null default '{}',
  created_at timestamptz not null default now()
);

-- ─── Rent Payments ───
create table public.rent_payments (
  id uuid primary key default uuid_generate_v4(),
  lease_id uuid not null references public.leases(id),
  tenant_id uuid not null references public.users(id),
  landlord_id uuid not null references public.users(id),
  amount numeric(10,2) not null,
  platform_fee numeric(10,2) not null default 0,
  due_date date not null,
  paid_date timestamptz,
  status text not null default 'pending' check (status in ('pending', 'processing', 'paid', 'failed', 'refunded')),
  stripe_payment_intent_id text,
  auto_pay boolean not null default false,
  created_at timestamptz not null default now()
);

-- ─── Work Orders ───
create table public.work_orders (
  id uuid primary key default uuid_generate_v4(),
  unit_id uuid not null references public.units(id),
  tenant_id uuid not null references public.users(id),
  landlord_id uuid not null references public.users(id),
  vendor_id uuid references public.users(id),
  title text not null,
  description text not null,
  category text not null check (category in ('plumbing', 'electrical', 'hvac', 'appliance', 'general', 'painting', 'landscaping', 'pest_control', 'roofing', 'flooring')),
  urgency text not null default 'medium' check (urgency in ('low', 'medium', 'high', 'emergency')),
  status text not null default 'submitted' check (status in ('submitted', 'reviewed', 'assigned', 'in_progress', 'completed', 'closed', 'cancelled')),
  photo_urls text[] not null default '{}',
  completion_photo_urls text[] not null default '{}',
  completion_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ─── Vendors ───
create table public.vendors (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid unique not null references public.users(id),
  business_name text not null,
  services text[] not null default '{}',
  license_number text,
  insurance_url text,
  license_url text,
  service_area text[] not null default '{}',
  hourly_rate numeric(10,2),
  flat_rate_min numeric(10,2),
  flat_rate_max numeric(10,2),
  rating numeric(3,2) not null default 0,
  review_count int not null default 0,
  status text not null default 'pending' check (status in ('pending', 'approved', 'suspended', 'rejected')),
  stripe_account_id text,
  portfolio_urls text[] not null default '{}',
  created_at timestamptz not null default now()
);

-- ─── Vendor-Landlord Relationships ───
create table public.vendor_landlord_relationships (
  id uuid primary key default uuid_generate_v4(),
  vendor_id uuid not null references public.vendors(id),
  landlord_id uuid not null references public.users(id),
  track text not null default 'marketplace' check (track in ('approved', 'marketplace')),
  status text not null default 'pending' check (status in ('pending', 'approved', 'revoked')),
  created_at timestamptz not null default now(),
  unique (vendor_id, landlord_id)
);

-- ─── Bids ───
create table public.bids (
  id uuid primary key default uuid_generate_v4(),
  work_order_id uuid not null references public.work_orders(id),
  vendor_id uuid not null references public.vendors(id),
  amount numeric(10,2) not null,
  estimated_hours numeric(5,1),
  description text not null,
  available_date date not null,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'rejected', 'withdrawn', 'expired')),
  created_at timestamptz not null default now()
);

-- ─── Invoices ───
create table public.invoices (
  id uuid primary key default uuid_generate_v4(),
  work_order_id uuid not null references public.work_orders(id),
  vendor_id uuid not null references public.vendors(id),
  landlord_id uuid not null references public.users(id),
  line_items jsonb not null default '[]',
  subtotal numeric(10,2) not null,
  platform_fee numeric(10,2) not null default 0,
  total numeric(10,2) not null,
  receipt_urls text[] not null default '{}',
  status text not null default 'draft' check (status in ('draft', 'submitted', 'approved', 'paid', 'disputed')),
  stripe_payment_intent_id text,
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

-- ─── Transactions (P&L) ───
create table public.transactions (
  id uuid primary key default uuid_generate_v4(),
  landlord_id uuid not null references public.users(id),
  property_id uuid not null references public.properties(id),
  unit_id uuid references public.units(id),
  type text not null check (type in ('income', 'expense', 'fee')),
  category text not null check (category in ('rent', 'maintenance', 'plumbing', 'electrical', 'hvac', 'general_repair', 'platform_fee', 'insurance', 'other')),
  amount numeric(10,2) not null,
  description text not null,
  reference_id uuid,
  reference_type text check (reference_type in ('rent_payment', 'invoice', 'fee')),
  date date not null,
  created_at timestamptz not null default now()
);

-- ─── Notifications ───
create table public.notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.users(id),
  title text not null,
  message text not null,
  type text not null check (type in ('rent', 'work_order', 'bid', 'payment', 'system')),
  read boolean not null default false,
  action_url text,
  created_at timestamptz not null default now()
);

-- ─── Indexes ───
create index idx_properties_landlord on public.properties(landlord_id);
create index idx_units_property on public.units(property_id);
create index idx_leases_tenant on public.leases(tenant_id);
create index idx_leases_unit on public.leases(unit_id);
create index idx_rent_payments_tenant on public.rent_payments(tenant_id);
create index idx_rent_payments_lease on public.rent_payments(lease_id);
create index idx_rent_payments_status on public.rent_payments(status);
create index idx_work_orders_unit on public.work_orders(unit_id);
create index idx_work_orders_tenant on public.work_orders(tenant_id);
create index idx_work_orders_vendor on public.work_orders(vendor_id);
create index idx_work_orders_status on public.work_orders(status);
create index idx_vendors_user on public.vendors(user_id);
create index idx_vendors_status on public.vendors(status);
create index idx_bids_work_order on public.bids(work_order_id);
create index idx_bids_vendor on public.bids(vendor_id);
create index idx_invoices_vendor on public.invoices(vendor_id);
create index idx_invoices_work_order on public.invoices(work_order_id);
create index idx_transactions_landlord on public.transactions(landlord_id);
create index idx_transactions_property on public.transactions(property_id);
create index idx_transactions_date on public.transactions(date);
create index idx_notifications_user on public.notifications(user_id);
create index idx_notifications_unread on public.notifications(user_id) where read = false;

-- ─── Updated_at trigger ───
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger users_updated_at before update on public.users
  for each row execute function update_updated_at();

create trigger work_orders_updated_at before update on public.work_orders
  for each row execute function update_updated_at();

-- ─── RLS Policies ───
alter table public.users enable row level security;
alter table public.properties enable row level security;
alter table public.units enable row level security;
alter table public.leases enable row level security;
alter table public.rent_payments enable row level security;
alter table public.work_orders enable row level security;
alter table public.vendors enable row level security;
alter table public.vendor_landlord_relationships enable row level security;
alter table public.bids enable row level security;
alter table public.invoices enable row level security;
alter table public.transactions enable row level security;
alter table public.notifications enable row level security;

-- Users can read their own row
create policy "users_read_own" on public.users for select using (auth.uid() = auth_id);
create policy "users_update_own" on public.users for update using (auth.uid() = auth_id);

-- Tenants can read their leases
create policy "leases_tenant_read" on public.leases for select using (
  tenant_id in (select id from public.users where auth_id = auth.uid())
);

-- Tenants can read their rent payments
create policy "rent_payments_tenant_read" on public.rent_payments for select using (
  tenant_id in (select id from public.users where auth_id = auth.uid())
);

-- Tenants can read/create work orders for their units
create policy "work_orders_tenant_read" on public.work_orders for select using (
  tenant_id in (select id from public.users where auth_id = auth.uid())
);
create policy "work_orders_tenant_create" on public.work_orders for insert with check (
  tenant_id in (select id from public.users where auth_id = auth.uid())
);

-- Vendors can read their own vendor profile
create policy "vendors_read_own" on public.vendors for select using (
  user_id in (select id from public.users where auth_id = auth.uid())
);
create policy "vendors_update_own" on public.vendors for update using (
  user_id in (select id from public.users where auth_id = auth.uid())
);

-- Vendors can read/create bids
create policy "bids_vendor_read" on public.bids for select using (
  vendor_id in (select v.id from public.vendors v join public.users u on v.user_id = u.id where u.auth_id = auth.uid())
);
create policy "bids_vendor_create" on public.bids for insert with check (
  vendor_id in (select v.id from public.vendors v join public.users u on v.user_id = u.id where u.auth_id = auth.uid())
);

-- Notifications: users see their own
create policy "notifications_read_own" on public.notifications for select using (
  user_id in (select id from public.users where auth_id = auth.uid())
);
create policy "notifications_update_own" on public.notifications for update using (
  user_id in (select id from public.users where auth_id = auth.uid())
);
