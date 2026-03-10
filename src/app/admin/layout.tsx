"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import AuthModal from "@/components/adminComponents/AuthModal";
import Link from "next/link";
import Image from "next/image";

/**
 *  Allowed admin emails
 * You can later move this to env or database
 */
const ALLOWED_ADMINS = [
  "chiscookeke11@gmail.com",
  "uzodinma.ofoegbuna@unn.edu.ng",
  "team@lionsciencepark.com",
  "lionscienceparkunn1@gmail.com",
  "denis.ekeh@unn.edu.ng"
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //  Check existing session
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) console.error("Auth check failed:", error.message);
      setUser(data.user ?? null);
      setLoading(false);
    };

    getUser();

    //  Listen for auth state changes
    const { data: authListener } =
      supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  //  Sign out handler
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Sign-out error:", error.message);
    else setUser(null);
  };

  //  Loading state
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-[#008CC1] font-medium font-poppins">
        Checking authentication...
      </div>
    );
  }

  // ✅ Not logged in → show auth modal
  if (!user) {
    return <AuthModal />;
  }

  //  Logged in but NOT an admin
  if (!ALLOWED_ADMINS.includes(user.email ?? "")) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4 font-poppins">
        <h2 className="text-xl font-semibold text-red-600">
          Unauthorized Access
        </h2>

        <p className="text-gray-600 text-sm text-center max-w-sm">
          This account does not have permission to access the admin dashboard.
        </p>

        <button
          onClick={handleSignOut}
          className="bg-[#008CC1] text-white px-5 py-2 rounded-md hover:bg-[#008CC1]/90 transition-all"
        >
          Sign Out
        </button>
      </div>
    );
  }

  //  Authorized admin layout
  return (
    <div className="min-h-screen bg-white flex flex-col font-poppins">
      {/* Top Nav */}
      <nav className="p-3">
        <Link href="/">
          <Image src={"/logo/LSP-logo-blue-removeBG.png"} alt="logo" height={10} width={150} className="w-[100px] h-[50px] md:w-[150px] md:h-[60px] object-center object-cover  " />
        </Link>
      </nav>

      {/* Header */}
      <header className="w-full flex  items-center md:items-center justify-between gap-6 px-6 py-4 bg-[#F7FCFE] border-b border-[#008CC1]/20">
        <h2 className="text-xs font-semibold text-[#008CC1]">
          Welcome,{" "}
          <span className="font-normal break-all">{user.email}</span>
        </h2>

        <button
          onClick={handleSignOut}
          className="bg-[#008CC1] text-white text-xs px-3 py-2 rounded-md hover:bg-[#008CC1]/90 transition-all ml-auto"
        >
          Sign Out
        </button>
      </header>

      {/* Page Content */}
      <main className="flex-1 flex flex-col gap-4 ">
        <nav className="w-full bg-gray-100 py-3 overflow-x-auto shadow-sm  " >

          <div className="w-fit px-4 flex items-center  gap-4 flex-nowrap min-w-max  " >
            <Link href={"/admin/"} className="flex items-center text-sm shrink-0 text-white justify-center gap-4 rounded-xs bg-[#008CC1] cursor-pointer hover:bg-[#008CC1]/90 py-3 px-6 h-fit md:text-base font-medium font-lato" >Blog control Panel</Link>
            <Link href={"/admin/tenants-panel"} className="flex items-center shrink-0 text-white justify-center gap-4 rounded-xs bg-[#008CC1] cursor-pointer hover:bg-[#008CC1]/90 py-3 px-6 h-fit text-sm md:text-base font-medium font-lato" >Tenants Control Panel</Link>
            <Link href={"/admin/startups-panel"} className="flex items-center shrink-0 text-white justify-center gap-4 rounded-xs bg-[#008CC1] cursor-pointer hover:bg-[#008CC1]/90 py-3 px-6 h-fit text-sm md:text-base font-medium font-lato" >Startups Control Panel</Link>
            <Link href={"/admin/cohort-registration"} className="flex items-center shrink-0 text-white justify-center gap-4 rounded-xs bg-[#008CC1] cursor-pointer hover:bg-[#008CC1]/90 py-3 px-6 h-fit text-sm md:text-base font-medium font-lato" >Cohort Registrations</Link>
          </div>
        </nav>


        {children}
      </main>
    </div>
  );
}
