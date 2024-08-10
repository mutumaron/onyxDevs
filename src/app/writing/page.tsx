import Design from "@/components/Design/Design";
import { BookText } from "lucide-react";
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
    id: "t1",
    name: "Technical Writing",
    mainIcon: <BookText className="w-full h-20" />,
    mainTitle:
      "At Onyx Developers, we provide expert technical writing services",
    mainContent:
      "At Onyx Developers, we provide expert technical writing services to help you communicate complex information clearly and effectively. Our team delivers high-quality documentation that meets industry standards and supports your business goals.",
    card: [
      {
        id: "c1",
        cardTitle: "Technical Documentation",
        cardContent:
          "Create comprehensive and detailed documents that explain your products, processes, or systems.",
      },
      {
        id: "c2",
        cardTitle: "User Manuals",
        cardContent:
          "Develop easy-to-understand user guides and manuals that assist your customers in using your products.",
      },
      {
        id: "c3",
        cardTitle: "API Documentation",
        cardContent:
          "Provide clear and concise documentation for your APIs to facilitate developer integration.",
      },
      {
        id: "c4",
        cardTitle: "Content Editing",
        cardContent:
          "Edit and improve existing documentation to enhance clarity, accuracy, and readability.",
      },
    ],
    mainSVG: "/images/writing-img.svg",
    tech: [
      {
        id: "t1",
        image: "/images/ipython.svg",
      },
      {
        id: "t2",
        image: "/images/ichatgpt.svg",
      },
      {
        id: "t3",
        image: "/images/igit.svg",
      },
    ],
    process: [
      {
        id: "p1",
        processTitle: "Consultation",
        processContent:
          "Discuss your documentation needs and project requirements.",
      },
      {
        id: "p2",
        processTitle: "Writing",
        processContent:
          "Develop the content based on your specifications and feedback.",
      },
      {
        id: "p3",
        processTitle: "Review",
        processContent:
          "Edit and refine the documentation to ensure accuracy and clarity.",
      },
      {
        id: "p4",
        processTitle: "Delivery",
        processContent:
          "Provide the final documentation in your preferred format and offer revisions as needed.",
      },
    ],
    testimonial: [
      {
        id: "t1",
        content:
          "The technical documentation provided by Onyx Developers was clear, detailed, and extremely helpful for our team.",
        name: "Ronny Mutembei",
        date: "Dec 2, 2023",
        image: "/images/bw-man1.jpeg",
        rating: 5,
      },
      {
        id: "t2",
        content:
          "Their technical writing services are top-notch. The user manuals and API documentation were exactly what we needed.",
        name: "Rolex Mutethia",
        date: "Jan 23, 2024",
        image: "/images/bw-man1.jpeg",
        rating: 4,
      },
      {
        id: "t3",
        content:
          "Excellent work on our technical content. The clarity and precision in the documentation have greatly benefited our projects.",
        name: "Newton Kimathi",
        date: "Apr 7, 2024",
        image: "/images/bw-man1.jpeg",
        rating: 5,
      },
    ],
  },
];

const WritingPage = () => {
  return (
    <section className="flex flex-col gap-20 min-h-screen py-20">
      <Design data={DATA} />
    </section>
  );
};

export default WritingPage;
