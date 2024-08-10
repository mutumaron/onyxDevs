import SingleBlog from "@/components/Blog/SingleBlog";
import React from "react";

const SingleBlogPage = ({ params }: { params: { blogId: string } }) => {
  return (
    <section className="flex flex-col gap-20 min-h-screen py-20">
      <SingleBlog id={params.blogId} />
    </section>
  );
};

export default SingleBlogPage;
