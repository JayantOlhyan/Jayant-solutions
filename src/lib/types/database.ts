export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Client {
  id: string;
  name: string;
  email: string;
  company_name: string | null;
  phone: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface Package {
  id: string;
  code: "FOUNDATION" | "GROWTH" | "SCALE";
  name: string;
  tagline: string;
  standard_price: number;
  period: string;
  summary: string;
  features: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Proposal {
  id: string;
  client_id: string;
  token: string;
  title: string;
  status: "DRAFT" | "SENT" | "VIEWED" | "ACCEPTED" | "EXPIRED";
  valid_until: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface PackageSelection {
  id: string;
  proposal_id: string;
  package_id: string;
  price_snapshot: number;
  client_notes: string | null;
  selected_at: string;
  created_at: string;
}

export interface Negotiation {
  id: string;
  proposal_id: string;
  requested_changes: string;
  client_proposed_price: number | null;
  status: "SUBMITTED" | "UNDER_REVIEW" | "APPROVED" | "REJECTED";
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface CommercialTerms {
  id: string;
  proposal_id: string;
  negotiation_id: string | null;
  final_agreed_price: number;
  scope_version: number;
  scope_summary: string;
  approved_by: string | null;
  approved_at: string;
  created_at: string;
}

export interface Agreement {
  id: string;
  proposal_id: string;
  commercial_terms_id: string;
  status: "DRAFT" | "SENT" | "SIGNED" | "DECLINED";
  contract_html: string | null;
  signature_text: string | null;
  signer_ip: string | null;
  signer_user_agent: string | null;
  signed_at: string | null;
  declined_reason: string | null;
  created_at: string;
  updated_at: string;
}

export interface Invoice {
  id: string;
  agreement_id: string;
  invoice_number: string;
  subtotal: number;
  tax_amount: number;
  total_amount: number;
  status: "DRAFT" | "ISSUED" | "PAID" | "OVERDUE" | "CANCELLED";
  due_date: string | null;
  paid_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: string;
  invoice_id: string;
  razorpay_link_id: string | null;
  razorpay_payment_id: string | null;
  amount: number;
  currency: string;
  status: "CREATED" | "ISSUED" | "PAID" | "FAILED" | "EXPIRED";
  payment_url: string | null;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface PaymentEvent {
  id: string;
  payment_id: string | null;
  event_id: string;
  event_type: string;
  raw_payload: Json;
  processed: boolean;
  processed_at: string;
  created_at: string;
}

export interface Booking {
  id: string;
  proposal_id: string;
  cal_booking_id: string | null;
  status: "BOOKED" | "RESCHEDULED" | "CANCELLED" | "COMPLETED";
  event_title: string;
  event_time: string;
  duration_minutes: number;
  meeting_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Onboarding {
  id: string;
  proposal_id: string;
  responses: Json;
  status: "NOT_STARTED" | "IN_PROGRESS" | "SUBMITTED" | "REVIEWED";
  submitted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Notification {
  id: string;
  recipient_email: string;
  template_key: string;
  subject: string;
  payload: Json;
  status: "PENDING" | "SENT" | "FAILED";
  error_message: string | null;
  sent_at: string | null;
  created_at: string;
}

export interface AuditEvent {
  id: string;
  actor_type: "ADMIN" | "CLIENT" | "SYSTEM";
  actor_id: string | null;
  action: string;
  target_entity: string;
  target_id: string | null;
  metadata: Json;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: "admin" | "super_admin";
  created_at: string;
  updated_at: string;
}
