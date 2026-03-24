// Generated Supabase types — will be replaced by `supabase gen types`
// For now, manual definition matching our schema

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          phone: string | null;
          role: "resident" | "vendor" | "landlord" | "admin";
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["users"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["users"]["Insert"]>;
      };
      properties: {
        Row: {
          id: string;
          landlord_id: string;
          name: string;
          address: string;
          city: string;
          state: string;
          zip: string;
          type: string;
          unit_count: number;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["properties"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["properties"]["Insert"]>;
      };
      units: {
        Row: {
          id: string;
          property_id: string;
          unit_number: string;
          bedrooms: number;
          bathrooms: number;
          sqft: number | null;
          rent_amount: number;
          status: string;
        };
        Insert: Omit<Database["public"]["Tables"]["units"]["Row"], "id">;
        Update: Partial<Database["public"]["Tables"]["units"]["Insert"]>;
      };
      leases: {
        Row: {
          id: string;
          unit_id: string;
          tenant_id: string;
          landlord_id: string;
          start_date: string;
          end_date: string;
          monthly_rent: number;
          security_deposit: number;
          status: string;
          document_urls: string[];
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["leases"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["leases"]["Insert"]>;
      };
      rent_payments: {
        Row: {
          id: string;
          lease_id: string;
          tenant_id: string;
          landlord_id: string;
          amount: number;
          platform_fee: number;
          due_date: string;
          paid_date: string | null;
          status: string;
          stripe_payment_intent_id: string | null;
          auto_pay: boolean;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["rent_payments"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["rent_payments"]["Insert"]>;
      };
      work_orders: {
        Row: {
          id: string;
          unit_id: string;
          tenant_id: string;
          landlord_id: string;
          vendor_id: string | null;
          title: string;
          description: string;
          category: string;
          urgency: string;
          status: string;
          photo_urls: string[];
          completion_photo_urls: string[];
          completion_notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["work_orders"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["work_orders"]["Insert"]>;
      };
      vendors: {
        Row: {
          id: string;
          user_id: string;
          business_name: string;
          services: string[];
          license_number: string | null;
          insurance_url: string | null;
          license_url: string | null;
          service_area: string[];
          hourly_rate: number | null;
          flat_rate_min: number | null;
          flat_rate_max: number | null;
          rating: number;
          review_count: number;
          status: string;
          stripe_account_id: string | null;
          portfolio_urls: string[];
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["vendors"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["vendors"]["Insert"]>;
      };
      vendor_landlord_relationships: {
        Row: {
          id: string;
          vendor_id: string;
          landlord_id: string;
          track: string;
          status: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["vendor_landlord_relationships"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["vendor_landlord_relationships"]["Insert"]>;
      };
      bids: {
        Row: {
          id: string;
          work_order_id: string;
          vendor_id: string;
          amount: number;
          estimated_hours: number | null;
          description: string;
          available_date: string;
          status: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["bids"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["bids"]["Insert"]>;
      };
      invoices: {
        Row: {
          id: string;
          work_order_id: string;
          vendor_id: string;
          landlord_id: string;
          line_items: unknown;
          subtotal: number;
          platform_fee: number;
          total: number;
          receipt_urls: string[];
          status: string;
          stripe_payment_intent_id: string | null;
          created_at: string;
          paid_at: string | null;
        };
        Insert: Omit<Database["public"]["Tables"]["invoices"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["invoices"]["Insert"]>;
      };
      transactions: {
        Row: {
          id: string;
          landlord_id: string;
          property_id: string;
          unit_id: string | null;
          type: string;
          category: string;
          amount: number;
          description: string;
          reference_id: string | null;
          reference_type: string | null;
          date: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["transactions"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["transactions"]["Insert"]>;
      };
      notifications: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          message: string;
          type: string;
          read: boolean;
          action_url: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["notifications"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["notifications"]["Insert"]>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
