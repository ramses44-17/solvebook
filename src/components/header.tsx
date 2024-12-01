"use client"
import CustomSidebarTrigger from "@/components/customsidebartrigger";
import { LogOut, Plus, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { signOut, useSession } from "next-auth/react";
import Loader from "@/app/loading";
import { usePathname } from "next/navigation";



export default function Header() {
  const {data:session,status} = useSession()
  const pathname = usePathname()
  
  if (status === "loading") {
    return <Loader></Loader>
  }
  return (
    <header className={`${pathname === "/login" ? "hidden":""} flex  flex-row justify-between border-b-2 items-center p-2`}>
        <div className="flex items-center">
        <CustomSidebarTrigger />
        <Link href="/" className="font-bold text-lg md:hidden">
          SS
        </Link>
        </div>
        <div className="flex items-center gap-4"
        >
          <Link href="/problems">
          <Button
          variant="ghost"
          >
          <Plus/>
          <span className='hidden md:block'>create</span>
          </Button>
          </Link>
          {session?<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={session?.user?.image!} alt="user avatar" />
            <AvatarFallback>{session?.user?.name[0]}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <Link href="/users/profil">
        <DropdownMenuItem>
          <UserIcon className="mr-2 h-4 w-4" />
          <span>profil</span>
        </DropdownMenuItem>
        </Link>
        <DropdownMenuItem onClick={()=>signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>:<Button>
      <Link href="/login"> Login</Link>
      </Button>}
        </div>
    </header>
  )
}
