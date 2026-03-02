"use client"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { HomeIcon, Inbox, Search, Calendar } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { User2 } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { Plus } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { View } from "lucide-react";
import { Projector } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Atom } from "lucide-react";
import { Braces } from "lucide-react";
import { Palette } from "lucide-react";
import { FileCode } from "lucide-react";



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
                    <SidebarGroupLabel>Project</SidebarGroupLabel>

                    <SidebarGroupAction>
                        <SidebarMenuBadge>24</SidebarMenuBadge>
                        <span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem >
                                <SidebarMenuButton asChild>
                                    <Link href={"#"}>
                                        <View />
                                        <span>See all Project</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem >
                                <SidebarMenuButton asChild>
                                    <Link href={"#"}>
                                        <Projector />
                                        <span>Add Project</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Technologies</SidebarGroupLabel>

                    {/* HTML */}
                    <Collapsible defaultOpen={true} className="group">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton>
                                        <FileCode className="h-4 w-4" />
                                        <span>HTML</span>
                                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <SidebarGroupContent>
                                        <SidebarMenu className="ml-4">
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">Basic</Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">Intermediate</Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">Advanced</Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </Collapsible>

                    {/* CSS */}
                    <Collapsible defaultOpen={false} className="group">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton>
                                        <Palette className="h-4 w-4" />
                                        <span>CSS</span>
                                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <SidebarGroupContent>
                                        <SidebarMenu className="ml-4">
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">Basic</Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">Intermediate</Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">Advanced</Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </Collapsible>

                    {/* JavaScript */}
                    <Collapsible defaultOpen={false} className="group">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton>
                                        <Braces className="h-4 w-4" />
                                        <span>Javascript</span>
                                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <SidebarGroupContent>
                                        <SidebarMenu className="ml-4">
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">Basic</Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">Intermediate</Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">Advanced</Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </Collapsible>

                    {/* React */}
                    <Collapsible defaultOpen={false} className="group">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton>
                                        <Atom className="h-4 w-4" />
                                        <span>React</span>
                                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <SidebarGroupContent>
                                        <SidebarMenu className="ml-4">
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">Basic</Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">Intermediate</Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton asChild>
                                                    <Link href="#">Advanced</Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </Collapsible>

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
