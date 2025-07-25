
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type BlogPost = {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  image_url: string
  alt_text: string
  slug: string
  published: boolean
  created_at: string
  updated_at: string
}
