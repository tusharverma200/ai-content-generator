
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AiOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'

function UsageTrack() {

  const { user } = useUser()
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext)
  const [setMaxWords] = useState(10000)
  const { updateCreditUsage } = useContext(UpdateCreditUsageContext)

  useEffect(() => {
    user && GetData()
  }, [updateCreditUsage])

  useEffect(() => {
    console.log('user', user)
    user && GetData()
    user && IsUserSubscribe()
  }, [user, totalUsage])

  const GetData = async () => {
    //user?.primaryEmailAddress?.emailAddress
    const result = await db.select().from(AiOutput).where(eq(AiOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
    //  console.log('result', result)
    GetTotalUsage(result)
  }

  const IsUserSubscribe = async () => {
    const result = await db.select().from(userSubscription)
      .where(eq(userSubscription.email, user?.primaryEmailAddress?.emailAddress))

    if (result) {
      setUserSubscription(true)
      setMaxWords(100000)
    }
  }

  const GetTotalUsage = (result: any) => {
    
    let total: number = 0
    result.forEach((element: any) => {
      total = total + Number(element.aiResponse?.length)
    })
    setTotalUsage(total)
    console.log(total)
  }

  return (
    <div className='m-5'>
      <div className='bg-indigo-600 text-white p-3 text-sm rounded-lg' >
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 bg-indigo-800 w-full rounded-full mt-3' >
          <div className='h-2 bg-white rounded-full' style={{ width: (totalUsage / 100000) * 100 }} ></div>
        </div>
        <h2>{totalUsage}/{100000} Credits</h2>
      </div>
      <Button variant={'secondary'} className='my-3 text-indigo-600 text-sm' >Upgrade</Button>
    </div>
  )
}

export default UsageTrack