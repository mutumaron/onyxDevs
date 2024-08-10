import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface relatedBlogProps {
  title: string;
  content: string;
}

const RelatedBlogsCard = ({ title, content }: relatedBlogProps) => {
  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle className="hover:text-gray-700">{title}</CardTitle>
        <CardDescription>{content}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default RelatedBlogsCard;
