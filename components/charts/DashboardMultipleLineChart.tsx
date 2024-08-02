// @ts-nocheck
"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DatePicker } from "../common/DatePicker";
import { useDashboardStats } from "@/lib/react-query/query/useStats";
import { useState, useEffect } from "react";

interface ChartData {
  month: string;
  moneyIn: number;
  directLabour: number;
  directMaterial: number;
}

const chartConfig = {
  moneyIn: {
    label: "Money In",
    color: "#08A730",
  },
  directLabour: {
    label: "Direct Labour",
    color: "#AF52DE",
  },
  directMaterial: {
    label: "Direct Material",
    color: "#FF9500",
  },
} satisfies ChartConfig;

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function DashboardMultipleLineChart() {
  const { data: dashboardStats } = useDashboardStats();
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    if (dashboardStats) {
      const { money_in, expenses } = dashboardStats.money_in_v_money_out;
      const salesData = money_in.sales;

      const transformedData = salesData.map((sale) => {
        const month = sale._id;
        const monthName = monthNames[parseInt(month.split("-")[1]) - 1];
        const directLabour =
          expenses.directLabour.find((item) => item._id === month)
            ?.totalAmount || 0;
        const directMaterial =
          expenses.directMaterial.find((item) => item._id === month)
            ?.totalAmount || 0;

        return {
          month: monthName,
          moneyIn: sale.totalAmount,
          directLabour: directLabour,
          directMaterial: directMaterial,
        };
      });
      transformedData.sort(
        (a, b) => monthNames.indexOf(a.month) - monthNames.indexOf(b.month)
      );

      setChartData(transformedData);
    }
  }, [dashboardStats]);

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-sm">Money In vs Money Out</CardTitle>
        <DatePicker />
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[300px] w-full" config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={4}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis />
              <Tooltip cursor={false} content={<ChartTooltipContent />} />
              {/* <Legend /> */}
              <Line
                dataKey="moneyIn"
                type="monotone"
                stroke={chartConfig.moneyIn.color}
                strokeWidth={2}
              />
              <Line
                dataKey="directLabour"
                type="monotone"
                stroke={chartConfig.directLabour.color}
                strokeWidth={2}
              />
              <Line
                dataKey="directMaterial"
                type="monotone"
                stroke={chartConfig.directMaterial.color}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
