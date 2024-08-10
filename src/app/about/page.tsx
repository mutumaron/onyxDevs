import Hero from "@/components/About/Hero";
import Programes from "@/components/About/Programes";
import Team from "@/components/About/Team";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us - Onyx Developers",
  description:
    "Learn more about Onyx Developers, our mission, team, and the services we offer in web and mobile development.",
};

const AboutPage = () => {
  return (
    <section className="flex flex-col gap-20 min-h-screen py-20">
      <Hero />
      <Programes />
      <Team />
    </section>
  );
};

export default AboutPage;
