"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { HomeIcon, LucideIcon } from "lucide-react";
import { NavMain } from "./navmain";
import { NavSecondary } from "./navsecondary";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function AppSidebar() {

  const mainmenu: {
    main: {
      title: string;
      icon: LucideIcon;
      url: string;
    }[];
  } = {
    main: [
      {
        title: "Home",
        icon: HomeIcon,
        url: "/",
      },
    ],
  };
  const pathname = usePathname()
  

  return (
    <Sidebar>
      <SidebarHeader>
        <Link className="font-bold border-b-2 p-2" href="/">
          SolveBook
        </Link>
        <NavMain items={mainmenu.main} />
      </SidebarHeader>
      <SidebarContent>
        <NavSecondary items={[]} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
