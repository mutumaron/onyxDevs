import Design from "@/components/Design/Design";
import { Globe } from "lucide-react";
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
    id: "w1",
    name: "Website",
    mainIcon: <Globe className="w-full h-20" />,
    mainTitle: "At Onyx Devs, we specialize in creating modern, responsive,",
    mainContent:
      "At Onyx Developers, we specialize in creating modern, responsive, and user-friendly websites that help businesses establish a strong online presence. Our team of experienced designers and developers is dedicated to delivering high-quality web solutions tailored to meet your unique needs.",
    card: [
      {
        id: "c1",
        cardTitle: "Custom Web Design",
        cardContent:
          "We create bespoke websites that reflect your brand identity and cater to your specific business requirements.",
      },
      {
        id: "c2",
        cardTitle: "Website Redesigns",
        cardContent:
          "Refresh your existing website with a modern look and improved functionality to enhance user experience.",
      },
      {
        id: "c3",
        cardTitle: "UI/UX Design",
        cardContent:
          " Our design experts focus on creating intuitive and engaging user interfaces that provide an exceptional user experience.",
      },
      {
        id: "c4",
        cardTitle: "E-commerce Website Design",
        cardContent:
          "We design and develop robust e-commerce platforms that drive sales and provide a seamless shopping experience for your customers.",
      },
    ],
    mainSVG: "/images/website-img.svg",
    tech: [
      {
        id: "t1",
        image: "/images/ireact.svg",
      },
      {
        id: "t2",
        image: "/images/inextjs.svg",
      },
      {
        id: "t3",
        image: "/images/idjango.svg",
      },
    ],
    process: [
      {
        id: "c1",
        processTitle: "Consultation",
        processContent:
          "We start by understanding your business goals, target audience, and design preferences through detailed discussions.",
      },
      {
        id: "c2",
        processTitle: "Design",
        processContent:
          "We develop design concepts and work closely with you to refine and finalize the visual elements of the website.Using the latest UI/UX designs availble eg. Figma",
      },
      {
        id: "c3",
        processTitle: "Development",
        processContent:
          " Our developers bring the design to life, ensuring that the website is responsive, fast, and optimized for search engines.",
      },
      {
        id: "c4",
        processTitle: "Testing and Launch",
        processContent:
          "We conduct thorough testing to identify and fix any issues before launching the website. After launch, we provide ongoing support and maintenance.",
      },
    ],
    testimonial: [
      {
        id: "t1",
        content:
          "Working with Onyx Developers was a fantastic experience. They took the time to understand our needs and delivered a website that exceeded our expectations. Highly recommend!",
        name: "Ronny Mutembei",
        date: "Dec 2,2022",
        image: "/images/bw-man1.jpeg",
        rating: 5,
      },
      {
        id: "t2",
        content:
          "Working with Onyx Developers was a fantastic experience. They took the time to understand our needs and delivered a website that exceeded our expectations. Highly recommend!",
        name: "Rolex Mutethia",
        date: "Jan 23,2023",
        image: "/images/bw-man1.jpeg",
        rating: 4,
      },
      {
        id: "t3",
        content:
          "Working with Onyx Developers was a fantastic experience. They took the time to understand our needs and delivered a website that exceeded our expectations. Highly recommend!",
        name: "Newton Kimathi",
        date: "Apr 7,2024",
        image: "/images/bw-man1.jpeg",
        rating: 3,
      },
    ],
  },
];

const WebPage = () => {
  return (
    <section className="flex flex-col gap-20 min-h-screen py-20">
      <Design data={DATA} />
    </section>
  );
};

export default WebPage;
