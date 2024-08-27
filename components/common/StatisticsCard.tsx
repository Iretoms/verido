import React from "react";
import clsx from "clsx";

interface StatisticsCardProps {
  value: string | number;
  label: string;
  bgColor: string
  trend?: "up" | "down";
  percentage?: number;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  value,
  label,
  bgColor,
  trend,
  percentage,
}) => {
  return (
    <div className={`bg-${bgColor} rounded-lg flex flex-col gap-2  pl-3 pr-11 py-3`}>
      <p className="text-[12px] font-medium text-gray-text">{label}</p>
      <div className="flex items-center gap-2">
        <p className="text-[15px] lg:text-[20px] font-bold">{value}</p>
        <span
          className={clsx(" font-bold text-[12px]", {
            "text-verido-green": trend === "up",
            "text-error": trend === "down",
          })}
        >
          {trend === "up" ? `↑ ${percentage}%` : `↓ ${percentage}%`}
        </span>
      </div>
    </div>
  );
};

export default StatisticsCard;
