import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const constants = [
  {
    id: "p1",
    name: "Ronny",
    image: "/images/ronny.jpg",
    content: "Web Developer",
    description:
      "Ronny is a talented web developer with expertise in modern technologies like HTML, CSS, JavaScript, and React. He excels in building responsive, user-friendly websites that combine aesthetics with seamless functionality.",
    twitter: "https://x.com/tembe21",
    linkedIn: "https://www.linkedin.com/in/ronny-mutembei-23886b320/",
  },
  {
    id: "p2",
    name: "Bonnie",
    image: "/images/bonnie.jpg",
    content: "Technical Writer",
    description:
      "Bonnie is an experienced technical writer who specializes in creating clear, concise documentation for complex technologies. She excels in translating technical jargon into easy-to-understand content, ensuring accuracy and readability for all audiences",
    twitter: "https://x.com/The_GreatBonnie",
    linkedIn: "https://www.linkedin.com/in/thegreatbonnie/",
  },
  {
    id: "p3",
    name: "Nesh",
    image: "/images/person.jpeg",
    content: "Mobile Developer",
    description:
      "Nesh is a proficient mobile developer with expertise in building dynamic and user-friendly mobile applications. She specializes in using modern frameworks like React Native and Flutter to create seamless, high-performance apps for both iOS and Android platforms.",
    twitter: "https://x.com/The_GreatBonnie",
    linkedIn: "https://www.linkedin.com/in/ronny-mutembei-23886b320/",
  },
];

const Team = () => {
  return (
    <section className="py-20 flex flex-col gap-10">
      <div className="flex flex-col gap-5 md:flex-row md:gap-0 md:justify-between">
        <h1 className="font-bold text-xl md:text-2xl md:flex-1 md:w-1/4">
          Meet The Team - Our Professionals
        </h1>
        <p className="pb-7 flex-1">
          Here at Onyx Devs, we take immense pride in the team of dedicated
          experts who drive our success. Each professional brings a wealth of
          experience,
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-3">
        {constants.map((person) => (
          <Card key={person.id} className=" grid justify-start px-2">
            <CardHeader className="flex flex-row gap-4 items-center">
              <Image
                src={person.image}
                alt={person.name}
                width={150}
                height={150}
                className="rounded-full w-1/3 h-full"
              />
              <div className="flex flex-col gap-2 w-full">
                <CardTitle className="">{person.name}</CardTitle>
                <CardDescription className="">{person.content}</CardDescription>
              </div>
            </CardHeader>
            <CardDescription className="pb-2">
              {person.description}
            </CardDescription>
            <CardFooter className="flex  justify-around w-full">
              <a
                href={person.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>

              <a
                href={person.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <Instagram />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Team;
