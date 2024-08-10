import { Star } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface TestimonialItem {
  id: string;
  content: string;
  name: string;
  date: string;
  image: string;
  rating: number;
}

interface TestimonialProps {
  testimonial: TestimonialItem;
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              className={`text-yellow-500 ${
                index < testimonial.rating ? "fill-yellow-500" : "fill-gray-300"
              }`}
            />
          ))}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{testimonial.content}</p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-3 items-center">
          <Image
            src={testimonial.image}
            alt="Author"
            width={50}
            height={50}
            className="rounded-full w-1/6 h-1/6"
          />
          <div className="flex flex-col gap-1">
            <h2 className="font-bold">{testimonial.name}</h2>
            <p className="text-sm text-gray-400">{testimonial.date}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Testimonial;
