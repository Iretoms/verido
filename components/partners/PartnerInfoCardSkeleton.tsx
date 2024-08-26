import React from "react";
import { Skeleton } from "@chakra-ui/react";

const PartnerInfoCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 p-2 md:p-10 w-full bg-white rounded-lg">
      <div className="flex flex-col flex-1 justify-between items-center border-r px-10 border-r-verido-border">
        <div className="flex items-center justify-center flex-col gap-2">
          <Skeleton
            className="rounded-full"
            rounded={100}
            width={"50px"}
            height={"50px"}
          />
          <div className="flex flex-col justify-center items-center gap-3">
            <Skeleton height={3} width={20} />
            <Skeleton height={3} width={20} />
            <Skeleton width={"6rem"} height={5} rounded={50} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start gap-3 w-full">
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col flex-1 gap-2">
            <Skeleton width={150} height={4} />
            <Skeleton width={"70%"} height={8} />
          </div>
          <div>
            <Skeleton width={100} height={8} className="rounded-lg" />
          </div>
        </div>

        <div className="border-t border-verido-border w-full py-4">
          <Skeleton className="mb-5" width={100} height={4} />
          <Skeleton width={200} height={4} />
        </div>

        <div className="border-t border-verido-border py-4 flex flex-col gap-5 w-full">
          <Skeleton width={100} height={4} />
          <div className="flex gap-10">
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              {[...Array(9)].map((_, index) => (
                <li key={index}>
                  <Skeleton width={120} height={7} />
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              {[...Array(9)].map((_, index) => (
                <li key={index}>
                  <Skeleton width={180} height={7} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-verido-border flex flex-col gap-5 py-4 w-full">
          <Skeleton width={100} height={7} />
          <div className="flex gap-10">
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              {[...Array(3)].map((_, index) => (
                <li key={index}>
                  <Skeleton width={180} height={7} />
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              {[...Array(3)].map((_, index) => (
                <li key={index}>
                  <Skeleton width={180} height={7} />
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
