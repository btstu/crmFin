"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, FileText, Send } from "lucide-react";

export default function QuotesPage() {
  const [activeTab, setActiveTab] = useState("create");
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    company: "",
    course: "",
    participants: "1",
    notes: "",
    addons: [],
  });

  const courses = [
    { id: "fin101", name: "Financial Fundamentals", price: 1200 },
    { id: "inv201", name: "Investment Strategies", price: 1500 },
    { id: "risk301", name: "Risk Management", price: 1800 },
    { id: "wealth401", name: "Wealth Management", price: 2200 },
    { id: "tax501", name: "Tax Planning", price: 1600 },
  ];

  const addons = [
    { id: "materials", name: "Course Materials", price: 150 },
    { id: "certificate", name: "Premium Certificate", price: 100 },
    { id: "recording", name: "Session Recordings", price: 250 },
    { id: "coaching", name: "1-on-1 Coaching Session", price: 500 },
  ];

  const recentQuotes = [
    { id: "Q-2023-001", client: "Acme Corp", date: "2023-10-15", amount: "$3,450", status: "Sent" },
    { id: "Q-2023-002", client: "Global Industries", date: "2023-10-12", amount: "$5,200", status: "Accepted" },
    { id: "Q-2023-003", client: "Tech Solutions", date: "2023-10-10", amount: "$2,800", status: "Pending" },
    { id: "Q-2023-004", client: "Finance Partners", date: "2023-10-08", amount: "$4,100", status: "Declined" },
    { id: "Q-2023-005", client: "Startup Inc", date: "2023-10-05", amount: "$1,950", status: "Accepted" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleAddonToggle = (addonId) => {
    const currentAddons = [...formData.addons];
    if (currentAddons.includes(addonId)) {
      setFormData({ ...formData, addons: currentAddons.filter(id => id !== addonId) });
    } else {
      setFormData({ ...formData, addons: [...currentAddons, addonId] });
    }
  };

  const calculateTotal = () => {
    const selectedCourse = courses.find(course => course.id === formData.course);
    const coursePrice = selectedCourse ? selectedCourse.price * parseInt(formData.participants, 10) : 0;
    
    const addonsTotal = formData.addons.reduce((total, addonId) => {
      const addon = addons.find(a => a.id === addonId);
      return total + (addon ? addon.price * parseInt(formData.participants, 10) : 0);
    }, 0);
    
    return coursePrice + addonsTotal;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the quote data to your backend
    console.log("Quote submitted:", formData);
    alert("Quote created successfully!");
    // Reset form or redirect as needed
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Quotes</h1>
      </div>

      {isClient && (
        <Tabs defaultValue="create" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="create">Create Quote</TabsTrigger>
            <TabsTrigger value="history">Quote History</TabsTrigger>
          </TabsList>
          <TabsContent value="create" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>New Quote</CardTitle>
                <CardDescription>Create a new quote for a client</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Client Information</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="clientName">Client Name</Label>
                        <Input
                          id="clientName"
                          name="clientName"
                          value={formData.clientName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="clientEmail">Email</Label>
                        <Input
                          id="clientEmail"
                          name="clientEmail"
                          type="email"
                          value={formData.clientEmail}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="clientPhone">Phone</Label>
                        <Input
                          id="clientPhone"
                          name="clientPhone"
                          value={formData.clientPhone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Course Details</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="course">Select Course</Label>
                        <Select
                          value={formData.course}
                          onValueChange={(value) => handleSelectChange("course", value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course.id} value={course.id}>
                                {course.name} (${course.price})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="participants">Number of Participants</Label>
                        <Select
                          value={formData.participants}
                          onValueChange={(value) => handleSelectChange("participants", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select number" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Add-ons</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {addons.map((addon) => (
                        <div key={addon.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={addon.id}
                            checked={formData.addons.includes(addon.id)}
                            onCheckedChange={() => handleAddonToggle(addon.id)}
                          />
                          <Label htmlFor={addon.id} className="flex-1">
                            {addon.name} (+${addon.price}/participant)
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Any special requirements or information"
                    />
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total Amount:</span>
                      <span className="text-xl font-bold">${calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setFormData({
                    clientName: "",
                    clientEmail: "",
                    clientPhone: "",
                    company: "",
                    course: "",
                    participants: "1",
                    notes: "",
                    addons: [],
                  })}>
                    Reset
                  </Button>
                  <Button type="submit">
                    <Send className="mr-2 h-4 w-4" />
                    Create Quote
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Recent Quotes</CardTitle>
                <CardDescription>View and manage your quotes</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Quote ID</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentQuotes.map((quote) => (
                      <TableRow key={quote.id}>
                        <TableCell className="font-medium">{quote.id}</TableCell>
                        <TableCell>{quote.client}</TableCell>
                        <TableCell>{quote.date}</TableCell>
                        <TableCell>{quote.amount}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            quote.status === "Accepted" ? "bg-green-100 text-green-800" :
                            quote.status === "Declined" ? "bg-red-100 text-red-800" :
                            quote.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                            "bg-blue-100 text-blue-800"
                          }`}>
                            {quote.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
} 