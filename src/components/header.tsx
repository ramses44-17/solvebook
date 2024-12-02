import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";



export default function Header() {
  return (
    <header className= "flex  flex-row justify-between border-b-2 items-center p-2">
        <div className="flex items-center">
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
          <Button>
      <Link href="/login"> Login</Link>
      </Button>
      <Button><Link href="/register">register</Link></Button>
        </div>
    </header>
  )
}
