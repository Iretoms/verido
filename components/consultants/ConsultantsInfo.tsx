import React from "react";
import { useConsultantContext } from "@/context/ConsultantContext";
import { useParams } from "next/navigation";
import ConsultantInfoCard from "./ConsultantInfoCard";
import { BusinessOwnerTable } from "../businessOwners/BusinessOwnersTable";
import { columnsBusiness } from "@/app/(root)/business-owners/column";

const ConsultantsInfo = () => {
  const { id } = useParams() as { id: string };
  const { selectedConsultant } = useConsultantContext();

  return (
    <div className="w-full h-full">
      {selectedConsultant && (
        <div className="flex flex-col gap-10">
          <ConsultantInfoCard consultant={selectedConsultant} />
          <div className=" p-10 flex flex-col gap-10 w-full bg-white rounded-lg mb-8">
            {/* <BusinessOwnerTable
              data={consultant?.business_owners}
              columns={columnsBusiness}
            /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultantsInfo;
