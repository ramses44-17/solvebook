"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from 'lucide-react'

export default function ErrorPage({ reset }: { reset: () => void }) {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-6 w-6" />
            Erreur
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Désolé, une erreur s'est produite. Veuillez réessayer ou contacter le support si le problème persiste.
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={reset} className="w-full">
            Rafraîchir la page
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}