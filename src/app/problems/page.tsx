"use client"
import  {ProblemForm}  from '@/components/probemform'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

export default function page() { 
  const {data} = useSession()
  if(!data){
    redirect("/login")
  }
  return (
    <main className='flex flex-col p-4'>
      <h2 className="text-xl font-bold mb-6">Créer un nouveau problème</h2>
      <ProblemForm/>  
    </main>
  )
}
