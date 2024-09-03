import React from "react";
import { Skeleton } from "../ui/skeleton";

const PartnerInfoCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 p-2 md:p-10 w-full bg-white rounded-lg">
      <div className="flex flex-col flex-1 justify-between items-center border-r px-10 border-r-verido-border">
        <div className="flex items-center justify-center flex-col gap-2">
          <Skeleton className="rounded-full w-[60px] h-[60px]" />
          <div className="flex flex-col justify-center items-center gap-3">
            <Skeleton className="w-[100px] h-[20px] rounded-lg" />
            <Skeleton className="w-[100px] h-[20px] rounded-lg" />
            <Skeleton className="w-[60px] h-[30px] rounded-lg" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start gap-3 w-full">
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col flex-1 gap-2">
            <Skeleton className="w-[180px] h-[30px] rounded-lg" />
            <Skeleton className="w-[100px] h-[20px] rounded-lg" />
          </div>
          <div>
            <Skeleton className="w-[70px] h-[40px] rounded-lg" />
          </div>
        </div>

        <div className="border-t border-verido-border w-full py-4">
          <Skeleton className="w-[180px] h-[30px] rounded-lg" />
          <Skeleton className="w-[100px] h-[20px] rounded-lg mt-5" />
        </div>

        <div className="border-t border-verido-border py-4 flex flex-col gap-5 w-full">
          <Skeleton className="w-[150px] h-[40px] rounded-lg" />
          <div className="flex gap-10">
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              {[...Array(9)].map((_, index) => (
                <li key={index}>
                  <Skeleton className="w-[200px] h-[30px] rounded-lg" />
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              {[...Array(9)].map((_, index) => (
                <li key={index}>
                  <Skeleton className="w-[200px] h-[30px] rounded-lg" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-verido-border flex flex-col gap-5 py-4 w-full">
          <Skeleton className="w-[150px] h-[30px] rounded-lg" />
          <div className="flex gap-10">
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              {[...Array(3)].map((_, index) => (
                <li key={index}>
                  <Skeleton className="w-[200px] h-[20px] rounded-lg" />
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              {[...Array(3)].map((_, index) => (
                <li key={index}>
                  <Skeleton className="w-[200px] h-[20px] rounded-lg" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerInfoCardSkeleton;
