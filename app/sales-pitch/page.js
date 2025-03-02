"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle2 } from "lucide-react";

export default function SalesPitchPage() {
  const [activeTab, setActiveTab] = useState("investment");
  const [copied, setCopied] = useState(null);

  const pitchCategories = [
    { id: "investment", name: "Investment Training" },
    { id: "wealth", name: "Wealth Management" },
    { id: "tax", name: "Tax Planning" },
    { id: "risk", name: "Risk Management" },
    { id: "retirement", name: "Retirement Planning" },
  ];

  const pitchContent = {
    investment: {
      intro: "Our Investment Training program is designed to equip professionals with the knowledge and skills needed to make informed investment decisions in today's complex financial markets.",
      benefits: [
        "Comprehensive understanding of various investment vehicles and strategies",
        "Real-world case studies and practical applications",
        "Insights from industry experts with decades of experience",
        "Personalized investment portfolio analysis and recommendations",
        "Ongoing support and resources after training completion"
      ],
      objections: [
        {
          objection: "We already have internal training programs.",
          response: "Our specialized training complements internal programs by providing cutting-edge strategies and external perspectives that can enhance your existing knowledge base. Many of our clients use our training to supplement their internal programs."
        },
        {
          objection: "The cost seems high compared to other options.",
          response: "While there are lower-cost alternatives, our program offers superior ROI through practical strategies that can be implemented immediately. Our clients typically report significant improvements in investment performance within 3-6 months of completing our training."
        },
        {
          objection: "We don't have time for extensive training right now.",
          response: "We understand time constraints and offer flexible scheduling options, including condensed formats and modular approaches that can be spread out according to your availability. We can customize the delivery to minimize disruption to your operations."
        }
      ],
      closing: "Would you be interested in scheduling a personalized consultation to discuss how our Investment Training program can be tailored to meet your specific needs and goals?"
    },
    wealth: {
      intro: "Our Wealth Management program provides comprehensive strategies for high-net-worth individuals and organizations looking to preserve and grow their assets while minimizing risks and tax implications.",
      benefits: [
        "Holistic approach to wealth preservation and growth",
        "Customized strategies based on individual risk tolerance and goals",
        "Integration of tax planning, estate planning, and investment management",
        "Access to exclusive investment opportunities",
        "Regular portfolio reviews and adjustments"
      ],
      objections: [
        {
          objection: "We already work with a financial advisor.",
          response: "Our program can complement your existing advisory relationship by providing specialized knowledge in areas that may not be covered by your current advisor. Many clients find that our training helps them ask better questions and make more informed decisions with their advisors."
        },
        {
          objection: "Our wealth management needs are unique.",
          response: "That's precisely why our program is valuable. We customize our training to address your specific situation, challenges, and goals. Our approach is never one-size-fits-all."
        },
        {
          objection: "We're concerned about confidentiality.",
          response: "We take client confidentiality extremely seriously. All our trainers sign strict NDAs, and we can customize the program to use anonymized examples if preferred. We've worked with many high-profile clients who had similar concerns."
        }
      ],
      closing: "Based on what you've shared about your wealth management goals, I believe our program would be particularly valuable for your situation. Would you like to schedule a confidential consultation to explore this further?"
    },
    tax: {
      intro: "Our Tax Planning program helps individuals and businesses optimize their tax strategies to legally minimize tax liabilities while ensuring compliance with all relevant regulations.",
      benefits: [
        "Strategies to legally minimize tax exposure",
        "Understanding of recent tax law changes and their implications",
        "Proactive planning approaches rather than reactive responses",
        "Integration of tax planning with overall financial strategy",
        "Specialized modules for different business structures and industries"
      ],
      objections: [
        {
          objection: "We already have tax accountants.",
          response: "Our program works alongside your existing tax professionals, providing strategic education that helps you ask better questions and understand the broader implications of tax decisions. Many accountants focus on compliance rather than strategic planning."
        },
        {
          objection: "Tax laws change too frequently for training to be valuable.",
          response: "That's exactly why ongoing education is crucial. Our program not only covers current laws but teaches frameworks for adapting to changes. We also provide quarterly updates to all participants to keep them informed of relevant changes."
        },
        {
          objection: "We're concerned about aggressive tax strategies.",
          response: "Our program focuses entirely on legal, ethical tax optimization strategies. We emphasize compliance while identifying opportunities that are often overlooked. Our approach is conservative and sustainable."
        }
      ],
      closing: "Given the recent changes in tax legislation and what you've shared about your situation, our Tax Planning program could potentially save you significant amounts. Would you like to explore how these strategies might apply to your specific circumstances?"
    },
    risk: {
      intro: "Our Risk Management program provides a comprehensive framework for identifying, assessing, and mitigating financial risks across your organization or investment portfolio.",
      benefits: [
        "Systematic approach to identifying hidden and emerging risks",
        "Quantitative and qualitative risk assessment methodologies",
        "Practical risk mitigation strategies and implementation plans",
        "Crisis management and contingency planning",
        "Integration of risk management with strategic decision-making"
      ],
      objections: [
        {
          objection: "We already have risk management protocols in place.",
          response: "Our program can enhance your existing protocols by introducing advanced methodologies and fresh perspectives. Many organizations discover significant blind spots in their risk assessment processes through our training."
        },
        {
          objection: "Risk management seems too theoretical.",
          response: "Our program is highly practical, focusing on real-world applications and case studies. We include hands-on workshops where participants apply concepts directly to their actual business situations and leave with actionable plans."
        },
        {
          objection: "We don't have major risk concerns at the moment.",
          response: "The best time to strengthen risk management is before problems arise. Our program helps identify emerging risks that may not be obvious yet. Many clients have told us they avoided significant issues by implementing strategies they learned in our training."
        }
      ],
      closing: "Based on what you've shared about your organization, I believe there are specific areas where our Risk Management program could add significant value. Would you be interested in a preliminary risk assessment to identify potential opportunities for improvement?"
    },
    retirement: {
      intro: "Our Retirement Planning program provides comprehensive strategies for ensuring financial security and lifestyle maintenance throughout retirement years.",
      benefits: [
        "Personalized retirement income planning",
        "Optimization of Social Security and pension benefits",
        "Healthcare cost planning and long-term care strategies",
        "Tax-efficient withdrawal strategies",
        "Estate planning integration for wealth transfer"
      ],
      objections: [
        {
          objection: "Retirement is still many years away for us.",
          response: "Starting retirement planning early provides significant advantages through compounding and tax-advantaged growth. Our program includes special modules for early-career professionals that can potentially add millions to your retirement assets over time."
        },
        {
          objection: "We already have a 401(k) plan.",
          response: "While employer retirement plans are excellent foundations, comprehensive retirement planning goes far beyond these basics. Our program addresses the many aspects of retirement that aren't covered by standard retirement accounts, including withdrawal strategies, tax planning, and lifestyle considerations."
        },
        {
          objection: "We're not sure if we're saving enough.",
          response: "That uncertainty is exactly what our program addresses. We provide concrete frameworks for determining appropriate savings rates based on your specific goals and circumstances. Most participants discover they need to adjust their current approach after going through our analysis."
        }
      ],
      closing: "Retirement planning becomes increasingly complex as you get closer to retirement age. Would you be interested in a retirement readiness assessment to see where you stand relative to your goals and identify potential optimization opportunities?"
    }
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const renderPitchSection = (category) => {
    const pitch = pitchContent[category];
    
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
            <CardDescription>Opening pitch for {pitchCategories.find(c => c.id === category).name}</CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-lg">{pitch.intro}</div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute top-2 right-2"
              onClick={() => copyToClipboard(pitch.intro, `${category}-intro`)}
            >
              {copied === `${category}-intro` ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Benefits</CardTitle>
            <CardDescription>Highlight these benefits during your pitch</CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <ul className="space-y-2">
              {pitch.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute top-2 right-2"
              onClick={() => copyToClipboard(pitch.benefits.map(b => `• ${b}`).join('\n'), `${category}-benefits`)}
            >
              {copied === `${category}-benefits` ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Handling Objections</CardTitle>
            <CardDescription>Responses to common client concerns</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {pitch.objections.map((obj, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {obj.objection}
                  </AccordionTrigger>
                  <AccordionContent className="relative">
                    <div className="pt-2 pb-4">{obj.response}</div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(obj.response, `${category}-obj-${index}`)}
                    >
                      {copied === `${category}-obj-${index}` ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Closing Statement</CardTitle>
            <CardDescription>Suggested way to close the conversation</CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-lg italic">"{pitch.closing}"</div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute top-2 right-2"
              onClick={() => copyToClipboard(pitch.closing, `${category}-closing`)}
            >
              {copied === `${category}-closing` ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Sales Pitch Guide</h1>
      </div>

      <Tabs defaultValue="investment" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
          {pitchCategories.map(category => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {pitchCategories.map(category => (
          <TabsContent key={category.id} value={category.id}>
            {renderPitchSection(category.id)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
} 