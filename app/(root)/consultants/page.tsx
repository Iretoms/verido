"use client";
import { ConsultantTable } from "@/components/consultants/ConsultantTable";
import { columns } from "./column";
import React, { useEffect } from "react";
import { useConsultants } from "@/lib/react-query/query/useConsultant";
import { usePathname } from "next/navigation";

const Consultants = () => {
  const { data: consultantData, isLoading, isError } = useConsultants();

  //Come back to correct this line
  const consultants = consultantData || [];
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      <div className="text-sm  text-verido-green">
        Home <span>/</span>{" "}
        <span className="text-gray-text">{pathname.substring(1)}</span>
      </div>
      <div className="bg-verido-white p-6 rounded-lg flex flex-col gap-6 h-[42rem]">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-[20px]">Consultants</h2>
          <p className="text-[14px] text-black">
            List of consultants available
          </p>
        </div>
        <ConsultantTable data={consultants} columns={columns} />
      </div>
    </div>
  );
};

export default Consultants;
