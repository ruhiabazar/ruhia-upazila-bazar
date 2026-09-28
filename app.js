// Ruhia Upazila Bazar
// Supabase connection

(function () {

  const script = document.createElement("script");

  script.src =
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

  script.onload = function () {

    if (
      typeof SUPABASE_URL === "undefined" ||
      typeof SUPABASE_PUBLISHABLE_KEY === "undefined"
    ) {
      console.error(
        "Supabase configuration not found."
      );
      return;
    }

    const client =
      window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
      );

    // Main client name
    window.supabaseClient = client;

    // Backup/global name
    window.ruhiaSupabase = client;

    console.log(
      "Ruhia Upazila Bazar: Supabase connected."
    );

    window.dispatchEvent(
      new CustomEvent("ruhiaSupabaseReady")
    );

  };

  script.onerror = function () {

    console.error(
      "Supabase library could not be loaded."
    );

  };

  document.head.appendChild(script);

})();
