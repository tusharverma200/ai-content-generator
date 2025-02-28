import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-indigo-500 via-indigo-700 to-blue-600 flex flex-col justify-center items-center text-white ' >
<h2 className='text-bold text-3xl ' >Browse All Templates</h2>
<p className='text-md'>What would you like to create today?</p>
<div className='w-full flex justify-center'>
  <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%] ' >
    <Search className='text-indigo-600' />
    <input type="text" placeholder='Search....' onChange={(event)=>onSearchInput(event.target.value)} className='bg-transparent w-full outline-none text-black' />
  </div>
</div>
    </div>
  )
}

export default SearchSection