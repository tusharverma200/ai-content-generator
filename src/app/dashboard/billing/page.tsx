"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon, Loader2Icon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { UserSubscription } from "@/utils/schema";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";

export default function Billing() {
  const [loading, setLoading] = useState(false);
  const user = useUser()
  // Load Razorpay script dynamically
  useEffect(() => {
    const loadRazorpayScript = () => {
      if (!window.Razorpay) {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => console.log("Razorpay script loaded");
        document.body.appendChild(script);
      }
    };

    loadRazorpayScript();
  }, []);

  const createSubscription = () => {
    setLoading(true);
    axios
      .post("/api/create-subscription", {})
      .then((res) => {
        console.log(res.data);
        onPayment(res.data.id);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const onPayment = (subId: string) => {
    if (!window.Razorpay) {
      console.error("Razorpay SDK not loaded");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "AI Content Generator",
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        console.log(resp);
        setLoading(false);
        if(resp){
            SaveSubscription(resp.razorpay_payment_id)
        }
      },
    };
    //@ts-expect-error
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const SaveSubscription =async(paymentId:string)=>{
const result = await db.insert(UserSubscription)
.values({
email:user.user?.primaryEmailAddress?.emailAddress,
userName:user.user?.fullName,
active:true,
paymentId:paymentId,
joinDate:Date.now()
})
if(result){
    window.location.reload();
}

  }

  return (
    <div className="container py-24 lg:py-2 bg-gray-100">
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Pricing
        </h2>
        <p className="mt-1 text-muted-foreground">
          Whatever your status, our offers evolve according to your needs.
        </p>
      </div>

      <div className=" mt-2 mx-12 grid sm:grid-cols-1 lg:grid-cols-2 gap-10 lg:items-center">
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
              <Button disabled={loading} onClick={createSubscription} className="w-full gap-2">{loading&&<Loader2Icon className="animate-spin" />}Get Started</Button>
            </CardFooter>
          </Card>
          {/* End Card */}
      </div>
    </div>
  );
}
