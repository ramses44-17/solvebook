import { ProblemCard } from '@/components/problemcard';
import { SolutionCard } from '@/components/solutioncard';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React from 'react'

export default async function Page({params}:{
  params:Promise<{id:string}>
}) {
  const problem = {
    title: "Problème de gestion des stocks",
    description: "Il est difficile de suivre l'inventaire en temps réel, ce qui entraîne des erreurs de stock et des ruptures de stock fréquentes.",
    niche: {
      name: "Gestion d'entreprise",
      image: "https://example.com/gestion-entreprise.jpg"
    },
    subNiches: ["Gestion des stocks", "Optimisation de la chaîne d'approvisionnement", "Technologies d'inventaire"],
    upvotes: 120,
    downvotes: 10,
    solutionsCount: 5,
    createdAt: new Date("2024-11-20T12:00:00Z")
  };
  const solution = {
    description: "Utiliser un logiciel de gestion d'inventaire en temps réel pour suivre les stocks et éviter les erreurs.",
    upvotes: 85,
    downvotes: 3,
    author: {
      name: "Jean Dupont",
      avatar: "https://example.com/avatar-jean-dupont.jpg"
    },
    link: {
      title: "Solution de gestion d'inventaire",
      url: "https://example.com/gestion-inventaire"
    },
    createdAt: new Date("2024-11-15T09:30:00Z")
  };
  
  
  return (
    <div className='flex flex-col px-4'>
      <div className='border-b'>
      <ProblemCard {...problem}/>
      </div>
      <Button className='mt-3 border' variant="ghost">
        <Plus/>
        Add solution
      </Button>
      <div>
      <SolutionCard {...solution}/>
      <SolutionCard {...solution}/>
      </div>
    </div>
  )
}
