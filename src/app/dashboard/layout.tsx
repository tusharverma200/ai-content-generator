"use client"

import React, { useState } from 'react'
import SideBar from './_components/SideBar';
import NavBar from './_components/NavBar';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [totalUsage, setTotalUsage] = useState<Number>(0)
    const [userSubscription, setUserSubscription] = useState<boolean>(false)
    const[updateCreditUsage, setUpdateCreditUsage] = useState<any>()
  return (
    <TotalUsageContext.Provider value={{totalUsage, setTotalUsage}}>
      <UserSubscriptionContext.Provider value={{userSubscription, setUserSubscription}}>
        <UpdateCreditUsageContext.Provider value={{updateCreditUsage, setUpdateCreditUsage}} >
    <div className='bg-slate-100 h-screen'>
        <div className='md:w-64 hidden md:block fixed' >
            <SideBar/>
        </div>
        <div className='md:ml-64' > 
            <NavBar/>
            {children}</div>
       </div>
       </UpdateCreditUsageContext.Provider>
       </UserSubscriptionContext.Provider>
       </TotalUsageContext.Provider>
  )
}

export default layout