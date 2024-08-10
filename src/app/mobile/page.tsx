import Design from "@/components/Design/Design";
import { Smartphone } from "lucide-react";
import React from "react";
import { ReactNode } from "react";

interface Card {
  id: string;
  cardTitle: string;
  cardContent: string;
}

interface Tech {
  id: string;
  image: string;
}

interface Process {
  id: string;
  processTitle: string;
  processContent: string;
}

interface Testimonial {
  id: string;
  content: string;
  name: string;
  date: string;
  image: string;
  rating: number;
}

interface DataItem {
  id: string;
  name: string;
  mainIcon: ReactNode;
  mainTitle: string;
  mainContent: string;
  card: Card[];
  mainSVG: string;
  tech: Tech[];
  process: Process[];
  testimonial: Testimonial[];
}

const DATA: DataItem[] = [
  {
    id: "m1",
    name: "Mobile Design",
    mainIcon: <Smartphone className="w-full h-20" />,
    mainTitle: "At Onyx Developers, we excel in designing mobile applications",
    mainContent:
      "At Onyx Developers, we excel in designing mobile applications that are both visually appealing and highly functional. Our team creates intuitive and engaging mobile experiences tailored to your business needs.",
    card: [
      {
        id: "c1",
        cardTitle: "Custom Mobile App Design",
        cardContent:
          "We design personalized mobile applications that align with your brand identity and meet your specific requirements.",
      },
      {
        id: "c2",
        cardTitle: "App Redesign",
        cardContent:
          "Revamp your existing mobile app with a fresh look and enhanced usability to improve user engagement.",
      },
      {
        id: "c3",
        cardTitle: "UI/UX Design",
        cardContent:
          "Our design experts craft user-centric interfaces that offer a seamless and enjoyable user experience on mobile devices.",
      },
      {
        id: "c4",
        cardTitle: "E-commerce Mobile App Design",
        cardContent:
          "Develop robust mobile e-commerce solutions that enhance the shopping experience and drive conversions.",
      },
    ],
    mainSVG: "/images/mobile-img.svg",
    tech: [
      {
        id: "t2",
        image: "/images/iflutter.svg",
      },
      {
        id: "t3",
        image: "/images/iswift.svg",
      },
      {
        id: "t4",
        image: "/images/ikotlin.svg",
      },
    ],
    process: [
      {
        id: "p1",
        processTitle: "Consultation",
        processContent:
          "Understand your mobile app goals, target audience, and design preferences.This information we will acquire from you.",
      },
      {
        id: "p2",
        processTitle: "Design",
        processContent:
          "Develop design concepts and iterate based on your feedback.We will try our best to make your design as authentic as we can.",
      },
      {
        id: "p3",
        processTitle: "Development",
        processContent:
          "Convert the design into a functional mobile app with performance optimization.We will ensure a smooth yet robust Application that reaches optimum perfomance.",
      },
      {
        id: "p4",
        processTitle: "Testing and Launch",
        processContent:
          "Thoroughly test the app, fix any issues, and support post-launch updates.Finall touches on the Mobile Application before launching.",
      },
    ],
    testimonial: [
      {
        id: "t1",
        content:
          "The mobile app designed by Onyx Developers significantly improved our customer engagement. Highly recommended!",
        name: "Ronny Mutembei",
        date: "Dec 2, 2023",
        image: "/images/bw-man1.jpeg",
        rating: 5,
      },
      {
        id: "t2",
        content:
          "Exceptional mobile design services! The team understood our vision and delivered a fantastic product.",
        name: "Rolex Mutethia",
        date: "Jan 23, 2024",
        image: "/images/bw-man1.jpeg",
        rating: 4,
      },
      {
        id: "t3",
        content:
          "A great experience working with Onyx Developers. They delivered a high-quality mobile app that exceeded our expectations.",
        name: "Newton Kimathi",
        date: "Apr 7, 2024",
        image: "/images/bw-man1.jpeg",
        rating: 5,
      },
    ],
  },
];

const MobilePage = () => {
  return (
    <section className="flex flex-col gap-20 min-h-screen py-20">
      <Design data={DATA} />
    </section>
  );
};

export default MobilePage;
