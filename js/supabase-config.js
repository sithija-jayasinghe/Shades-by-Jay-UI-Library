// Supabase Configuration
// 1. Go to https://supabase.com and create a new project
// 2. Go to Project Settings -> API
// 3. Copy the URL and the "anon" public key below

const SUPABASE_URL = 'https://inlgomcjwlextxiehsxv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlubGdvbWNqd2xleHR4aWVoc3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5NDYwMDksImV4cCI6MjA4MDUyMjAwOX0.4J_vSIue5wgkQEfhQEnER6iP3AzfR83Ij8b1DnmUn2Y';

// Initialize Supabase Client
if (typeof supabase === 'undefined') {
    console.error('Supabase SDK not loaded! Make sure to include the script tag in your HTML.');
} else if (SUPABASE_URL && SUPABASE_KEY) {
    console.log('Initializing Supabase...');
    window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
        auth: {
            persistSession: false // Since we don't need auth for public submissions
        },
        global: {
            headers: {
                'apikey': SUPABASE_KEY
            }
        }
    });
} else {
    console.warn('Supabase not configured. Please update js/supabase-config.js');
}
