'use client'

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/layout/app-sidebar";

function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // halaman login & register: tanpa sidebar
  if (pathname.startsWith("/auth")) {
    return <>{children}</>;
  }

  // halaman lain: pakai sidebar
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <Shell>{children}</Shell>
    </Suspense>
  );
}