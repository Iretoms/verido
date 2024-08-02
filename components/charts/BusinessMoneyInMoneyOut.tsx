"use client";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  CartesianGrid,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDashboardStats } from "@/lib/react-query/query/useStats";
import { DatePicker } from "../common/DatePicker";

interface ChartData {
  month: string;
  moneyIn: number;
  moneyOut: number;
}

const chartConfig = {
  moneyIn: {
    label: "Money In",
    color: "#08A730",
  },
  moneyOut: {
    label: "Money Out",
    color: "#FF2D55",
  },
} satisfies ChartConfig;

interface CashMovementChartProps {
  chartData: ChartData[];
}

const BusinessMoneyInMoneyOut = ({chartData}:CashMovementChartProps) => {


//   useEffect(() => {
//     if (dashboardStats) {
//       const moneyInData = dashboardStats.money_in_v_money_out.total_money_in;
//       const moneyOutData = dashboardStats.money_in_v_money_out.total_money_out;

//       const transformedData = moneyInData.map((moneyIn) => {
//         const month = moneyIn.month;
//         const monthName = monthNames[parseInt(month.split("-")[1]) - 1];
//         const moneyInAmount = moneyIn.totalAmount;

//         const moneyOutEntry = moneyOutData.find((item) => item.month === month);
//         const moneyOutAmount = moneyOutEntry ? moneyOutEntry.totalAmount : 0;

//         return {
//           month: monthName,
//           moneyIn: moneyInAmount,
//           moneyOut: moneyOutAmount,
//         };
//       });
//       transformedData.sort(
//         (a, b) => monthNames.indexOf(a.month) - monthNames.indexOf(b.month)
//       );

//       setChartData(transformedData);
//     }
//   }, [dashboardStats]);

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-sm">
          Total Money in Vs Total Money out
        </CardTitle>
        <DatePicker />
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-[400px] bg-verido-white rounded-xl w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 50, right: 100, left: 100, bottom: 50 }}
          >
            <CartesianGrid stroke="#DFE6E9" vertical={false} />
            <XAxis
              tickLine={false}
              tickMargin={20}
              axisLine={false}
              scale={"point"}
              dataKey="month"
            />
            <YAxis
              tickLine={false}
              tickMargin={40}
              axisLine={false}
              domain={[0, "auto"]}
              allowDecimals={true}
              dataKey="moneyIn"
              tickFormatter={(tick) => `$${tick.toFixed(2)}`}
            />
            <ChartTooltip
              labelClassName="bg-white"
              content={<ChartTooltipContent />}
            />
            <Bar
              barSize={15}
              dataKey="moneyIn"
              fill={chartConfig.moneyIn.color}
              radius={4}
            />
            <Bar
              barSize={15}
              dataKey="moneyOut"
              fill={chartConfig.moneyOut.color}
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default BusinessMoneyInMoneyOut;
