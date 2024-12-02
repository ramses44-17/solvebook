"use client"
import  {ProblemForm}  from '@/components/probemform'
import React from 'react'

export default function page() { 
  return (
    <main className='flex flex-col p-4'>
      <h2 className="text-xl font-bold mb-6">Créer un nouveau problème</h2>
      <ProblemForm/>  
    </main>
  )
}
