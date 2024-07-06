import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useConsultantById } from "@/lib/react-query/query/useConsultant";
import ConsultantInfoCard from "./ConsultantInfoCard";
import { BusinessOwnerTable } from "../businessOwners/BusinessOwnersTable";
import { columns } from "@/app/(root)/business-owners/column";

const ConsultantsInfo = () => {
  const { id } = useParams() as { id: string };

  const {
    data: consultant,
    isLoading,
    isError,
  } = useConsultantById(Number(id));

  return (
    <div className="w-full h-full">
      {consultant && (
        <div className="flex flex-col gap-10">
          <ConsultantInfoCard consultant={consultant} />
          <div className=" p-10 flex flex-col gap-10 w-full bg-white rounded-lg">
            <div className="flex justify-between gap-2">
              <div>
                <h2 className="text-[20px]">Business Owners</h2>
                <p className="text-[14px] text-black">
                  List of Business Owners available
                </p>
              </div>
              <Button
                size={"sm"}
                variant={"outline"}
                className="text-verido-green border border-verido-green  rounded-lg  text-sm"
              >Change Consultant</Button>
            </div>
            <BusinessOwnerTable
              data={consultant.business_owners}
              columns={columns}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultantsInfo;
