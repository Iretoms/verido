import React from "react";
import Image from "next/image";

interface StatisticsCardProps {
  iconSrc: string;
  value: string | number;
  label: string;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  iconSrc,
  value,
  label,
}) => {
  return (
    <div className="bg-white rounded-lg flex flex-1 gap-2 items-center p-5">
      <Image
        src={iconSrc}
        alt="chart"
        width={60}
        height={60}
        className="object-contain"
      />
      <div>
        <p className="text-[15px] lg:text-[18px]">{value}</p>
        <p className="font-light text-[12px] text-gray-text">{label}</p>
      </div>
    </div>
  );
};

export default StatisticsCard;
