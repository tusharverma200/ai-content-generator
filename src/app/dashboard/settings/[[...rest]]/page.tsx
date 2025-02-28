import React from "react";
import { UserProfile } from "@clerk/nextjs";

function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
     
        <UserProfile
         />
    
    </div>
  );
}

export default Page;
