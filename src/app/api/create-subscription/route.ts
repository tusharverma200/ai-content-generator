import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST() {
  try {
    console.log("Entered API route");

    // Initialize Razorpay instance
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    // Create subscription
    const result = await instance.subscriptions.create({
      plan_id: "plan_Q0h9fK2SiEeKkn",
      customer_notify: 1,
      quantity: 1,
      total_count: 1,
      addons: [],
      notes: {
        key1: "Note",
      },
    });

    console.log("Subscription created:", result);
    return NextResponse.json(result);
  } catch (error: unknown) {
    console.error("Error creating subscription:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
