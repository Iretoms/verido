"use client";
import { ConsultantTable } from "../../../components/consultants/ConsultantTable";
import { columnsConsultant } from "./column";
import React from "react";
import { usePathname } from "next/navigation";
import { useConsultants } from "../../../lib/react-query/query/useConsultant";

const Consultants = () => {
  const { data: consultantsData, isLoading, isError } = useConsultants();
  const pathname = usePathname();
  const consultantData = consultantsData || [];
 
  if (isError) {
    return <div>Error loading consultant data</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-sm text-verido-green">
        Home <span>/</span>{" "}
        <span className="text-gray-text">{pathname.substring(1)}</span>
      </div>

      <div className="bg-verido-white p-6 rounded-lg flex flex-col gap-6 min-h-[42rem]">
        <ConsultantTable data={consultantData} columns={columnsConsultant} />
      </div>
    </div>
  );
};

export default Consultants;
