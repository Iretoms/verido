"use client";

import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="text-sm  text-verido-green">
          Home <span>/</span>{" "}
          <span className="text-gray-text">{pathname.substring(1)}</span>
        </div>
        <div className="bg-verido-white p-6 rounded-lg flex flex-col gap-6 min-h-[42rem]">
          Partners
        </div>
      </div>
    </div>
  );
};

export default page;
