"use client";
import React from "react";
import Image from "next/image";
import { ConsultantTable } from "@/components/consultants/ConsultantTable";
import { BusinessOwnerTable } from "@/components/businessOwners/BusinessOwnersTable";
import { columnsConsultant } from "./consultants/column";
import { columnsBusiness } from "./business-owners/column";
import { useBusiness } from "@/lib/react-query/query/useBusiness";
import { useConsultants } from "@/lib/react-query/query/useConsultant";
import { columnsVideo } from "@/components/video/column";
import { useCurrentUser } from "@/lib/react-query/query/useUser";
import DownLinksGraph from "@/components/common/DownLinksGraph";
import BusinessStatistics from "@/components/common/BusinessStatistics";
import CashMovementChart from "@/components/common/CashMovementChart";
import MoneyInOutStats from "@/components/common/MoneyInOutStats";
import { VideoTable } from "@/components/video/VideoTable";
import { videoDummyData } from "@/constant";
import { useVideos } from "@/lib/react-query/query/useVideo";
import CreateConsultant from "@/components/consultants/CreateConsultant";
import CreatePartner from "@/components/partners/CreatePartner";

const DashboardContent = () => {
  const { data: businessOwnersData } = useBusiness();
  const { data: consultantsData, isLoading, isError } = useConsultants();
  const { data: currentUser } = useCurrentUser();
  const {data:videData} = useVideos()
  const businessOwner = businessOwnersData || [];
  const consultants = consultantsData || [];
  const videos = videData || []
  const isSuperAdmin = currentUser?.role === "super_admin";
  return (
    <div className="flex flex-col flex-1 p-6 space-y-6">
      <div>
        <h1 className="text-2xl">Welcome back, {currentUser?.name} 👋</h1>
        <p className="text-gray-text text-[12px] font-light">
          Your current status and analytics are here
        </p>
      </div>

      <div className="flex justify-between gap-7">
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white rounded-lg flex flex-col gap-2 items-center p-5">
              <Image
                src="/assets/icons/bar-chart.svg"
                alt="chart"
                width={100}
                height={100}
                className="object-contain w-full"
              />
              <p className="text-[18px]">{businessOwnersData?.length}</p>
              <p className="font-light text-[12px] text-gray-text">
                Business Owners
              </p>
            </div>
            <div className="bg-white rounded-lg flex flex-col gap-2 items-center p-5">
              <Image
                src="/assets/icons/bar-chart2.svg"
                alt="chart"
                width={100}
                height={100}
                className="object-contain w-full"
              />
              <p className="text-[18px]">{consultants?.length}</p>
              <p className="font-light text-[12px] text-gray-text">
                Consultants
              </p>
            </div>
            <div className="bg-white rounded-lg flex gap-2 flex-col gap-2 items-center p-5">
              <Image
                src="/assets/icons/bar-chart3.svg"
                alt="chart"
                width={100}
                height={100}
                className="object-contain w-full"
              />
              <p className="text-[18px]">0</p>
              <p className="font-light text-[12px] text-gray-text">
                Active Suscribers
              </p>
            </div>
            <div className="bg-white rounded-lg flex flex-col gap-2 items-center p-5">
              <Image
                src="/assets/icons/bar-chart4.svg"
                alt="chart"
                width={100}
                height={100}
                className="object-contain w-full"
              />
              <p className="text-[18px]">0</p>
              <p className="font-light text-[12px] text-gray-text">
                Active Consultants
              </p>
            </div>
          </div>
          <div className="bg-white flex justify-between items-center p-5 rounded-md">
            <div className="flex flex-col gap-1">
              <p className="font-light">Suscription</p>
              <p className="text-gray-text text-[13px] font-extralight">
                Total
              </p>
              <p>$0</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-verido-green"></div>
                <p className="text-[13px]">Yearly</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-300"></div>
                <p className="text-[13px]">Quarterly</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full  bg-verido-blue"></div>
                <p className="text-[13px]">Monthly</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/icons/percent.svg"
                alt="percent"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex justify-between flex-col p-5 rounded-md bg-white max-h-[25rem] overflow-y-auto">
            <VideoTable columns={columnsVideo} data={videos} />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <DownLinksGraph
            businessOwnersCount={businessOwnersData?.length}
            consultantsCount={consultants.length}
            totalCount={(businessOwnersData?.length || 0) + consultants.length}
          />
          <div className="bg-white p-6 rounded-lg flex items-center justify-between">
            <div className=" flex flex-col items-center justify-center">
              <Image
                src="/assets/icons/growth.svg"
                width={300}
                height={300}
                alt="Illustration"
              />
              <h2 className="text-[15px] text-center">
                Create New Partner/Consultant Account
              </h2>
              <div className="flex items-center gap-6 justify-between mt-10">
                {isSuperAdmin && <CreatePartner />}
                <CreateConsultant />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BusinessStatistics />
      <div className="bg-white p-10 rounded-md">
        <ConsultantTable data={consultants} columns={columnsConsultant} />
      </div>
      <div className="bg-white p-10 rounded-md">
        <BusinessOwnerTable data={businessOwner} columns={columnsBusiness} />
      </div>
      <CashMovementChart />
      <MoneyInOutStats />
      <div className="flex gap-4 items-center">
        <div className="bg-white rounded-lg flex flex-1 gap-4 items-center p-5">
          <Image
            src="/assets/icons/barchart1.svg"
            alt="chart"
            width={60}
            height={60}
            className="object-contain"
          />
          <div>
            <p className="text-[18px]">$1,346.00</p>
            <p className="font-light text-[12px] text-gray-text">Money In</p>
          </div>
        </div>
        <div className="bg-white rounded-lg flex flex-1 gap-2 items-center p-5">
          <Image
            src="/assets/icons/barchart2.svg"
            alt="chart"
            width={60}
            height={60}
            className="object-contain"
          />
          <div>
            <p className="text-[18px]">$13,346.00</p>
            <p className="font-light text-[12px] text-gray-text">
              Direct Labour
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg flex flex-1 gap-2 items-center p-5">
          <Image
            src="/assets/icons/barchart3.svg"
            alt="chart"
            width={60}
            height={60}
            className="object-contain"
          />
          <div>
            <p className="text-[18px]">$2,345.00</p>
            <p className="font-light text-[12px] text-gray-text">
              Direct Material
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg flex flex-1 gap-2 items-center p-5">
          <Image
            src="/assets/icons/barchart4.svg"
            alt="chart"
            width={60}
            height={60}
            className="object-contain"
          />
          <div>
            <p className="text-[18px]">$17,346.00</p>
            <p className="font-light text-[12px] text-gray-text">Overhead</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-white rounded-lg flex gap-4 items-end p-5">
          <div className="flex flex-col gap-7">
            <p>Labour</p>
            <div className="flex flex-col gap-5">
              <p className="flex gap-2 items-center">
                <span className="h-2 w-2 rounded-full  bg-verido-faint-blue"></span>
                <span className="text-[13px]">John Doe</span>
                <span className="text-gray-text text-[9px]">%35</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="h-2 w-2 rounded-full  bg-verido-blue"></span>
                <span className="text-[13px]">Mary Ann</span>
                <span className="text-gray-text text-[9px]">%25</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="h-2 w-2 rounded-full  bg-verido-light-green"></span>
                <span className="text-[13px]">Oluwatobi</span>
                <span className="text-gray-text text-[9px]">%45</span>
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/assets/icons/namecirclechart1.svg"
              alt="chart"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg flex gap-4 items-end p-5">
          <div className="flex flex-col gap-7">
            <p>Materials</p>
            <div className="flex flex-col gap-5">
              <p className="flex gap-2 items-center">
                <span className="h-2 w-2 rounded-full  bg-verido-faint-blue"></span>
                <span className="text-[13px]">Pencils</span>
                <span className="text-gray-text text-[9px]">%35</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="h-2 w-2 rounded-full  bg-verido-blue"></span>
                <span className="text-[13px]">Biro</span>
                <span className="text-gray-text text-[9px]">%25</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="h-2 w-2 rounded-full  bg-verido-light-green"></span>
                <span className="text-[13px]">Notebooks</span>
                <span className="text-gray-text text-[9px]">%45</span>
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/assets/icons/namecirclechart2.svg"
              alt="chart"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
