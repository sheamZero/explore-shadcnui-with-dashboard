import AppCardlList from "@/components/AppCardlList";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ShieldCheck } from "lucide-react";
import { Award } from "lucide-react";
import { Star } from "lucide-react";
import { Verified } from "lucide-react";
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLineChart from "@/components/AppLineChart";


export default function page() {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{"user"}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* container */}
            <div className="mt-4 flex flex-col lg:flex-row gap-8">

                {/* left */}
                <div className="w-full xl:w-1/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User Badges</h1>

                        <div className="flex mt-4 gap-4 flex-wrap">

                            {/* Verified Badge */}
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Verified
                                        size={36}
                                        className="bg-blue-400/40 rounded-full border border-blue-500/60 p-1 cursor-pointer"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user is verified by the admin panel.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>

                            {/* Top Contributor Badge */}
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Award
                                        size={36}
                                        className="bg-yellow-400/40 rounded-full border border-yellow-500/60 p-1 cursor-pointer"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Top Contributor</h1>
                                    <p className="text-sm text-muted-foreground">
                                        Awarded for consistent high-quality contributions.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>

                            {/* Trusted Member Badge */}
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <ShieldCheck
                                        size={36}
                                        className="bg-green-400/40 rounded-full border border-green-500/60 p-1 cursor-pointer"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Trusted Member</h1>
                                    <p className="text-sm text-muted-foreground">
                                        Recognized as a trusted and reliable community member.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>

                            {/* Featured User Badge */}
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Star
                                        size={36}
                                        className="bg-purple-400/40 rounded-full border border-purple-500/60 p-1 cursor-pointer"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Featured User</h1>
                                    <p className="text-sm text-muted-foreground">
                                        Highlighted for outstanding engagement and activity.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>

                        </div>
                    </div>


                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold">User Information</h1>

                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="sm" className={"rounded-full"}>Edit User</Button>
                                </SheetTrigger>
                                <EditUser />
                            </Sheet>
                        </div>

                        <p className="text-muted-foreground mt-4 mb-2">Profile Completion</p>
                        <Progress value={66} />

                        <div className="my-4">
                            <p className="text-base my-1">
                                <span className="font-medium">Username : </span>
                                <span>Sheam</span>
                            </p>
                            <p className="text-base my-1">
                                <span className="font-medium">Email : </span>
                                <span>sheam.h.dev@gmail.com</span>
                            </p>
                            <p className="text-base my-1">
                                <span className="font-medium">Location : </span>
                                <span>Baraigram, Natore</span>
                            </p>
                            <p className="text-base my-1">
                                <span className="font-medium">Role : </span>
                                <span className="px-3 py-1 rounded-full bg-input">Admin</span>
                            </p>
                        </div>
                    </div>
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <AppCardlList></AppCardlList>
                    </div>
                </div>

                {/* right */}
                <div className="w-full xl:w-2/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center gap-2">
                            <Avatar className={"w-12 h-12"}>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>SH</AvatarFallback>
                            </Avatar>
                            <p className="font-medium">Sheam Hossain</p>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed"> Passionate about building scalable and user-friendly web applications using modern technologies like Reactb applications using modern technologies like React and Next.js.</p>
                    </div>
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <AppLineChart/>
                    </div>
                </div>

            </div>
        </div>
    )
};
