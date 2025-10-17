"use client";

import { supabase } from "../../../lib/supabaseClient";

export default function AuthModal() {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/admin`,
      },
    });

    if (error) console.error("Google login failed:", error.message);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#F7FCFE] font-poppins">
      <div className="p-8 rounded-lg shadow-lg bg-white flex flex-col items-center gap-6">
        <h2 className="text-2xl font-semibold text-[#008CC1]">Admin Login</h2>
        <button
          onClick={handleGoogleLogin}
          className="bg-[#008CC1] text-white py-3 px-6 rounded-md hover:bg-[#008CC1]/90 transition-all"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
