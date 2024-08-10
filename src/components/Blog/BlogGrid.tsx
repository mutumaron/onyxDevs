"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogCard from "../CustomUI/BlogCard";
import { blogData } from "./SingleBlog";
import Link from "next/link";

const BlogGrid = () => {
  return (
    <section className="py-12 flex flex-col gap-10">
      <div className="flex flex-col gap-3 justify-start md:flex-row md:justify-between md:items-center">
        <h3 className="font-bold text-2xl">Recent Posts</h3>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="search" placeholder="search..." />
          <Button type="submit">Search</Button>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {blogData.map((item) => (
          <Link href={`/blog/${item.id}`} key={item.id}>
            <BlogCard
              title={item.title1}
              content={item.content1.substring(0, 150)}
              image={item.image}
              author={item.author}
              date={item.date}
              time={item.time}
            />
          </Link>
        ))}
      </div>
      <Button className="w-1/2 last:mx-auto " disabled>
        Show More
      </Button>
    </section>
  );
};

export default BlogGrid;
