import { createContext } from "react";

type UserSubscriptionType = {
  planId: string;
  isActive: boolean;
  expiryDate: string;
  // Add more fields as per your app logic
};

export const UserSubscriptionContext = createContext<UserSubscriptionType | null>(null);
