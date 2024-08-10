import Design from "@/components/Design/Design";
import { DatabaseZap } from "lucide-react";
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
    id: "d1",
    name: "Database Design",
    mainIcon: <DatabaseZap className="w-full h-20" />,
    mainTitle:
      "At Onyx Developers, we offer comprehensive database design solutions",
    mainContent:
      "At Onyx Developers, we offer comprehensive database design solutions that ensure data integrity, security, and efficiency. Our team specializes in creating robust database systems tailored to your business needs.",
    card: [
      {
        id: "c1",
        cardTitle: "Custom Database Design",
        cardContent:
          "Create databases that reflect your business requirements and support your data management needs.We will integrate all your data into one simplified Database",
      },
      {
        id: "c2",
        cardTitle: "Database Optimization",
        cardContent:
          "Enhance the performance of your existing databases through optimization and tuning.This will increase speed and overall perfomance",
      },
      {
        id: "c3",
        cardTitle: "Data Migration",
        cardContent:
          "Seamlessly migrate your data from old systems to new ones with minimal disruption.Digitalize your organization",
      },
      {
        id: "c4",
        cardTitle: "Database Integration",
        cardContent:
          "Integrate your databases with other systems and applications for improved functionality and data flow.",
      },
    ],
    mainSVG: "/images/database-img.svg",
    tech: [
      {
        id: "t1",
        image: "/images/imysql.svg",
      },
      {
        id: "t2",
        image: "/images/ipostgresql.svg",
      },
      {
        id: "t3",
        image: "/images/imicrosoft-access.svg",
      },
    ],
    process: [
      {
        id: "p1",
        processTitle: "Consultation",
        processContent: "Assess your database needs and business requirements.",
      },
      {
        id: "p2",
        processTitle: "Design",
        processContent:
          "Develop a database schema that ensures data integrity and efficiency.",
      },
      {
        id: "p3",
        processTitle: "Implementation",
        processContent:
          "Set up and configure the database according to your specifications.",
      },
      {
        id: "p4",
        processTitle: "Testing and Maintenance",
        processContent:
          "Perform testing to ensure optimal performance and provide ongoing maintenance.",
      },
    ],
    testimonial: [
      {
        id: "t1",
        content:
          "Our database management has never been smoother. The team’s expertise is evident in their work.",
        name: "Ronny Mutembei",
        date: "Dec 2, 2023",
        image: "/images/bw-man1.jpeg",
        rating: 5,
      },
      {
        id: "t2",
        content:
          "Great database design and integration services. The transition to the new system was seamless.",
        name: "Rolex Mutethia",
        date: "Jan 23, 2024",
        image: "/images/bw-man1.jpeg",
        rating: 4,
      },
      {
        id: "t3",
        content:
          "Exceptional service! The database system they built for us is reliable and efficient.",
        name: "Newton Kimathi",
        date: "Apr 7, 2024",
        image: "/images/bw-man1.jpeg",
        rating: 5,
      },
    ],
  },
];

const DataBasePage = () => {
  return (
    <section className="flex flex-col gap-20 min-h-screen py-20">
      <Design data={DATA} />
    </section>
  );
};

export default DataBasePage;
