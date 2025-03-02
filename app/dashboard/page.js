"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, Phone, CheckCircle, XCircle } from "lucide-react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  // Use state to store the generated data
  const [chartData, setChartData] = useState(null);
  const [isClient, setIsClient] = useState(false);
  
  // Generate data only on the client side after component mounts
  useEffect(() => {
    setIsClient(true);
    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const generateRandomData = (count, max) => Array.from({ length: count }, () => Math.floor(Math.random() * max));
    
    const salesData = generateRandomData(12, 50000);
    const leadsData = generateRandomData(12, 100);
    const conversionData = generateRandomData(12, 30).map(val => val + 10); // Ensure values are between 10-40%
    
    // Calculate totals and percentages
    const totalSales = salesData.reduce((a, b) => a + b, 0);
    const totalLeads = leadsData.reduce((a, b) => a + b, 0);
    const avgConversion = (conversionData.reduce((a, b) => a + b, 0) / conversionData.length).toFixed(1);
    
    // Calculate month-over-month changes
    const lastMonthSales = salesData[salesData.length - 2];
    const currentMonthSales = salesData[salesData.length - 1];
    const salesChange = ((currentMonthSales - lastMonthSales) / lastMonthSales * 100).toFixed(1);
    
    const lastMonthLeads = leadsData[leadsData.length - 2];
    const currentMonthLeads = leadsData[leadsData.length - 1];
    const leadsChange = ((currentMonthLeads - lastMonthLeads) / lastMonthLeads * 100).toFixed(1);
    
    // Chart configurations
    const salesChartData = {
      labels: months,
      datasets: [
        {
          label: 'Monthly Sales ($)',
          data: salesData,
          backgroundColor: 'rgba(59, 130, 246, 0.5)',
          borderColor: 'rgb(59, 130, 246)',
          borderWidth: 1,
        }
      ]
    };
    
    const leadsChartData = {
      labels: months,
      datasets: [
        {
          label: 'New Leads',
          data: leadsData,
          borderColor: 'rgb(16, 185, 129)',
          backgroundColor: 'rgba(16, 185, 129, 0.5)',
          tension: 0.3,
          fill: true,
        }
      ]
    };
    
    const conversionChartData = {
      labels: months,
      datasets: [
        {
          label: 'Conversion Rate (%)',
          data: conversionData,
          borderColor: 'rgb(249, 115, 22)',
          backgroundColor: 'rgba(249, 115, 22, 0.5)',
          tension: 0.3,
          fill: true,
        }
      ]
    };
    
    const clientStatusData = {
      labels: ['To Call Back', 'No Response', 'Validated', 'Refused'],
      datasets: [
        {
          label: 'Client Status',
          data: [25, 15, 40, 20],
          backgroundColor: [
            'rgba(59, 130, 246, 0.6)',
            'rgba(245, 158, 11, 0.6)',
            'rgba(16, 185, 129, 0.6)',
            'rgba(239, 68, 68, 0.6)',
          ],
          borderColor: [
            'rgb(59, 130, 246)',
            'rgb(245, 158, 11)',
            'rgb(16, 185, 129)',
            'rgb(239, 68, 68)',
          ],
          borderWidth: 1,
        }
      ]
    };
    
    setChartData({
      salesData,
      leadsData,
      conversionData,
      totalSales,
      totalLeads,
      avgConversion,
      salesChange,
      leadsChange,
      salesChartData,
      leadsChartData,
      conversionChartData,
      clientStatusData
    });
  }, []);
  
  // Return a loading state or null until client-side rendering is ready
  if (!isClient || !chartData) {
    return <div className="flex items-center justify-center h-screen">Loading dashboard data...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${chartData.totalSales.toLocaleString()}</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              {parseFloat(chartData.salesChange) > 0 ? (
                <>
                  <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">{chartData.salesChange}%</span>
                </>
              ) : (
                <>
                  <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500">{chartData.salesChange}%</span>
                </>
              )}
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{chartData.totalLeads}</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              {parseFloat(chartData.leadsChange) > 0 ? (
                <>
                  <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">{chartData.leadsChange}%</span>
                </>
              ) : (
                <>
                  <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500">{chartData.leadsChange}%</span>
                </>
              )}
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{chartData.avgConversion}%</div>
            <div className="pt-1 text-xs text-muted-foreground">
              Average lead to sale conversion
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="sales">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="clients">Clients</TabsTrigger>
        </TabsList>
        <TabsContent value="sales" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>Monthly sales performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <Bar data={chartData.salesChartData} options={{ maintainAspectRatio: false }} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="leads" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Lead Generation</CardTitle>
                <CardDescription>New leads acquired each month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <Line data={chartData.leadsChartData} options={{ maintainAspectRatio: false }} />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Conversion Rate</CardTitle>
                <CardDescription>Percentage of leads converted to sales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <Line data={chartData.conversionChartData} options={{ maintainAspectRatio: false }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="clients" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Client Status Distribution</CardTitle>
              <CardDescription>Current status of all clients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] flex items-center justify-center">
                <div className="w-[300px]">
                  <Pie data={chartData.clientStatusData} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 