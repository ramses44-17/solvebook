"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import { Menu } from "lucide-react"

export default function SimpleSidebarTrigger() {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 md:hidden"
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      <Menu className="h-10 w-10" />
    </Button>
  )
}