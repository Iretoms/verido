import React from "react";
import { useParams } from "next/navigation";
import { useCountryAdminById } from "@/lib/react-query/query/useCountryAdmin";
import { ConsultantTable } from "../consultants/ConsultantTable";
import { BusinessOwnerTable } from "../businessOwners/BusinessOwnersTable";
import { columnsBusiness } from "../../app/(root)/sub-agents/column";
import { columnsConsultant } from "../../app/(root)/superagents/column";
import StatisticsCard from "../common/StatisticsCard";
import PartnerInfoCardSkeleton from "../partners/PartnerInfoCardSkeleton";
import CountryAdminInfoCard from "./CountryAdminInfoCard";

const CountryAdminInfo = () => {
  const { id } = useParams() as { id: string };
  const { data: countryAdminDetails, isFetching } = useCountryAdminById(id)
  const consultantsData = countryAdminDetails?.consultants || [];
  const businessData = countryAdminDetails?.businesses || [];

  if (isFetching) {
    return <PartnerInfoCardSkeleton />;
  }

  return (
    <div className="w-full h-full p-2 lg:p-0">
      {countryAdminDetails && (
        <div className="flex flex-col gap-10">
          <CountryAdminInfoCard countryAdmin={countryAdminDetails} />
          <div className="flex mt-3 lg:mt-10 flex-wrap lg:flex-nowrap gap-4 items-center">
            <StatisticsCard
              value={`$ ${0} `}
              bgColor="verido-card-green"
              label="Total Subscriotion"
              percentage={2.5}
              trend="up"
            />
            <StatisticsCard
              value={`$ ${0}`}
              bgColor="verido-card-purple"
              label="Direct Labour"
              percentage={2.5}
              trend="up"
            />
            <StatisticsCard
              value={`$ ${0}`}
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
            <BusinessOwnerTable
              isFetching
              data={businessData}
              columns={columnsBusiness}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryAdminInfo;
