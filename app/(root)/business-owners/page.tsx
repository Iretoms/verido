"use client";
import { Button } from "@/components/ui/button";
import { columns } from "./column";
import React, { useEffect } from "react";
import { useBusiness } from "@/lib/react-query/query/useBusiness";
import { usePathname } from "next/navigation";
import { BusinessOwnerTable } from "@/components/businessOwners/BusinessOwnersTable";

const BusinessOwners = () => {
  const { data: businessOwnersData, isLoading, isError } = useBusiness();

  //Come back to correct this line
  const businessOwner = businessOwnersData || [];
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      <div className="text-sm  text-verido-green">
        Home <span>/</span>{" "}
        <span className="text-gray-text">{pathname.substring(1)}</span>
      </div>
      <div className="bg-verido-white p-6 rounded-lg flex flex-col gap-6 h-[42rem]">
      
        <BusinessOwnerTable data={businessOwner} columns={columns} />
      </div>
    </div>
  );
};

export default BusinessOwners;
