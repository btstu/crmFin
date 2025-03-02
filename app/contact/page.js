"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    industry: "",
    companySize: "",
    interestArea: [],
    budget: "",
    timeframe: "",
    referralSource: "",
    message: "",
    contactPreference: "email",
    newsletter: false,
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    errorMessage: "",
  });

  const industries = [
    "Banking",
    "Investment Management",
    "Insurance",
    "Wealth Management",
    "Financial Advisory",
    "Corporate Finance",
    "Real Estate",
    "Accounting",
    "FinTech",
    "Other"
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees"
  ];

  const interestAreas = [
    { id: "investment", label: "Investment Training" },
    { id: "wealth", label: "Wealth Management" },
    { id: "tax", label: "Tax Planning" },
    { id: "risk", label: "Risk Management" },
    { id: "retirement", label: "Retirement Planning" },
    { id: "compliance", label: "Regulatory Compliance" },
    { id: "custom", label: "Custom Training Solutions" }
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+"
  ];

  const timeframes = [
    "Immediately",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Just exploring options"
  ];

  const referralSources = [
    "Search Engine",
    "Social Media",
    "Email Newsletter",
    "Word of Mouth",
    "Industry Event",
    "Advertisement",
    "Other"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (id) => {
    const currentInterests = [...formData.interestArea];
    if (currentInterests.includes(id)) {
      setFormData({ 
        ...formData, 
        interestArea: currentInterests.filter(item => item !== id) 
      });
    } else {
      setFormData({ 
        ...formData, 
        interestArea: [...currentInterests, id] 
      });
    }
  };

  const handleToggleChange = (name, checked) => {
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ ...formState, isSubmitting: true });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would send the data to your backend here
      console.log("Form submitted:", formData);
      
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        errorMessage: ""
      });
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        errorMessage: "There was an error submitting your form. Please try again."
      });
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      industry: "",
      companySize: "",
      interestArea: [],
      budget: "",
      timeframe: "",
      referralSource: "",
      message: "",
      contactPreference: "email",
      newsletter: false,
    });
    setFormState({
      isSubmitting: false,
      isSubmitted: false,
      isError: false,
      errorMessage: ""
    });
  };

  if (formState.isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto py-12">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              <CardTitle>Thank You for Contacting Us!</CardTitle>
            </div>
            <CardDescription>
              Your inquiry has been successfully submitted.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We appreciate your interest in our financial training services. One of our representatives will review your information and get back to you within 1-2 business days.
            </p>
            <p>
              In the meantime, feel free to explore our available courses and resources.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={resetForm}>
              Submit Another Inquiry
            </Button>
            <Button asChild>
              <a href="/courses">Explore Our Courses</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground mt-2">
          Fill out the form below to inquire about our financial training services or request more information.
        </p>
      </div>

      {formState.isError && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {formState.errorMessage}
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Please provide your contact details so we can reach out to you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company/Organization *</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title *</Label>
                <Input
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="industry">Industry *</Label>
                <Select 
                  value={formData.industry} 
                  onValueChange={(value) => handleSelectChange("industry", value)}
                  required
                >
                  <SelectTrigger id="industry">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="companySize">Company Size *</Label>
                <Select 
                  value={formData.companySize} 
                  onValueChange={(value) => handleSelectChange("companySize", value)}
                  required
                >
                  <SelectTrigger id="companySize">
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    {companySizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>

          <CardHeader className="border-t pt-6">
            <CardTitle>Training Interests</CardTitle>
            <CardDescription>
              Tell us about your training needs and interests.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Areas of Interest (Select all that apply) *</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {interestAreas.map((area) => (
                  <div key={area.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`interest-${area.id}`} 
                      checked={formData.interestArea.includes(area.id)}
                      onCheckedChange={() => handleCheckboxChange(area.id)}
                    />
                    <Label 
                      htmlFor={`interest-${area.id}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {area.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Approximate Budget</Label>
                <Select 
                  value={formData.budget} 
                  onValueChange={(value) => handleSelectChange("budget", value)}
                >
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeframe">Implementation Timeframe</Label>
                <Select 
                  value={formData.timeframe} 
                  onValueChange={(value) => handleSelectChange("timeframe", value)}
                >
                  <SelectTrigger id="timeframe">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeframes.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="referralSource">How did you hear about us?</Label>
              <Select 
                value={formData.referralSource} 
                onValueChange={(value) => handleSelectChange("referralSource", value)}
              >
                <SelectTrigger id="referralSource">
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  {referralSources.map((source) => (
                    <SelectItem key={source} value={source}>
                      {source}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Information *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Please describe your training needs, specific questions, or any additional information that would help us understand your requirements better."
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-3">
              <Label>Preferred Contact Method *</Label>
              <RadioGroup 
                value={formData.contactPreference}
                onValueChange={(value) => handleSelectChange("contactPreference", value)}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="contact-email" />
                  <Label htmlFor="contact-email" className="font-normal">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="contact-phone" />
                  <Label htmlFor="contact-phone" className="font-normal">Phone</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="either" id="contact-either" />
                  <Label htmlFor="contact-either" className="font-normal">Either</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <Checkbox 
                id="newsletter" 
                checked={formData.newsletter}
                onCheckedChange={(checked) => handleToggleChange("newsletter", checked)}
              />
              <Label 
                htmlFor="newsletter"
                className="text-sm font-normal cursor-pointer"
              >
                Subscribe to our newsletter for updates on new courses, financial insights, and special offers.
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button type="button" variant="outline" onClick={resetForm}>
              Reset Form
            </Button>
            <Button type="submit" disabled={formState.isSubmitting}>
              {formState.isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
} 