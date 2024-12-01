"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";


export default function UserProfil() {

  const {data:session} = useSession()
  if(!session){
    redirect("/login")
  }

  return (
    <div className="mx-auto bg-white shadow-md overflow-hidden w-full">
      <div className="relative">
        <div className="w-full h-32 bg-gradient-to-r from-orange-300 to-orange-600"></div>
        <Avatar className="absolute bottom-0 left-4 transform translate-y-1/2 w-24 h-24 border-4 border-white">
          <AvatarImage src={session?.user?.image!} />
          <AvatarFallback className="text-lg">
            {session?.user?.name[0]}
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="mt-8 p-4">
        <h1 className="text-lg font-bold">{session.user?.name}</h1>
        <div className="flex gap-2 w-full">
          <div>
            <span className="text-sm">10</span>
            <span className="text-gray-600 text-sm"> problemes posés</span>
          </div>
          <div>
            <span className="text-sm">20</span>
            <span className="text-gray-600 text-sm"> solutions proposées</span>
          </div>
        </div>
      </div>
      <Tabs defaultValue="problemes">
        <TabsList className="w-full">
          <TabsTrigger value="problemes" className="w-1/2">
            Problemes
          </TabsTrigger>
          <TabsTrigger value="solutions" className="w-1/2">
            Solutions
          </TabsTrigger>
        </TabsList>
        <TabsContent value="problemes">liste des problemes</TabsContent>
        <TabsContent value="solutions">liste de solution</TabsContent>
      </Tabs>
    </div>
  );
}
