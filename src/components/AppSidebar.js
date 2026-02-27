"use client"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { HomeIcon, Inbox, Search, Calendar } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { User2 } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { Plus } from "lucide-react";



const items = [
    {
        title: "Home",
        url: "/",
        icon: HomeIcon
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar
    },
    {
        title: "Search",
        url: "#",
        icon: Search
    },
]

export default function AppSidebar() {

    return (
        <Sidebar collapsible="icon">

            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={"/"}>
                                <Image src={"next.svg"} alt="alt" width={20} height={20}></Image>
                                <span>sheam</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {/* <SidebarSeparator /> */}
                <SidebarGroup>
                    <SidebarGroupLabel>My Pages</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                items.map(item => {
                                    return (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <Link href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    )
                                })
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>


                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus /> <span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent></SidebarGroupContent>
                </SidebarGroup>



            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton asChild>
                                    <div className="flex items-center w-full">
                                        <User2 />
                                        <span className="ml-2">Sheam</span>
                                        <ChevronUp className="ml-auto" />
                                    </div>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Hello</DropdownMenuItem>
                                <DropdownMenuItem>Home</DropdownMenuItem>
                                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

        </Sidebar>
    )
};
