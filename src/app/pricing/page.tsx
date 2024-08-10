import React from "react";
import Hero from "@/components/Pricing/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Onyx Developers",
  description:
    "Explore our pricing options for web and mobile development services. Find the best plan that suits your needs.",
};

const PricingPage = () => {
  return (
    <section className="flex flex-col gap-20 min-h-screen py-20">
      <Hero />
    </section>
  );
};

export default PricingPage;
