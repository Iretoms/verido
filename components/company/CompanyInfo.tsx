
import React from "react";
import { useParams } from "next/navigation";
import { useCompanyById } from "../../lib/react-query/query/useCompany";
import { ConsultantTable } from "../consultants/ConsultantTable";
import { BusinessOwnerTable } from "../businessOwners/BusinessOwnersTable";
import { columnsBusiness } from "../../app/(root)/sub-agents/column";
import { columnsConsultant } from "../../app/(root)/superagents/column";
import StatisticsCard from "../common/StatisticsCard";
import PartnerInfoCardSkeleton from "../partners/PartnerInfoCardSkeleton";
import CompanyInfoCard from "./CompanyInfoCard";

const CompanyInfo = () => {
  const { id } = useParams() as { id: string };
  const { data, isFetching } = useCompanyById(id); 
  const companyDetails = data?.response;
  console.log(companyDetails)
  const partnerStats = data?.data;
  const consultantsData = companyDetails?.consultants || [];
  const businessData = companyDetails?.businesses || [];

  

  if (isFetching) {
    return <PartnerInfoCardSkeleton />;
  }

  return (
    <div className="w-full h-full p-2 lg:p-0">
      {companyDetails && (
        <div className="flex flex-col gap-10">
          <CompanyInfoCard company={companyDetails} />
          <div className="flex mt-3 lg:mt-10 flex-wrap lg:flex-nowrap gap-4 items-center">
            <StatisticsCard
              value={`$ ${ 0} `}
              bgColor="verido-card-green"
              label="Total Subscriotion"
              percentage={2.5}
              trend="up"
            />
            <StatisticsCard
              value={`$ ${ 0}`}
              bgColor="verido-card-purple"
              label="Direct Labour"
              percentage={2.5}
              trend="up"
            />
            <StatisticsCard
              value={`$ ${ 0}`}
              label="Direct Materials"
              bgColor="verido-card-red"
              percentage={2.5}
              trend="down"
            />
            <StatisticsCard
              bgColor="verido-card-orange"
              value={`$40,000`}
              label="Overhead"
              percentage={2.5}
              trend="up"
            />
          </div>
          <div className="flex flex-col p-1 md:p-10 lg:p-10 gap-5 w-full bg-white mb-10 rounded-lg">
            <ConsultantTable
              data={consultantsData}
              columns={columnsConsultant}
              isFetching
            />
          </div>

          <div className="flex flex-col p-1 md:p-10 lg:p-10 gap-5 w-full bg-white mb-10 rounded-lg">
            <BusinessOwnerTable isFetching data={businessData} columns={columnsBusiness} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;