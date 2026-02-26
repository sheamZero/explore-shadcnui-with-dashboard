"use client"

import { Moon } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { CreditCardIcon, LogOutIcon, SettingsIcon, UserIcon, Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sun } from "lucide-react"
import { useTheme } from "next-themes"





export default function Navbar() {
    const { theme, setTheme } = useTheme();



    return (
        <nav className="flex justify-between p-2">
            <div>
                left side
            </div>
            <div className="flex items-center justify-center gap-3">
                <Link href={"/"}>Dashboard</Link>
                
                {/* theme toggle */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

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

                {/* user menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" >
                            <Menu />
                            <span className="sr-only">open menu</span>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuItem>Home</DropdownMenuItem>
                        <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


            </div>
        </nav>
    )

};
