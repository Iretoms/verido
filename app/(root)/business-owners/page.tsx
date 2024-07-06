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
        <div className="flex justify-between">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-[20px]">Business Owners</h2>
            <p className="text-[14px] text-black">
              List of business owners available
            </p>
          </div>
          <Button size={'sm'} variant={'outline'} className="text-verido-green border border-verido-green  rounded-lg  text-sm">
            Change Consultant
          </Button>
        </div>
        <BusinessOwnerTable data={businessOwner} columns={columns} />
      </div>
    </div>
  );
};

export default BusinessOwners;
