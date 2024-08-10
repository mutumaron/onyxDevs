import BlogGrid from "@/components/Blog/BlogGrid";
import Hero from "@/components/Blog/Hero";
import React from "react";

const BlogPage = () => {
  return (
    <section className="flex flex-col gap-20 min-h-screen py-20">
      <Hero />
      <BlogGrid />
    </section>
  );
};

export default BlogPage;
