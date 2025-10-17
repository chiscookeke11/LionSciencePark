"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import AuthModal from "@/components/adminComponents/AuthModal";
import Link from "next/link";
import Image from "next/image";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Check if user already logged in
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) console.error("Auth check failed:", error.message);
      setUser(data.user ?? null);
      setLoading(false);
    };

    getUser();

    // ✅ Listen for login/logout changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // ✅ Sign-out function
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Sign-out error:", error.message);
    else setUser(null);
  };

  // ✅ Show loading state while checking session
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-[#008CC1] font-medium font-poppins ">
        Checking authentication...
      </div>
    );
  }

  // ✅ Show login modal if user not logged in
  if (!user) {
    return <AuthModal />;
  }

  // ✅ If logged in, show dashboard + sign out button
  return (
    <div className="min-h-screen bg-white flex flex-col font-poppins ">
      <nav className="p-3" >  <Link href={"/"} >
        <Image src={"/logo/LSP-logo-blue-removeBG.png"} alt="logo" height={10} width={150} className="w-[100px] h-[50px] md:w-[150px] md:h-[60px] object-center object-cover  " />
      </Link> </nav>
      <header className="w-full flex items-center justify-between px-6 py-4 bg-[#F7FCFE] border-b border-[#008CC1]/20">
        <h2 className="text-lg font-semibold text-[#008CC1]">
          Welcome, <span className="font-normal">{user.email}</span>
        </h2>

        <button
          onClick={handleSignOut}
          className="bg-[#008CC1] text-white px-5 py-2 rounded-md hover:bg-[#008CC1]/90 transition-all"
        >
          Sign Out
        </button>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}
