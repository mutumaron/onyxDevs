import { Dot, Globe } from "lucide-react";
import React from "react";
import DesignCards from "../CustomUI/DesignCards";
import ProcessUI from "../CustomUI/ProcessUI";
import Image from "next/image";
import Testimonial from "../CustomUI/Testimonial";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

interface DesignProps {
  data: DataItem[];
}

const Design = ({ data }: DesignProps) => {
  const item = data[0];
  return (
    <section className="py-12 flex flex-col gap-20 md:items-center">
      <div className="border-2 rounded-lg flex justify-center items-center px-2">
        <Dot className="text-purple-600 w-8 h-8" />
        <h2 className="font-semibold">Onyx {item.name}</h2>
      </div>
      <div className="flex-col flex gap-5">
        {item.mainIcon}
        <div className="md:flex md:flex-col md:items-center">
          <h1 className="pb-5 font-bold text-xl md:w-1/2 md:text-center">
            {item.mainTitle}
          </h1>
          <p className="text-gray-700 md:text-center">{item.mainContent}</p>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-4 md:pt-7">
        {item.card.map((design) => (
          <DesignCards key={design.id} design={design} />
        ))}
      </div>
      <div className="flex justify-around md:w-full">
        {item.tech.map((img) => (
          <Image
            src={img.image}
            alt="Programme"
            width={50}
            height={50}
            key={img.id}
          />
        ))}
      </div>
      <div className="md:w-full flex flex-col items-center">
        <h1 className="pb-10 font-bold text-xl md:w-3/4 md:text-center">
          We follow a comprehensive {item.name} design process to ensure that we
          deliver the best results for our clients
        </h1>
        <div className="flex flex-col items-center py-5 md:flex-row-reverse md:items-start md:gap-20">
          <ProcessUI process={item.process} />
          <Image src={item.mainSVG} alt="Website" height={350} width={350} />
        </div>
      </div>
      <div>
        <h1 className="pb-7 font-bold text-xl">
          What our customers say about our {item.name}
        </h1>
        <Carousel>
          <CarouselContent className="md:w-3/4">
            {item.testimonial.map((test) => (
              <CarouselItem key={test.id}>
                <Testimonial testimonial={test} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Design;
