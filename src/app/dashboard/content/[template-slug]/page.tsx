"use client";

import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { chatSession } from "../../../../utils/AiModel";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { useParams } from 'next/navigation'
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

// Define a type for form data
interface FormDataType {
  [key: string]: string;
}

export default function Home() {
  const params = useParams();
  const templateSlug = params['template-slug'] as string;

  console.log('params', templateSlug);
  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === templateSlug);
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const { user } = useUser();
  const { totalUsage } = useContext(TotalUsageContext);

  const router = useRouter();
  const { setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);

  const generateAIContent = async (formData: FormDataType) => {
    //totalUsage>=100000&&!userSubscribe
    if (totalUsage >= 100000) {
      console.log("total credits finished");
      router.push("/dashboard/billing");
      // <Alert/>
      return;
    }
    setLoading(true);
    console.log(formData);
    //console.log(chatSession);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

    const result = await chatSession.sendMessage(finalAIPrompt);
    setAiOutput(result.response.text());
    console.log("user", user);
    await SaveInDb(formData, selectedTemplate?.slug, result.response.text());
    console.log(typeof (result.response.text()));
    setLoading(false);
    setUpdateCreditUsage(Date.now());
  }

  const SaveInDb = async (formData: FormDataType, slug: string | undefined, output: string) => {
    const result = await db.insert(AiOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: output,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: Date.now()
    });

    console.log(result);
  }

  return (
    <div className="bg-gray-100">
      <Link href={'/dashboard'}>
        <Button className="bg-indigo-600 mx-5 my-4"><ArrowLeft />Back</Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          loading={loading}
          userFormInput={(formData: FormDataType) => generateAIContent(formData)}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};