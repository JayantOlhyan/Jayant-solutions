-- Private India acquisition workspace. No browser role can read or write these tables.
-- Access goes through the server's admin + MFA guard and an admin_users membership check.
create table public.sales_prospects (
  id uuid primary key default gen_random_uuid(),
  details jsonb not null check (details->>'country' = 'India'),
  stage text not null default 'new' check (stage in ('new','researched','contacted','replied','positive','audit_sent','call_booked','call_attended','proposal_sent','won','lost','do_not_contact')),
  milestones jsonb not null default '{}',
  activity jsonb not null default '[]',
  followup_index integer not null default 0 check (followup_index between 0 and 5),
  version integer not null default 0,
  created_by uuid not null references public.admin_users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table public.sales_receipts (
  id uuid primary key default gen_random_uuid(),
  prospect_id uuid not null references public.sales_prospects(id),
  amount numeric(12,2) not null check (amount > 0),
  received_on date not null,
  reference text not null check (length(trim(reference)) >= 3),
  created_by uuid not null references public.admin_users(id),
  created_at timestamptz not null default now(),
  void_reason text,
  voided_by uuid references public.admin_users(id),
  voided_at timestamptz,
  check ((void_reason is null and voided_at is null and voided_by is null) or
    (length(trim(void_reason)) >= 3 and voided_at is not null and voided_by is not null))
);
create unique index sales_receipts_reference_unique on public.sales_receipts (upper(trim(reference))) where void_reason is null;
create index sales_receipts_prospect on public.sales_receipts(prospect_id);
alter table public.sales_prospects enable row level security;
alter table public.sales_receipts enable row level security;
revoke all on public.sales_prospects, public.sales_receipts from anon, authenticated;
grant all on public.sales_prospects, public.sales_receipts to service_role;
