import { ArrowRight, CheckCircle, Dot } from "lucide-react";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProfileForm } from "../CustomUI/CustomForm";
import Link from "next/link";

const faqs = [
  {
    question: "What is the typical duration of a project at Onyx Devs?",
    answer:
      "The duration of a project depends on its complexity and scope. However, most projects are completed within 4 to 12 weeks. We ensure timely delivery while maintaining the highest quality standards.",
  },
  {
    question: "How should I discuss payment for my project?",
    answer:
      "Payment terms can be discussed via a call or WhatsApp. We offer flexible payment options to suit your needs and ensure a smooth transaction process.",
  },
  {
    question: "Does Onyx Devs offer hosting services?",
    answer:
      "Yes, we provide hosting services for the first six months at no additional cost. After that, we offer competitive hosting plans to continue supporting your website or application.",
  },
  {
    question: "Is maintenance included with the project?",
    answer:
      "We offer free maintenance for the first three months after the project launch. This includes bug fixes, minor updates, and general support. Afterward, maintenance packages are available based on your needs.",
  },
  {
    question: "How do you handle updates and changes during a project?",
    answer:
      "We follow an agile approach, allowing for updates and changes throughout the project. We keep you informed at every stage, ensuring that the final product aligns with your vision and requirements.",
  },
];

const Hero = () => {
  return (
    <section className="py-12 min-h-screen flex flex-col gap-10 md:items-center">
      <div className="border-2 rounded-lg flex justify-center items-center px-2 md:w-1/2">
        <Dot className="text-blue-600 w-8 h-8" />
        <h2 className="font-semibold">Contact Onyx Developers</h2>
      </div>
      <div className="w-full flex flex-col md:flex-row md:pt-6 gap-10">
        <div className="md:flex-1">
          <ProfileForm />
        </div>
        <div className="flex flex-col gap-5 items-center w-full md:flex-1">
          <h1 className="font-bold text-2xl text-center">
            Some frequently asked questions
          </h1>
          <p className="text-center">
            Get in touch with the Copy.ai team and we'll get back to you and
            help as soon as we can!
          </p>
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
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center pt-8 md:w-full">
        <h1 className="text-2xl font-bold">Ready to get online?</h1>
        <p className="text-center">
          With fast Web Applications, engage your audience, & never struggle
          with the blank page again.
        </p>
        <Link
          href="/pricing"
          className={`w-1/2 flex gap-2 ${buttonVariants()}`}
        >
          <span>Get Your Website Now</span>
          <ArrowRight className="w-4" />
        </Link>
        <div className="flex flex-col md:pt-5 gap-2 md:flex-row md:w-1/2 justify-between">
          <div className="flex gap-2">
            <CheckCircle className="w-4" />
            <p className="text-gray-400 text-center">No online payment</p>
          </div>
          <div className="flex gap-2">
            <CheckCircle className="w-4" />
            <p className="text-gray-400 text-center">
              We will contact you first
            </p>
          </div>
          <div className="flex gap-2">
            <CheckCircle className="w-4" />
            <p className="text-gray-400 text-center">No Deposit required</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
