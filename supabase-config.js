const SUPABASE_URL = "https://amvawslcjxgwmsconlvj.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_uIwMVJZ-SbDl6OxJSn8Fkw_6OZqZRGX";

/* Supabase client তৈরি */
if (window.supabase) {
  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  window.ruhiaSupabase = window.supabaseClient;
}
