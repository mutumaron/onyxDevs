"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheck, ExternalLink, Globe, Smartphone } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { PricingData } from "@/lib/types";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface PricingCardProps {
  data: PricingData;
}

const PricingCard = ({ data }: PricingCardProps) => {
  return (
    <Card className="flex flex-col items-between justify-between h-full">
      <CardHeader className="flex flex-col gap-4">
        <CardTitle className="flex justify-between">
          {data.title1}
          {data.type == "web" ? <Globe /> : <Smartphone />}
        </CardTitle>
        <CardDescription>{data.content1.substring(0, 100)}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-10 flex-grow ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl">KSH {data.price}</h1>
          <Link
            href={{
              pathname: "/booking",
              query: {
                bookingId: data.id,
                bookingTitle: data.title1,
              },
            }}
            className={buttonVariants()}
          >
            Check it Out
          </Link>
        </div>
        <ul className="flex flex-col gap-2">
          {data.list1.map((item: string) => (
            <li
              key={item}
              className="flex gap-3 items-center text-gray-500 text-sm"
            >
              <span>
                <CircleCheck />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <p className="flex gap-2 cursor-pointer text-gray-500 hover:underline">
              <span>
                <ExternalLink />
              </span>
              Learn more
            </p>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{data.title2}</AlertDialogTitle>
              <AlertDialogDescription>{data.content2}</AlertDialogDescription>
              <AlertDialogDescription>
                <ul className="flex flex-col gap-2">
                  {data.list2.map((item: string) => (
                    <li
                      key={item}
                      className="flex gap-3 items-center text-gray-500 text-sm"
                    >
                      <span>
                        <CircleCheck />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>
                <Link
                  href={{
                    pathname: "/booking",
                    query: {
                      bookingId: data.id,
                      bookingTitle: data.title1,
                    },
                  }}
        
                >
                  Check it Out
                </Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
