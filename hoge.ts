export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      notices: {
        Row: {
          content: string | null;
          created_at: string | null;
          id: string;
          user_id: string | null;
        };
        Insert: {
          content?: string | null;
          created_at?: string | null;
          id?: string;
          user_id?: string | null;
        };
        Update: {
          content?: string | null;
          created_at?: string | null;
          id?: string;
          user_id?: string | null;
        };
      };
      tasks: {
        Row: {
          created_at: string;
          id: string;
          is_completed: boolean;
          title: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          is_completed?: boolean;
          title: string;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          is_completed?: boolean;
          title?: string;
          user_id?: string;
        };
      };
      todos: {
        Row: {
          created_at: string | null;
          id: string;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          title?: string | null;
          user_id?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
