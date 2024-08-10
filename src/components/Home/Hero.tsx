"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  ChartNoAxesCombined,
  Dot,
  GlobeLock,
  MonitorCog,
  Rocket,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-10 pt-12">
      <div className="flex flex-col items-center gap-7">
        <div className="border-2 rounded-lg flex justify-center items-center px-2 lg:w-1/4">
          <Dot className="text-green-600 w-8 h-8" />
          <h2 className="font-semibold">We're available for Work</h2>
        </div>
        <h3 className="text-center lg:w-3/4 font-extrabold text-2xl">
          GET YOUR BUSSINES ONLINE.ORDER YOUR MORDERN WEBSITE TODAY GET YOUR
          BUSSINES
        </h3>
        <p className="lg:w-1/2 text-center">
          Need a custom made website or mobile application for your bussines? At
          Onyx Developers we will make this possible with our fast and mordern
          Applications.At affordable prices you can get your bussines online to
          reach more and more customers.
        </p>
        <Button onClick={() => router.push("pricing")}>
          Get a Website Now
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-4 grid-cols-2 grid-rows-2">
        <Card>
          <CardHeader>
            <MonitorCog />
            <CardDescription>Modern Website UI </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Rocket />
            <CardDescription>Fast Databases</CardDescription>
          </CardHeader>
        </Card>{" "}
        <Card>
          <CardHeader>
            <ChartNoAxesCombined />
            <CardDescription>Great SEO optimization</CardDescription>
          </CardHeader>
        </Card>{" "}
        <Card>
          <CardHeader>
            <GlobeLock />
            <CardDescription>Secure Payment APIs</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
