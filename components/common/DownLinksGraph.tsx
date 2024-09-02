"use client";

import Image from "next/image";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import { useDashboardStats } from "@/lib/react-query/query/useStats";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  businessOwners: {
    label: "Business Owners",
    color: "#7d65dc",
  },
  consultants: {
    label: "Consultants",
    color: "#FF8CB1",
  },
  partners: {
    label: "Partners",
    color: "#FFB854",
  },
} satisfies ChartConfig;

export function DownLinksGraph() {
  const { data: dashboardStats } = useDashboardStats();

  const userRole = React.useMemo(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("user_role");
    }
    return null;
  }, []);

  const chartData = React.useMemo(() => {
    if (!dashboardStats || !userRole) return [];

    const data = [
      {
        browser: "Business Owners",
        visitors: dashboardStats.all_users.businesses,
        fill: chartConfig.businessOwners.color,
      },
      {
        browser: "Consultants",
        visitors: dashboardStats.all_users.consultants,
        fill: chartConfig.consultants.color,
      },
      {
        browser: "Partners",
        visitors: dashboardStats.all_users.partners,
        fill: chartConfig.partners.color,
      },
    ];

    if (userRole === "master_admin") {
      return data;
    } else if (userRole === "partner") {
      return data.filter((item) => item.browser !== "Partners");
    } else if (userRole === "consultant") {
      return data.filter((item) => item.browser === "Business Owners");
    } else {
      return [];
    }
  }, [dashboardStats, userRole]);

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [chartData]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="">
        <CardTitle className="text-[15px]">Subscription by Type</CardTitle>

        <CardDescription>Percentage of subscribers by type</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={70}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + -24}
                          className="fill-muted-foreground"
                        >
                          Total
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-1 text-sm">
        <div className="flex justify-center gap-5 mt-4">
          {userRole !== "consultant" && (
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-sm bg-[#7d65dc] mr-2"></div>
              <span className="text-[12px]">Monthly</span>
            </div>
          )}
          {userRole === "master_admin" && (
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-sm bg-[#FF8CB1] mr-2"></div>
              <span className="text-[12px]">Quarterly</span>
            </div>
          )}
          {userRole !== "consultant" && (
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-sm bg-[#FFB854] mr-2"></div>
              <span className="text-[12px]">Year</span>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
