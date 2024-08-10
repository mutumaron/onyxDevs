import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CirclePause, ExternalLink } from "lucide-react";
import Image from "next/image";

const logoData = [
  {
    id: "2",
    logo: "/images/onyxtravels.svg",
    content: "A travel Agency website where we offer tours around the world",
    link: "onyxtravels.com",
    status: false,
  },
  {
    id: "3",
    logo: "/images/onyxhomes.svg",
    content: "An online platform where landlords and tennants can connect",
    link: "onyxhomes.com",
    status: false,
  },
  {
    id: "4",
    logo: "/images/onyxshop.svg",
    content: "Ecommerce platform for physical products on sale",
    link: "onyxshop.com",
    status: false,
  },
  {
    id: "5",
    logo: "/images/onyxfood.svg",
    content: "An online restaurant where orders are done virtually",
    link: "onyxfood.com",
    status: false,
  },
  {
    id: "1",
    logo: "/images/onyxcars.svg",
    content: "An online Caryard where buyers & sellers can meet",
    link: "onyxcars.com",
    status: false,
  },
];

const Projects = () => {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="font-bold text-xl w-3/4">CHECK OUT OUR RECENT PROJECTS</h1>
      <div className="grid gap-5 lg:grid-cols-3">
        {logoData.map((data) => (
          <Card className="" key={data.id}>
            <CardHeader>
              <CardTitle>
                <Image
                  src={data.logo}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-1/3 h-1/3"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{data.content}</p>
            </CardContent>
            <CardFooter>
              <p className="bg-[#F7F7FF] px-2 py-1 flex gap-2 rounded-md text-[#131112] font-semibold cursor-pointer">
                {data.status ? <ExternalLink /> : <CirclePause />}
                <span>
                  <a href={"/"} target="_blank" rel="noopener noreferrer">
                    {data.link}
                  </a>
                </span>
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
