import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";
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
  const { data: countryAdminDetails, isFetching } = useCountryAdminById(id);
  const consultantsData = countryAdminDetails?.consultants || [];
  const businessData = countryAdminDetails?.businesses || [];

  if (isFetching) {
    return <PartnerInfoCardSkeleton />;
  }

  return (
    <div className="w-full h-full p-2 lg:p-0">
      {countryAdminDetails && (
        <div className="flex flex-col p-2 gap-2">
          <CountryAdminInfoCard countryAdmin={countryAdminDetails} />
          <div className="flex mt-3 lg:mt-10 flex-wrap lg:flex-nowrap gap-4 items-center">
            <div className="w-full border rounded-[16px] overflow-hidden">
              <div className="px-6 py-4 bg-sidebar-gray border-b">
                <p className="font-medium">Users</p>
                <p className="text-[12px] font-normal">
                  An overview of all users registered under Michael Mitchel
                </p>
              </div>
              <div className="px-6 py-6">
                <div className="flex flex-wrap gap-4">
                  <div className="bg-active-green rounded-lg flex flex-1 justify-between items-center p-3">
                    <div>
                      <p className="font-medium text-gray-700 text-[13px] mb-3">
                        Total Users
                      </p>
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="text-[16px] font-bold">100</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-bold text-verido-green">
                            ↑ 2.5%
                          </span>
                          <p className="text-gray-500 text-[9px]">Last month</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Image
                        className="object-contain"
                        src="/assets/icons/green-trend.svg"
                        alt="trend"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>

                  <div className="bg-verido-card-blue rounded-lg flex flex-1 justify-between items-center p-3">
                    <div>
                      <p className="font-medium text-gray-700 text-[13px] mb-3">
                        Partners
                      </p>
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="text-[16px] font-bold">5</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-bold text-verido-green">
                            ↑ 2.5%
                          </span>
                          <p className="text-gray-500 text-[9px]">Last month</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Image
                        className="object-contain"
                        src="/assets/icons/blue-trend.svg"
                        alt="trend"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>

                  <div className="bg-verido-card-purple rounded-lg flex flex-1 justify-between items-center p-3">
                    <div>
                      <p className="font-medium text-gray-700 text-[13px] mb-3">
                        Companies
                      </p>
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="text-[16px] font-bold">20</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-bold text-verido-green">
                            ↑ 2.5%
                          </span>
                          <p className="text-gray-500 text-[9px]">Last month</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Image
                        className="object-contain"
                        src="/assets/icons/purple-trend.svg"
                        alt="trend"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>

                  <div className="bg-verido-card-orange rounded-lg flex flex-1 justify-between items-center p-3">
                    <div>
                      <p className="font-medium text-gray-700 text-[13px] mb-3">
                        Super agents
                      </p>
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="text-[16px] font-bold">75</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-bold text-error">
                            ↓ 2.5%
                          </span>
                          <p className="text-gray-500 text-[9px]">Last month</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Image
                        className="object-contain"
                        src="/assets/icons/orange-trend.svg"
                        alt="trend"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>

                  <div className="bg-verido-card-teal rounded-lg flex flex-1 justify-between items-center p-3">
                    <div>
                      <p className="font-medium text-gray-700 text-[13px] mb-3">
                        Sub agents
                      </p>
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="text-[16px] font-bold">150</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-bold text-verido-green">
                            ↑ 2.5%
                          </span>
                          <p className="text-gray-500 text-[9px]">Last month</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Image
                        className="object-contain"
                        src="/assets/icons/green-trend.svg"
                        alt="trend"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full border rounded-[16px] overflow-hidden mt-6">
                  <div className="flex justify-between items-center px-6 py-4 border-b">
                    <div>
                      <p className="font-medium">Number of Users</p>
                      <p className="text-[12px] font-normal">
                        Showing a trend of the number of users over time
                      </p>
                    </div>
                    <Button
                      size={"sm"}
                      className="flex gap-2 items-center bg-transparent text-gray-text px-3 py-2 text-[13px] border rounded-md"
                    >
                      Year
                      <Image
                        src="/assets/icons/dropdown.svg"
                        alt="edit"
                        width={14}
                        height={14}
                      />
                    </Button>
                  </div>
                  <div className="px-6 py-6">
                    <Image
                      className="object-contain w-full"
                      src="/assets/icons/numOfUserGraph.svg"
                      alt="graph"
                      width={100}
                      height={100}
                    />

                    <div className="flex items-center gap-4 mt-6">
                      <p className="flex gap-1 items-center">
                        <span className="w-[12px] h-[12px] bg-verido-blue-2 rounded-sm"></span>
                        <span className="text-[12px]">Partners</span>
                      </p>
                      <p className="flex gap-1 items-center">
                        <span className="w-[12px] h-[12px] bg-verido-purple rounded-sm"></span>
                        <span className="text-[12px]">Companies</span>
                      </p>
                      <p className="flex gap-1 items-center">
                        <span className="w-[12px] h-[12px] bg-verido-orange-2 rounded-sm"></span>
                        <span className="text-[12px]">Super agents</span>
                      </p>
                      <p className="flex gap-1 items-center">
                        <span className="w-[12px] h-[12px] bg-verido-green-2 rounded-sm"></span>
                        <span className="text-[12px]">Sub agents</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
