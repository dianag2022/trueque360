import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dhkdpjxtnloebjcvkjej.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoa2Rwanh0bmxvZWJqY3ZramVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1Mzg1NDgsImV4cCI6MjA1NjExNDU0OH0.8N-7-5gNKgFN3H3dWE-vKmSpq7EuvISQW5OT4nVCqoE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
