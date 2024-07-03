"use client";

import ConsultantsInfo from "@/components/consultants/ConsultantsInfo";
import React from "react";
import { usePathname } from "next/navigation";

const page = () => {
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
      <div className="bg-verido-white rounded-lg  h-[43rem]">
        <ConsultantsInfo />
      </div>
      <div className="bg-verido-white rounded-lg  h-[43rem]">
        <ConsultantsInfo />
      </div>
    </div>
  );
};

export default page;
