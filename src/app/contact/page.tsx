import Hero from "@/components/Contact/Hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us - Onyx Developers",
  description:
    "Get in touch with Onyx Developers. We are here to answer your questions and assist you with your web and mobile development needs.",
};

const ContactPage = () => {
  return (
    <section className="flex flex-col gap-20 min-h-screen py-20">
      <Hero />
    </section>
  );
};

export default ContactPage;
