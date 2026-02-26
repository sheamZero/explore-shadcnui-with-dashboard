"use client"

import { Moon } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { CreditCardIcon, LogOutIcon, SettingsIcon, UserIcon, Menu } from "lucide-react"
import { Button } from "./ui/button"
import { HomeIcon } from "lucide-react"
import { LayoutDashboardIcon } from "lucide-react"




export default function Navbar() {
    return (
        <nav className="flex justify-between">
            <div>
                left side
            </div>
            <div className="flex items-center justify-center gap-3">
                <Link href={"/"}>Dashboard</Link>
                <Moon />

                {/* my account / profile icon */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="rounded-full" size="icon">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <UserIcon />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <CreditCardIcon />
                            Billing
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <SettingsIcon />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">
                            <LogOutIcon />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/*menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon-sm">
                            <Menu />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>

                        <DropdownMenuItem>
                            <HomeIcon />
                            Home
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LayoutDashboardIcon />
                            Dashboard
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>


            </div>
        </nav>
    )

};
