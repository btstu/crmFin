"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BarChart3, 
  FileText, 
  Users, 
  MessageSquare, 
  BookOpen,
  LogOut,
  Home,
  Mail
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const pathname = usePathname();
  
  // Don't show sidebar on login page
  if (pathname === "/login") {
    return null;
  }

  const routes = [
    {
      href: "/",
      icon: Home,
      title: "Home",
    },
    {
      href: "/dashboard",
      icon: BarChart3,
      title: "Dashboard",
    },
    {
      href: "/quotes",
      icon: FileText,
      title: "Quotes",
    },
    {
      href: "/clients",
      icon: Users,
      title: "Clients",
    },
    {
      href: "/sales-pitch",
      icon: MessageSquare,
      title: "Sales Pitch",
    },
    {
      href: "/courses",
      icon: BookOpen,
      title: "Courses",
    },
    {
      href: "/contact",
      icon: Mail,
      title: "Contact",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-background border-r">
      <div className="p-6">
        <h1 className="text-xl font-bold">Financial CRM</h1>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
              pathname === route.href
                ? "bg-accent text-accent-foreground font-medium"
                : "text-muted-foreground hover:text-primary hover:bg-accent"
            )}
          >
            <route.icon className="w-5 h-5" />
            {route.title}
          </Link>
        ))}
      </nav>
      <div className="p-4 mt-auto border-t">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link href="/login">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  );
} 