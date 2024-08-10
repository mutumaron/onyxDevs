import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  time: string;
}

const BlogCard = ({
  title,
  content,
  image,
  author,
  date,
  time,
}: BlogCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="hover:text-gray-700">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-3 items-center">
          <Image
            src={image}
            alt={author}
            width={50}
            height={50}
            className="rounded-full w-1/6 h-1/6"
          />
          <div className="flex flex-col gap-1">
            <h2 className="font-bold">{author}</h2>
            <p className="text-sm text-gray-400">{date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <h2 className="font-bold text-sm">{time} min read</h2>
          <ArrowRight />
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
