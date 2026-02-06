import TenantsPage from "@/components/tenants-components/TenantsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Tenants | Lion Science Park",
  description:
    "Discover startups and innovative companies currently incubated at Lion Science Park, driving science, technology, and entrepreneurship.",
};

export default function Page() {
  return <TenantsPage />;
}
