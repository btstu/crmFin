"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Calendar, Clock, Users, DollarSign, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const courseCategories = [
    { id: "all", name: "All Courses" },
    { id: "investment", name: "Investment" },
    { id: "wealth", name: "Wealth Management" },
    { id: "tax", name: "Tax Planning" },
    { id: "risk", name: "Risk Management" },
  ];

  const courses = [
    {
      id: 1,
      title: "Financial Fundamentals",
      category: "investment",
      level: "Beginner",
      duration: "2 days",
      format: "In-person",
      price: 1200,
      nextDate: "November 15, 2023",
      description: "A comprehensive introduction to financial markets, investment vehicles, and fundamental analysis techniques. Ideal for those new to finance or looking to solidify their foundational knowledge.",
      topics: [
        "Introduction to Financial Markets",
        "Asset Classes and Investment Vehicles",
        "Fundamental Analysis Principles",
        "Risk Assessment Basics",
        "Building a Balanced Portfolio"
      ],
      benefits: [
        "Develop a solid foundation in financial concepts and terminology",
        "Learn to evaluate different investment options objectively",
        "Understand how to assess risk and potential returns",
        "Build practical skills for personal or professional application",
        "Network with other finance professionals"
      ]
    },
    {
      id: 2,
      title: "Advanced Investment Strategies",
      category: "investment",
      level: "Advanced",
      duration: "3 days",
      format: "Hybrid",
      price: 2500,
      nextDate: "December 5, 2023",
      description: "An in-depth exploration of sophisticated investment strategies, alternative investments, and advanced portfolio management techniques for experienced finance professionals.",
      topics: [
        "Derivatives and Structured Products",
        "Alternative Investment Strategies",
        "Quantitative Analysis and Modeling",
        "Global Macro Investment Approaches",
        "Portfolio Optimization Techniques"
      ],
      benefits: [
        "Master advanced investment vehicles and strategies",
        "Develop skills to analyze complex market situations",
        "Learn to incorporate alternatives into portfolios effectively",
        "Understand sophisticated risk management approaches",
        "Apply quantitative methods to investment decisions"
      ]
    },
    {
      id: 3,
      title: "Wealth Management Mastery",
      category: "wealth",
      level: "Intermediate",
      duration: "4 days",
      format: "In-person",
      price: 3200,
      nextDate: "January 10, 2024",
      description: "A comprehensive program covering all aspects of wealth management, from financial planning to estate strategies. Designed for advisors and individuals managing substantial assets.",
      topics: [
        "Comprehensive Financial Planning",
        "Estate Planning Strategies",
        "Tax-Efficient Investing",
        "Retirement Income Planning",
        "Wealth Transfer and Philanthropy"
      ],
      benefits: [
        "Develop integrated wealth management strategies",
        "Learn tax optimization techniques for high-net-worth clients",
        "Master estate planning and wealth transfer approaches",
        "Understand how to create sustainable retirement income",
        "Build skills to address complex client situations"
      ]
    },
    {
      id: 4,
      title: "Tax Planning for Financial Advisors",
      category: "tax",
      level: "Intermediate",
      duration: "2 days",
      format: "Virtual",
      price: 1800,
      nextDate: "November 28, 2023",
      description: "A focused course on tax planning strategies specifically designed for financial advisors looking to add value to their client relationships through tax-efficient recommendations.",
      topics: [
        "Tax-Efficient Investment Strategies",
        "Retirement Account Optimization",
        "Income Timing and Harvesting Strategies",
        "Business Entity Structures and Taxation",
        "Estate and Gift Tax Planning"
      ],
      benefits: [
        "Enhance client value proposition with tax expertise",
        "Learn to coordinate with tax professionals effectively",
        "Develop strategies that minimize client tax burdens",
        "Understand how to integrate tax planning with investment management",
        "Master tax-efficient withdrawal strategies"
      ]
    },
    {
      id: 5,
      title: "Risk Management & Compliance",
      category: "risk",
      level: "All Levels",
      duration: "3 days",
      format: "In-person",
      price: 2200,
      nextDate: "December 12, 2023",
      description: "A comprehensive course on identifying, assessing, and mitigating financial risks while ensuring regulatory compliance. Suitable for risk managers, compliance officers, and financial advisors.",
      topics: [
        "Enterprise Risk Management Frameworks",
        "Regulatory Compliance Essentials",
        "Operational Risk Assessment",
        "Investment Risk Analysis",
        "Creating a Compliance Culture"
      ],
      benefits: [
        "Develop robust risk management frameworks",
        "Ensure compliance with evolving regulations",
        "Learn to identify and mitigate operational risks",
        "Understand how to communicate risk effectively",
        "Build processes that balance risk control with business objectives"
      ]
    },
    {
      id: 6,
      title: "Retirement Planning Specialist",
      category: "wealth",
      level: "Intermediate",
      duration: "3 days",
      format: "Hybrid",
      price: 2400,
      nextDate: "January 22, 2024",
      description: "A specialized program focused on comprehensive retirement planning strategies, from accumulation to distribution phases, for financial advisors and retirement specialists.",
      topics: [
        "Retirement Needs Analysis",
        "Social Security Optimization",
        "Healthcare Planning in Retirement",
        "Tax-Efficient Withdrawal Strategies",
        "Behavioral Aspects of Retirement Planning"
      ],
      benefits: [
        "Master retirement income planning strategies",
        "Learn to optimize Social Security benefits",
        "Develop healthcare cost management approaches",
        "Understand tax-efficient withdrawal sequencing",
        "Address client behavioral challenges in retirement planning"
      ]
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeTab === "all" || course.category === activeTab;
    
    return matchesSearch && matchesCategory;
  });

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setIsDetailsOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Training Courses</h1>
      </div>

      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search courses..."
          className="flex-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          {courseCategories.map(category => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {course.level}
                  </Badge>
                </div>
                <CardDescription>{course.category.charAt(0).toUpperCase() + course.category.slice(1)}</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {course.description}
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{course.nextDate}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>${course.price}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{course.format}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => handleCourseClick(course)}>
                  View Details
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Tabs>

      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-3xl">
          {selectedCourse && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl">{selectedCourse.title}</DialogTitle>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {selectedCourse.level}
                  </Badge>
                </div>
                <DialogDescription>
                  {selectedCourse.category.charAt(0).toUpperCase() + selectedCourse.category.slice(1)} • {selectedCourse.format} • ${selectedCourse.price}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <p>{selectedCourse.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Duration: {selectedCourse.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Next Date: {selectedCourse.nextDate}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Price: ${selectedCourse.price}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Format: {selectedCourse.format}</span>
                  </div>
                </div>
                
                <div className="mt-2">
                  <h4 className="font-medium mb-2 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Course Topics
                  </h4>
                  <ul className="ml-6 list-disc space-y-1">
                    {selectedCourse.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-2">
                  <h4 className="font-medium mb-2 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Key Benefits
                  </h4>
                  <ul className="ml-6 list-disc space-y-1">
                    {selectedCourse.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={() => setIsDetailsOpen(false)} variant="outline">
                  Close
                </Button>
                <Button>
                  Register Interest
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
} 