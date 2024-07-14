"use client";

import { PartnersTable } from "@/components/partners/PartnersTable";
import { columns } from "./column";
import React from "react";
import { useBusiness } from "@/lib/react-query/query/useBusiness";
import { usePathname } from "next/navigation";
import { AdminBusinessResponse, Partners } from "@/types";

const extractPartners = (data: AdminBusinessResponse[]): Partners[] => {
  if (data.length === 0) return [];
  return data.flatMap((business) => business.institution || []);
};

const PartnersComponent = () => {
  const { data: businessData, isLoading, isError } = useBusiness();
  console.log(businessData);
  const pathname = usePathname();

  const partners = businessData ? extractPartners(businessData) : [];
  console.log(partners);

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
        <PartnersTable data={partners} columns={columns} />
      </div>
    </div>
  );
};

export default PartnersComponent;
