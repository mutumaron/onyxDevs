"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have a Skeleton component

const PricingCardSkeleton = () => {
  return (
    <Card className="flex flex-col gap-5">
      <CardHeader className="flex flex-col gap-4">
        <CardTitle className="flex justify-between">
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-6 w-6" />
        </CardTitle>

        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </CardHeader>
      <CardContent className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Skeleton className="h-8 w-1/3" />
          <Skeleton className="h-10 w-24" />
        </div>
        <ul className="flex flex-col gap-2">
          {[...Array(5)].map((_, index) => (
            <li
              key={index}
              className="flex gap-3 items-center text-gray-500 text-sm"
            >
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-4 w-3/4" />
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 cursor-pointer text-gray-500 hover:underline">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-1/2" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default PricingCardSkeleton;
