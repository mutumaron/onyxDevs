"use client";

import React, { useEffect, useState } from "react";
import PricingCard from "../CustomUI/PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import supabase from "../../../supabase/supabase";
import PricingCardSkeleton from "../CustomUI/Skeleton/PricingCardSkeleton";
import { PricingData } from "@/lib/types";

const Pricing = () => {
  const [data, setData] = useState<PricingData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("pricing").select("*");

      if (error) {
        console.log(error);
      } else {
        setData(data);
      }
      if (data) {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const webPlans = data?.filter((plan) => plan.type === "web");
  const mobilePlans = data?.filter((plan) => plan.type === "mobile");

  return (
    <section className="py-12">
      <div className="flex flex-col">
        <h3 className="font-bold text-2xl pb-7">Our Payment Plans</h3>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">WebSite</TabsTrigger>
            <TabsTrigger value="password">Mobile</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="grid gap-5 lg:grid-cols-3">
              {loading ? (
                <>
                  <PricingCardSkeleton />
                  <PricingCardSkeleton />
                  <PricingCardSkeleton />
                </>
              ) : (
                <>
                  {webPlans?.map((plan) => (
                    <PricingCard key={plan.id} data={plan} />
                  ))}
                </>
              )}
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="grid gap-5 lg:grid-cols-3">
              {loading ? (
                <>
                  <PricingCardSkeleton />
                  <PricingCardSkeleton />
                </>
              ) : (
                <>
                  {mobilePlans?.map((plan) => (
                    <PricingCard key={plan.id} data={plan} />
                  ))}
                </>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Pricing;
