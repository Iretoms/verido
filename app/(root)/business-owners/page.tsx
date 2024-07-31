// @ts-nocheck
"use client";
import { columnsBusiness } from "./column";
import React from "react";
import { useBusiness } from "../../../lib/react-query/query/useBusiness";
import { usePathname } from "next/navigation";
import { BusinessOwnerTable } from "../../../components/businessOwners/BusinessOwnersTable";

const BusinessOwners = () => {
  const { data: businessData } = useBusiness();

  const adminBusiness = businessData || [];

  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      <div className="text-sm text-verido-green p-2 lg:p-0">
        Home <span>/</span>{" "}
        <span className="text-gray-text">{pathname.substring(1)}</span>
      </div>
      <div className="bg-verido-white p-6 rounded-lg flex flex-col gap-6 min-h-[42rem]">
        <BusinessOwnerTable data={adminBusiness} columns={columnsBusiness} />
      </div>
    </div>
  );
};

export default BusinessOwners;
