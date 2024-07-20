import React from "react";
import { useParams } from "next/navigation";
import { usePartnerById } from "../../lib/react-query/query/usePartners";
import { ConsultantTable } from "../consultants/ConsultantTable";
import { BusinessOwnerTable } from "../businessOwners/BusinessOwnersTable";
import { columnsBusiness } from "../../app/(root)/business-owners/column";
import { columnsConsultant } from "../../app/(root)/consultants/column";
import PartnerInfoCard from "./PartnerInfoCard";
import { useBusiness } from "../../lib/react-query/query/useBusiness";
import { useConsultants } from "../../lib/react-query/query/useConsultant";
import GlobalLoadingIndicator from "@/app/GlobalLoadingIndicator";

const PartnerInfo = () => {
  const { id } = useParams() as { id: string };
  const { data: businessData } = useBusiness();

  const adminBusiness = businessData || [];
  const { data: PartnerDetails, isPending , isRefetching } = usePartnerById(id);
  const { data: consultantsData } = useConsultants();
  const consultantData = consultantsData || [];
  if (isPending) {
    return <GlobalLoadingIndicator />;
  }
  if (isRefetching) {
    return <GlobalLoadingIndicator />;
  }

  return (
    <div className="w-full h-full p-2 lg:p-0">
      {PartnerDetails && (
        <div className="flex flex-col gap-10">
          <PartnerInfoCard partners={PartnerDetails} />
          <div className="flex flex-col p-1 md:p-10 lg:p-10 gap-5 w-full bg-white mb-10 rounded-lg">
            <ConsultantTable
              data={consultantData}
              columns={columnsConsultant}
            />
          </div>
          <div className="flex flex-col p-1 md:p-10 lg:p-10 gap-5 w-full bg-white mb-10 rounded-lg">
            <BusinessOwnerTable
              data={adminBusiness}
              columns={columnsBusiness}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerInfo;
