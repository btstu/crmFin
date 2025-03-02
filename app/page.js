"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  BookOpen, 
  FileText, 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  CheckCircle2 
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("featured");

  const featuredCourses = [
    {
      id: 1,
      title: "Financial Fundamentals",
      category: "Investment",
      level: "Beginner",
      duration: "2 days",
      price: 1200,
      nextDate: "November 15, 2023",
      description: "A comprehensive introduction to financial markets, investment vehicles, and fundamental analysis techniques."
    },
    {
      id: 3,
      title: "Wealth Management Mastery",
      category: "Wealth Management",
      level: "Intermediate",
      duration: "4 days",
      price: 3200,
      nextDate: "January 10, 2024",
      description: "A comprehensive program covering all aspects of wealth management, from financial planning to estate strategies."
    },
    {
      id: 5,
      title: "Risk Management & Compliance",
      category: "Risk Management",
      level: "All Levels",
      duration: "3 days",
      price: 2200,
      nextDate: "December 12, 2023",
      description: "A comprehensive course on identifying, assessing, and mitigating financial risks while ensuring regulatory compliance."
    }
  ];

  const upcomingCourses = [
    {
      id: 1,
      title: "Financial Fundamentals",
      date: "November 15, 2023",
      registrations: 12,
      capacity: 20
    },
    {
      id: 4,
      title: "Tax Planning for Financial Advisors",
      date: "November 28, 2023",
      registrations: 8,
      capacity: 15
    },
    {
      id: 2,
      title: "Advanced Investment Strategies",
      date: "December 5, 2023",
      registrations: 15,
      capacity: 18
    },
    {
      id: 5,
      title: "Risk Management & Compliance",
      date: "December 12, 2023",
      registrations: 10,
      capacity: 20
    }
  ];

  const recentClients = [
    { id: 1, name: "John Smith", company: "Acme Corp", status: "Validated" },
    { id: 2, name: "Sarah Johnson", company: "Tech Solutions", status: "To Call Back" },
    { id: 3, name: "Michael Brown", company: "Global Industries", status: "Validated" },
    { id: 4, name: "Emily Davis", company: "Finance Partners", status: "No Response" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Validated":
        return "bg-green-100 text-green-800";
      case "To Call Back":
        return "bg-blue-100 text-blue-800";
      case "No Response":
        return "bg-yellow-100 text-yellow-800";
      case "Refused":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "Validated":
        return "Validated";
      case "To Call Back":
        return "To Call Back";
      case "No Response":
        return "No Response";
      case "Refused":
        return "Refused";
      default:
        return status;
    }
  };

  const getLevelBadgeColor = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-blue-100 text-blue-800";
      case "Advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Financial Training CRM</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>
              Your financial training sales dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-3">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Total Sales</div>
                  <div className="text-2xl font-bold">$248,500</div>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Active Clients</div>
                  <div className="text-2xl font-bold">42</div>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Pending Quotes</div>
                  <div className="text-2xl font-bold">8</div>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Follow-ups</div>
                  <div className="text-2xl font-bold">15</div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-2">
            <Button asChild>
              <Link href="/dashboard">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Full Dashboard
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" asChild>
              <Link href="/quotes">
                <FileText className="mr-2 h-4 w-4" />
                Create New Quote
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/courses">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse Courses
              </Link>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <Link href="/clients">
                <Users className="mr-2 h-4 w-4" />
                Add New Client
              </Link>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <Link href="/dashboard">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Sales Dashboard
              </Link>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <Link href="/sales-pitch">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Access Sales Pitches
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="featured" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="featured">Featured Courses</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="clients">Recent Clients</TabsTrigger>
        </TabsList>
        <TabsContent value="featured" className="space-y-4 pt-4">
          <div className="grid gap-6 md:grid-cols-3">
            {featuredCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <Badge variant="secondary" className="ml-2">
                      {course.level}
                    </Badge>
                  </div>
                  <CardDescription>{course.category}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    {course.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{course.nextDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/courses?id=${course.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="upcoming" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Training Sessions</CardTitle>
              <CardDescription>
                Scheduled courses with available spots
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingCourses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div>
                      <div className="font-medium">{course.title}</div>
                      <div className="text-sm text-muted-foreground">{course.date}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-muted-foreground">
                        {course.registrations}/{course.capacity} registered
                      </div>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="clients" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Clients</CardTitle>
              <CardDescription>
                Latest client interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentClients.map((client) => (
                  <div key={client.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div>
                      <div className="font-medium">{client.name}</div>
                      <div className="text-sm text-muted-foreground">{client.company}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className={getStatusColor(client.status)}>
                        {getStatusLabel(client.status)}
                      </Badge>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/clients?id=${client.id}`}>
                          View
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/clients">
                  View All Clients
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Performance Highlights</CardTitle>
          <CardDescription>
            Key metrics and achievements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 text-green-800 p-2 rounded-full">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">Sales Growth</div>
                <div className="text-sm text-muted-foreground">18% increase in quarterly sales</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-800 p-2 rounded-full">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">Client Retention</div>
                <div className="text-sm text-muted-foreground">92% client retention rate</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 text-amber-800 p-2 rounded-full">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">Course Satisfaction</div>
                <div className="text-sm text-muted-foreground">4.8/5 average course rating</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 text-purple-800 p-2 rounded-full">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">New Courses</div>
                <div className="text-sm text-muted-foreground">3 new courses launched this quarter</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
