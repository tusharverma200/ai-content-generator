import { createContext } from "react";

type UpdateCreditUsageType = (usedCredits: number) => void;

export const UpdateCreditUsageContext = createContext<UpdateCreditUsageType | null>(null);
