import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"



export default async function NichePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id 
  return (
    <div>
      <Card className="mx-auto shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20 border-4 border-white shadow-md">
              <AvatarImage src="niche" alt="niche" />
              <AvatarFallback>ABBB</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl font-bold">{id}</CardTitle>
              <CardDescription className="text-gray-200 mt-2">lrsnjgrLZPIjgzkm,/4t</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}