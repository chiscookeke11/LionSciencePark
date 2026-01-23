import HomePage from "@/components/HomeComponents/HomePage";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Lion Science Park",
  description:
    "Lion Science Park is a center for innovation, scientific research, and technology development, empowering startups, researchers, and innovators to build solutions for the future."
};


export default function Page() {
  return (
    <HomePage />
  )
}