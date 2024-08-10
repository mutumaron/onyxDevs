"use client";

import { Dot } from "lucide-react";
import React from "react";
import BlogCard from "../CustomUI/BlogCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlogCardSkeleton from "../CustomUI/Skeleton/BlogCardSkeleton";
import { blogData } from "./SingleBlog";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-12 min-h-screen">
      <div className="flex flex-col gap-10 md:items-center">
        <div className="border-2 rounded-lg flex justify-center items-center px-2 md:w-1/2">
          <Dot className="text-orange-600 w-8 h-8" />
          <h2 className="font-semibold">Onyx Developers Blogs</h2>
        </div>
        <div className="flex flex-col gap-5 md:items-center">
          <h1 className="font-bold text-2xl md:w-3/4 md:text-center md:text-3xl">
            Increase Your Technological Understanding with Onyx.Dev Blogs
          </h1>
          <p className=" text-gray-400 md:text-center md:w-3/4">
            Thoughts on the future of online businesses.You'll find practical
            content,tips & tricks and how-to guides from our technical articles
          </p>
        </div>
      </div>
      <div className="pt-10">
        <Carousel>
          <CarouselContent className="md:w-3/4">
            {blogData.slice(0, 3).map((item) => (
              <CarouselItem key={item.id}>
                <Link href={`/blog/${item.id}`}>
                  <BlogCard
                    title={item.title1}
                    content={item.content1.substring(0, 150)}
                    image={item.image}
                    author={item.author}
                    date={item.date}
                    time={item.time}
                  />
                </Link>
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

export default Hero;
