"use client";

import { ConsultantTable } from "@/components/consultants/ConsultantTable";
import { columns } from "./column";
import React from "react";
import { useBusiness } from "@/lib/react-query/query/useBusiness";
import { usePathname } from "next/navigation";
import { AdminBusinessResponse, Consultant } from "@/types";


const extractConsultants = (data: AdminBusinessResponse[]): Consultant[] => {
  return data.flatMap((business) => business.consultant || []);
};

const Consultants = () => {
  const { data: businessData, isLoading, isError } = useBusiness();
  const pathname = usePathname();

  const consultants = businessData ? extractConsultants(businessData) : [];
  console.log(consultants)

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
        <ConsultantTable data={consultants} columns={columns} />
      </div>
    </div>
  );
};

export default Consultants;
