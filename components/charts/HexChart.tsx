"use client";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import Image from "next/image";

import {
  Card,
  CardContent,
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
interface HexChartProps {
  chartData: {
    month: string;
    moneyIn: number;
  }[];
}


const chartConfig = {
  moneyIn: {
    label: "Money In",
    color: "#08A730",
  },
} satisfies ChartConfig;

export function HexChart({chartData}:HexChartProps) {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center flex-row">
        <CardTitle className="text-[15px]">
          Cash Flow{" "}
          <span className="text-gray-text text-[13px] font-extralight">
            Last 6 months
          </span>
        </CardTitle>

        <Image
          src="/assets/icons/more-fill.svg"
          width={20}
          height={20}
          alt="more"
          className="object-contain cursor-pointer"
        />
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[260px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="moneyIn"
              fill={chartConfig.moneyIn.color}
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-5 self-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-verido-green"></div>
            <p className="text-[13px]">Money In</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
