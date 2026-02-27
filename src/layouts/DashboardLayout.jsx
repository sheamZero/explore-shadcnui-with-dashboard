"use client";

import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(true);

  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar open={open} onOpenChange={setOpen} />

        <main className="flex-1">
          <Navbar open={open} setOpen={setOpen} />
          <div className="px-4">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}