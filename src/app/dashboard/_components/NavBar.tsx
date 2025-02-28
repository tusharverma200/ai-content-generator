import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function NavBar() {
  return (
    <div className='p-5 bg-white shadow-sm border-b-2 flex justify-between items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg' >
<Search/>
<input type="text" placeholder='Search....' className='outline-none' />
</div>
<div className='flex gap-3' >
<div className='bg-indigo-600 p-1 flex justify-between rounded-full text-xs text-white px-2' >
    <h2> Join membership for just $9.99/month</h2>
</div>
<UserButton/>
</div>
    </div>
  )
}

export default NavBar