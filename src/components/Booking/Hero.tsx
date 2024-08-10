"use client";

import { Dot } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BookingForm } from "../CustomUI/CustomForm";
import PricingCard from "../CustomUI/PricingCard";
import { PricingData } from "@/lib/types";
import { useSearchParams } from "next/navigation";

import supabase from "../../../supabase/supabase";
import PricingCardSkeleton from "../CustomUI/Skeleton/PricingCardSkeleton";

const Hero = () => {
  const [data, setData] = useState<PricingData | null>(null);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("pricing")
        .select("*")
        .eq("id", bookingId)
        .single();
      if (data) {
        setData(data);
        setLoading(false);
      } else {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="flex flex-col gap-12 items-center py-10">
      <div className="border-2 rounded-lg flex justify-center items-center px-2 lg:w-1/4">
        <Dot className="text-teal-600 w-8 h-8" />
        <h2 className="font-semibold">Place Your Order now</h2>
      </div>
      <div className="flex flex-col gap-10 md:flex-row-reverse w-full">
        <div className="flex-1">
          <BookingForm />
        </div>
        <div className="flex-1">
          {loading ? (
            <>
              <PricingCardSkeleton />
            </>
          ) : (
            data && <PricingCard data={data} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
