export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      motorcycles: {
        Row: {
          id: string
          created_at: string
          name: string
          price: number
          category: string
          image_url: string
          engine: string
          power: string
          top_speed: string
          is_new: boolean
          description: string | null
          specs: Json
          features: string[]
          in_stock: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          price: number
          category: string
          image_url: string
          engine: string
          power: string
          top_speed: string
          is_new?: boolean
          description?: string | null
          specs?: Json
          features?: string[]
          in_stock?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          price?: number
          category?: string
          image_url?: string
          engine?: string
          power?: string
          top_speed?: string
          is_new?: boolean
          description?: string | null
          specs?: Json
          features?: string[]
          in_stock?: boolean
        }
      }
      service_appointments: {
        Row: {
          id: string
          created_at: string
          user_id: string
          service_type: string
          preferred_date: string
          preferred_time: string
          motorcycle_details: string
          notes: string | null
          status: string
          completed_at: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          service_type: string
          preferred_date: string
          preferred_time: string
          motorcycle_details: string
          notes?: string | null
          status?: string
          completed_at?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          service_type?: string
          preferred_date?: string
          preferred_time?: string
          motorcycle_details?: string
          notes?: string | null
          status?: string
          completed_at?: string | null
        }
      }
      test_rides: {
        Row: {
          id: string
          created_at: string
          user_id: string
          motorcycle_id: string
          preferred_date: string
          preferred_time: string
          status: string
          notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          motorcycle_id: string
          preferred_date: string
          preferred_time: string
          status?: string
          notes?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          motorcycle_id?: string
          preferred_date?: string
          preferred_time?: string
          status?: string
          notes?: string | null
        }
      }
      users: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string
          phone: string | null
          preferences: Json | null
        }
        Insert: {
          id: string
          created_at?: string
          email: string
          full_name: string
          phone?: string | null
          preferences?: Json | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string
          phone?: string | null
          preferences?: Json | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}