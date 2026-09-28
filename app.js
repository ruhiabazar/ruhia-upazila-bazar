// Ruhia Upazila Bazar
// Supabase connection

(function () {

  // Load Supabase library
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

    window.ruhiaSupabase =
      window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
      );

    console.log(
      "Ruhia Upazila Bazar: Supabase connected."
    );

    // Notify other scripts that Supabase is ready
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
