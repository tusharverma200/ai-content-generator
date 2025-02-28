'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2Icon } from 'lucide-react'

interface PROPS{
  selectedTemplate?:TEMPLATE
  userFormInput:any
  loading:boolean
}

function FormSection({selectedTemplate, userFormInput, loading}:PROPS) {

  const [formData, setFormData] = useState<any>();
  const handleInputChange=(event:any)=>{
const {name, value} = event.target
setFormData({...formData, [name]:value})
  }

  const onSubmit =(e:any)=>{
    e.preventDefault()
  //  console.log(formData)
    userFormInput(formData)
  }

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white' >
      <Image src={selectedTemplate?.icon} alt="icon" width={50} height={50} />
      <h2 className='font-bold text-lg my-2 text-purple-800' >{selectedTemplate?.name}</h2>
      <p className='text-gray-700 text-sm' >{selectedTemplate?.desc}</p>

      <form onSubmit={onSubmit} >
{selectedTemplate?.form?.map((item, index)=>(
<div className='my-2 flex flex-col gap-2 mb-7' key={index} >

<label >{item.label}</label>
{item.field=='input'?
<Input name={item.name} required={item.required} onChange={handleInputChange}  />:item.field=='textarea'?
<Textarea name={item.name} required={item.required} onChange={handleInputChange} />:null
}
</div>

))}
<Button type='submit' disabled={loading} className='w-full py-6 bg-indigo-600 hover:bg-indigo-500'>  {loading&&<Loader2Icon className='animate-spin' />} Generate Content </Button>
      </form>
    </div>
  )
}

export default FormSection
