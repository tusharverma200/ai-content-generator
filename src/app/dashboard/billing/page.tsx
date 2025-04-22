"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import React from "react";
import { useUser } from "@clerk/nextjs";

export default function Billing() {
  const { user } = useUser();

  return (
    <div className="container py-24 lg:py-2 bg-gray-100">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Pricing
        </h2>
        <p className="mt-1 text-muted-foreground">
          Whatever your status, our offers evolve according to your needs.
        </p>
      </div>

      <div className="mt-2 mx-12 grid sm:grid-cols-1 lg:grid-cols-2 gap-10 lg:items-center">
        {/* Card */}
        <Card>
          <CardHeader className="text-center pb-2">
            <CardTitle className="mb-7">Free</CardTitle>
            <span className="font-bold text-5xl">Free</span>
          </CardHeader>
          <CardDescription className="text-center">
            Forever free
          </CardDescription>
          <CardContent>
            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex space-x-2">
                <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                <span className="text-muted-foreground">10,000 Words/month</span>
              </li>
              <li className="flex space-x-2">
                <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                <span className="text-muted-foreground">50+ Content Templates</span>
              </li>
              <li className="flex space-x-2">
                <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                <span className="text-muted-foreground">Unlimited Download and Copy</span>
              </li>
              <li className="flex space-x-2">
                <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                <span className="text-muted-foreground">1 Month of history</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={"outline"}>
              Currently active plan
            </Button>
          </CardFooter>
        </Card>
        {/* End Card */}
        {/* Card */}
        <Card className="border-primary">
          <CardHeader className="text-center pb-2">
            <Badge className="uppercase w-max self-center mb-3">
              Most popular
            </Badge>
            <CardTitle className="!mb-7">Monthly</CardTitle>
            <span className="font-bold text-5xl">$1</span>
          </CardHeader>
          <CardDescription className="text-center w-11/12 mx-auto">
            All the basics for starting your content creation journey
          </CardDescription>
          <CardContent>
            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex space-x-2">
                <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                <span className="text-muted-foreground">1,00,000 words/month</span>
              </li>
              <li className="flex space-x-2">
                <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                <span className="text-muted-foreground">50+ Content Templates</span>
              </li>
              <li className="flex space-x-2">
                <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                <span className="text-muted-foreground">Unlimited Download and Copy</span>
              </li>
              <li className="flex space-x-2">
                <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                <span className="text-muted-foreground">1 Year of history</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              Get Started
            </Button>
          </CardFooter>
        </Card>
        {/* End Card */}
      </div>
    </div>
  );
}