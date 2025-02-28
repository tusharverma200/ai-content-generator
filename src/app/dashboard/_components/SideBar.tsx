'use client'

import { FileClock, History, Home, Settings, Wallet, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import UsageTrack from './UsageTrack'
import Link from 'next/link'

function SideBar() {

    const path = usePathname()

    const MenuList = [
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
        },
        {
            name:'Billing',
            icon:WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/settings'
        }
    ]

  return (
    <div className='h-screen relative bg-white p-5 shadow-sm border' >
<div className='flex justify-center' > 
    <Link href={'/dashboard'}>
<Image src={'/logoipsum-252.svg'} alt='logo.svg' height={100} width={100}/>
</Link>
</div>

<div className='mt-10'>
    {MenuList.map((menu, index)=>(
        <Link key={index}  href={menu.path}>
        <div className={`flex gap-2 mb-2 p-3 hover:bg-indigo-500 ${path==menu.path && 'bg-indigo-600 text-white'} hover:text-white rounded cursor-pointer`} >
        <menu.icon className='h-6 w-6'/>
        <h2 className='text-md'  >{menu.name}</h2>
        </div>
        </Link>
    ))}

</div>

<div className='absolute bottom-left ' >
<UsageTrack/>

</div>

    </div>
  )
}

export default SideBar
