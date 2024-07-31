"use client";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useDashboardStats } from "@/lib/react-query/query/useStats";

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

const CashMovementChart = () => {
  const { data: dashboardStats } = useDashboardStats();
const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    if (dashboardStats) {
      const transformedData =
        dashboardStats.money_in_v_money_out.total_money_in.map((moneyIn) => {
          const moneyOut =
            dashboardStats.money_in_v_money_out.total_money_out.find(
              (item) => item.month === moneyIn.month
            );
          return {
            month: moneyIn.month,
            moneyIn: moneyIn.totalAmount,
            moneyOut: moneyOut ? moneyOut.totalAmount : 0,
          };
        });
      setChartData(transformedData);
    }
  }, [dashboardStats]);

  return (
    <ChartContainer config={chartConfig} className="bg-verido-white py-20 px-10">
      <ResponsiveContainer width="100%" height={100}>
        <BarChart
          data={chartData}
          barCategoryGap="10%"
          margin={{ left: 0, right: 0 }}
        >
          <XAxis className="bg-slate-400" dataKey="month" />
          {/* <YAxis /> */}
          <ChartTooltip labelClassName="bg-white" content={<ChartTooltipContent />} />
          <Bar
            barSize={20}
            dataKey="moneyIn"
            fill={chartConfig.moneyIn.color}
            radius={10}
          />
          <Bar
            barSize={20}
            dataKey="moneyOut"
            fill={chartConfig.moneyOut.color}
            radius={4}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default CashMovementChart;
