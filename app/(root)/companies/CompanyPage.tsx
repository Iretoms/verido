"use client";

import { CompanyTable } from "@/components/company/ComapanyTable";
import { columnsCompany } from "@/components/company/column";
import React from "react";

import { usePathname } from "next/navigation";
import { useCompany } from "@/lib/react-query/query/useCompany";

const CompanyPage = () => {
    const { data: companyData, isFetching } = useCompany();
    const companies = companyData || []
   



  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      <div className="text-sm text-verido-green p-2 lg:p-0">
        Home <span>/</span>{" "}
        <span className="text-gray-text">{pathname.substring(1)}</span>
      </div>
      <div className="bg-verido-white p-3 md:p-6 rounded-lg flex flex-col gap-6 min-h-[42rem]">
        <CompanyTable
          data={companies}
          columns={columnsCompany}
          isFetching={isFetching}
        />
      </div>
    </div>
  );
};

export default CompanyPage;
