"use client";
import { Bar, BarChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const CashMovementChart = () => {
  return (
    // <div className="bg-white p-10 rounded-md flex flex-col gap-3">
    //   <div className="flex justify-between items-center">
    //     <p className="font-light">Cash Movement</p>
    //     <div className="flex items-center gap-3 p-2 border border-solid border-gray-text rounded-md">
    //       <span className="text-gray-text text-[13px] font-extralight">
    //         2020
    //       </span>
    //       <span>
    //         <Image
    //           src="/assets/icons/calendericon.svg"
    //           alt="percent"
    //           width={20}
    //           height={20}
    //           className="object-contain"
    //         />
    //       </span>
    //     </div>
    //   </div>
    //   <div className="self-center">
    //     <Image
    //       src="/assets/icons/cashmovementchart.svg"
    //       alt="percent"
    //       width={900}
    //       height={900}
    //       className="object-contain"
    //     />
    //   </div>
    // </div>
    <ChartContainer
      config={chartConfig}
      className="min-h-[100px] w-full bg-verido-white"
    >
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="verido-green" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default CashMovementChart;
