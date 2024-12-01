import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowBigUp, ArrowBigDown} from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import { cn } from "@/lib/utils"
import { Button } from './ui/button'
import Link from 'next/link'

interface ProblemCardProps {
  title: string
  description: string
  niche: {
    name: string
    image: string
  }
  subNiches: string[]
  upvotes: number
  downvotes: number
  solutionsCount: number
  createdAt: Date
  className?: string
}

export function ProblemCard({
  title,
  description,
  niche,
  subNiches,
  upvotes,
  downvotes,
  solutionsCount,
  createdAt,
  className
}: ProblemCardProps) {
  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true, locale: fr })
  return (
    <Card className={cn('rounded-none border-none shadow-none', className)}>
      <CardHeader className="pb-1">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={niche.image} alt={niche.name} />
              <AvatarFallback>{niche.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{niche.name}</span>
            <span className="text-xs text-muted-foreground">• {timeAgo}</span>
          </div>
          <CardTitle className='px-8'>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className='px-14'>
        <CardDescription className="mb-2">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {subNiches.map((subNiche, index) => (
            <Badge key={index} variant="secondary">{subNiche}</Badge>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className={cn("flex items-center space-x-2", className)}>
      <Button
        variant="outline"
        size="sm"
      >
        <ArrowBigUp className="h-5 w-5" />
        <span className="font-medium">{upvotes}</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
      >
        <ArrowBigDown className="h-5 w-5" />
        <span className="font-medium">{downvotes}</span>
      </Button>
    </div>
            <Link href="/" className='text-sm text-gray-500'>{solutionsCount} solutions</Link>
        </div>
      </CardContent>
    </Card>
  )
}