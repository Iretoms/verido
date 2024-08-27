import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import clsx from "clsx";

type IDashboardCard = {
  title: string;
  value: number;
  percentage: number;
  trend: "up" | "down";
  icon: string;
  bgColor: string;
};

const DashboardCard = ({
  title,
  icon,
  value,
  bgColor,
  trend,
  percentage,
}: IDashboardCard) => {
  return (
    <div
      className={`rounded-lg flex justify-between items-center p-3  ${bgColor}`}
    >
      <div>
        <p className="font-medium text-gray-700 text-[14px] mb-4">{title}</p>

        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-[20px] font-bold">{value}</span>
          </div>
          <div className="flex items-center gap-1">
            <span
              className={clsx(" font-bold text-[12px]", {
                "text-verido-green": trend === "up",
                "text-error": trend === "down",
              })}
            >
              {trend === "up" ? `↑ ${percentage}%` : `↓ ${percentage}%`}
            </span>
            <p className="text-gray-500 text-[10px]">Last month</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          className="object-contain"
          src={icon}
          alt={`${title} icon`}
          width={70}
          height={70}
        />
      </div>
    </div>
  );
};

export default DashboardCard;
