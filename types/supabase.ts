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
      users: {
        Row: {
          id: string
          email: string
          subscription_tier: 'web' | 'web_radio_tv' | 'radio_tv' | null,
          subscription_id:string,
          created_at: string
        }
        Insert: {
          id: string
          email: string
          subscription_tier?: 'web' | 'web_radio_tv' | 'radio_tv' | null,
          subscription_id: string,
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          subscription_tier?: 'web' | 'web_radio_tv' | 'radio_tv' | null,
          subscription_id: string,
          created_at?: string
        }
      }
    }
  }
} 