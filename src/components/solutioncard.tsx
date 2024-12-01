import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLink, ArrowBigUp, ArrowBigDown } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import { cn } from "@/lib/utils"
import { Button } from './ui/button'

interface SolutionCardProps {
  description: string
  upvotes: number
  downvotes: number
  author: {
    name: string
    avatar: string
  }
  link: {
    title: string
    url: string
  }
  createdAt: Date
  className?:string
}

export function SolutionCard({
  description,
  upvotes,
  downvotes,
  author,
  link,
  createdAt,
  className
}: SolutionCardProps) {
  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true, locale: fr })

  return (
    <Card className={cn("border-none shadow-none",className)}>
      <CardHeader className="flex flex-row items-start gap-4 pb-1">
        <div className="flex flex-col items-center">
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-1">
            <Avatar className="h-6 w-6">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{author.name}</span>
            <span className="text-xs text-muted-foreground">• {timeAgo}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className='px-[65px] border-l-2'>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2 mb-4">
        <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              {link.title}
            </a>
        </div>
        <div className="flex items-center space-x-2">
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
      </CardContent>
    </Card>
  )
}