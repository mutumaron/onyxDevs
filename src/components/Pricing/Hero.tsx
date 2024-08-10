"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import PricingCard from "../CustomUI/PricingCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PricingCardSkeleton from "../CustomUI/Skeleton/PricingCardSkeleton";
import { PricingData } from "@/lib/types";
import supabase from "../../../supabase/supabase";

const faqs = [
  {
    question:
      "What factors influence the pricing of your development services?",
    answer:
      "Our pricing depends on several factors including the complexity of the project, the technology stack required, the estimated development time, and any additional services such as ongoing maintenance or support. We provide customized quotes based on your specific requirements.",
  },
  {
    question: "Are there any additional costs I should be aware of?",
    answer:
      "Additional costs may include third-party services, licensing fees, or specialized tools required for your project. We will discuss any potential additional costs upfront and ensure you have a clear understanding of all expenses before starting the project.",
  },
  {
    question: "Do you provide payment on delivery?",
    answer:
      "Yes, we offer a payment-on-delivery option for our services. This means you can review the completed project before making the final payment. We do not require a deposit to start the project; however, a payment schedule will be agreed upon based on project milestones.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, we offer customer support through various channels. You can contact us via email, phone, or live chat on our website. Our customer support team is available Monday through Friday from 9 AM to 5 PM to assist you with any questions or concerns.",
  },
  {
    question:
      " Do you provide discounts for long-term contracts or large projects?",
    answer:
      "We offer discounts for long-term contracts and larger projects. The discount amount depends on the scope and duration of the engagement. Contact us to discuss your project in detail, and we can provide a customized quote with potential discounts included.",
  },
];

const Hero = () => {
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
    <section className="flex flex-col gap-10 py-12 md:gap-20">
      <div className="flex flex-col md:items-center">
        <h1 className="font-bold text-xl pb-5">
          Fair Pricing For Our Services
        </h1>
        <p className="md:text-center">
          Choose a Suitable Package For your bussines porfolio.Let's explore the
          online market together.Fast,Mordern and User Friendly Interface for
          optimum customer experience.
        </p>
      </div>
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
      <div className="w-full">
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Hero;
