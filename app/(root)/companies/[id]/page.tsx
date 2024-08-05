"use client";
import React from "react";
import { usePathname } from "next/navigation";
import PartnerInfo from "../../../../components/partners/PartnerInfo";

const PartnerDetails = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-6">
      <div className="text-sm  text-verido-green">
        Home <span>/ </span>{" "}
        <span className="text-gray-text capitalize">
          {""}

          {pathname.substring(1)}
        </span>
      </div>
      <div className=" rounded-lg  h-[43rem]">
        <PartnerInfo />
      </div>
    </div>
  );
};

export default PartnerDetails;
