import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://yahvestqthzyfwtrnbho.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhaHZlc3RxdGh6eWZ3dHJuYmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMDQwNzksImV4cCI6MjA2NDc4MDA3OX0.NR7lNIo7OBv4CYewhgUvg8qCnirwSGaLpX-DfBixTG4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;