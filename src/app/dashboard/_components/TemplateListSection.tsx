'use client'

import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
  name: string,
  desc: string,
  category: string,
  icon: string,
  aiPrompt: string,
  slug: string,
  form?: FORM[]
}

export interface FORM {
  label: string,
  field: string,
  name: string,
  required?: boolean
}

interface TemplateListSectionProps {
  userSearchInput: string | undefined; // or whatever type userSearchInput actually is
}

function TemplateListSection({ userSearchInput }: TemplateListSectionProps) {

  const [filterData, setfilterData] = useState(Templates)

  useEffect(() => {
    if (userSearchInput) {

      const filter = Templates.filter((item) => item.name.toLowerCase().includes(userSearchInput.toLowerCase()))
      setfilterData(filter)
    }
    else {
      setfilterData(Templates)
    }
  }, [userSearchInput])


  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 bg-gray-100 ' >
      {filterData.map((item: TEMPLATE, index: number) => (
        <TemplateCard key={index} {...item} />
      ))}
    </div>
  )
}

export default TemplateListSection