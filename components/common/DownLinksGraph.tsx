import React from "react";
import Image from "next/image";

interface DownlinksProps {
  totalCount: any;
  businessOwnersCount: any;
  consultantsCount: any;
}

const DownLinksGraph: React.FC<DownlinksProps> = ({
  totalCount,
  businessOwnersCount,
  consultantsCount,
}) => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const businessOwnersPercentage = (businessOwnersCount / totalCount) * 100;
  const consultantsPercentage = (consultantsCount / totalCount) * 100;
  const businessOwnersOffset =
    circumference - (businessOwnersPercentage / 100) * circumference;
  const consultantsOffset =
    circumference - (consultantsPercentage / 100) * circumference;

  return (
    <div className="w-[352px] h-[21.8rem] bg-white rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-light">Downlinks</h2>
        <Image
          src="/assets/icons/more-fill.svg"
          width={20}
          height={20}
          alt="more"
          className="object-contain cursor-pointer"
        />
      </div>
      <div className="relative w-[14rem] h-[14rem] mx-auto">
        <svg className="w-full h-full" viewBox="0 0 180 180">
          <circle
            className="text-gray-200"
            strokeWidth="5"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="90"
            cy="90"
          />
          <circle
            className="text-green-500 transition-all duration-1000 ease-in-out"
            strokeWidth="5"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="90"
            cy="90"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: businessOwnersOffset,
            }}
          />
          <circle
            className="text-blue-500 transition-all duration-1000 ease-in-out"
            strokeWidth="5"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="90"
            cy="90"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: consultantsOffset,
            }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-xl text-light-gray">Total</div>
          <div className="text-2xl">{totalCount.toLocaleString()}</div>
        </div>
      </div>
      <div className="flex justify-center space-x-8 mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-verido-green mr-2"></div>
          <span>Business Owners</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <span>Consultants</span>
        </div>
      </div>
    </div>
  );
};

export default DownLinksGraph;
