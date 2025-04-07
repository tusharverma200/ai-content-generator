"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";


export default function Page() {

   const [historyData, setHistoryData] = useState([])
  const user = useUser()
     useEffect(()=>{

      user&&GetData()
      
     }, [user])

     const GetData=async()=>{
      const result = await db.select().from(AiOutput).where(eq(AiOutput.createdBy,user.user?.primaryEmailAddress?.emailAddress ))
      console.log('result', result)
      setHistoryData(result)
     }


  return (
    <div className="container py-10">
      <div className="max-w-2xl mx-auto text-center mb-6">
        <h2 className="text-3xl font-semibold">History</h2>
        <p className="text-muted-foreground">
          Search your previously generated AI content
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Generated Content History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">Prompt</TableHead>
                <TableHead className="w-1/2">AI Response</TableHead>
                <TableHead className="w-1/6">Date</TableHead>
                <TableHead className="w-1/6">Words</TableHead>
                <TableHead>Copy</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historyData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="flex items-center gap-2">
                 
                    { JSON.parse(item.formData).topic}
                  </TableCell>
                  <TableCell className="truncate max-w-sm">{item.aiResponse}</TableCell>
                  <TableCell>{new Date(Number(item.createdAt)).toLocaleString()}</TableCell>
                  <TableCell>{item.aiResponse.trim().split(/\s+/).length}</TableCell>
                  <TableCell>
                  <Button
  onClick={() => {
    navigator.clipboard.writeText(JSON.stringify(item))
      .then(() => alert("Text copied!")) // Show alert after successful copy
      .catch(() => alert("Failed to copy!")); // Handle errors
  }}
  variant="link"
  className="text-indigo-600"
>
  Copy
</Button>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}