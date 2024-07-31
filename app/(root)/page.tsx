// @ts-nocheck
"use client";
import React from "react";
import Image from "next/image";
import { ConsultantTable } from "../../components/consultants/ConsultantTable";
import { BusinessOwnerTable } from "../../components/businessOwners/BusinessOwnersTable";
import { columnsConsultant } from "./consultants/column";
import { columnsBusiness } from "./business-owners/column";
import { useBusiness } from "../../lib/react-query/query/useBusiness";
import { useConsultants } from "../../lib/react-query/query/useConsultant";
import { columnsVideo } from "../../components/video/column";
import { columnsCountry } from "../../components/countries/column";
import { DownLinksGraph } from "@/components/common/DownLinksGraph";
import BusinessStatistics from "../../components/common/BusinessStatistics";
import CashMovementChart from "../../components/charts/CashMovementChart";
import { VideoTable } from "../../components/video/VideoTable";
import { useVideos } from "../../lib/react-query/query/useVideo";
import CreateConsultant from "../../components/consultants/CreateConsultant";
import CreatePartner from "../../components/partners/CreatePartner";
import { CountryTable } from "../../components/countries/CountryTable";
import { countryData } from "../../constant/index";
import GlobalLoadingIndicator from "../GlobalLoadingIndicator";
import { useAuthenticatedUser } from "../../context/AuthContext";
import { useDashboardStats } from "@/lib/react-query/query/useStats";
import { DashboardHexChart } from "@/components/charts/DashboardHexChart";
import { DashboardMultipleLineChart } from "@/components/charts/DashboardMultipleLineChart";

const DashboardContent = () => {
  const { data: businessOwnersData } = useBusiness();
  const { data: consultantsData } = useConsultants();
  const { currentUser, isLoading } = useAuthenticatedUser();
  const { data: videData } = useVideos();
  const businessOwner = businessOwnersData || [];
  const consultants = consultantsData || [];
  const videos = videData || [];
  const isSuperAdmin = currentUser?.role === "super_admin";
  const isPartner = currentUser?.role === "partner";
  const { data: dashboardStats } = useDashboardStats();
  const chartData = React.useMemo(() => {
    if (!dashboardStats) return [];

    const moneyInData = dashboardStats.money_in_v_money_out.total_money_in;
    const moneyOutData = dashboardStats.money_in_v_money_out.total_money_out;

    const combinedData = moneyInData.map((inItem) => {
      const correspondingOutItem = moneyOutData.find(
        (outItem) => outItem.month === inItem.month
      ) || { totalAmount: 0 };
      return {
        month: inItem.month,
        desktop: inItem.totalAmount,
        mobile: correspondingOutItem.totalAmount,
      };
    });

    return combinedData;
  }, [dashboardStats]);
  const totalSubscription = React.useMemo(() => {
    const total =
      dashboardStats?.money_in_v_money_out.subscription.reduce(
        (acc, curr) => acc + curr.totalAmount,
        0
      ) || 0;
    return parseFloat(total.toFixed(2));
  }, [dashboardStats]);

  if (isLoading) {
    return <GlobalLoadingIndicator />;
  }

  return (
    <>
      {currentUser && (
        <div className="w-full flex flex-col flex-1 p-3 lg:p-6 space-y-6">
          <div>
            <h1 className="text-2xl">Welcome back, {currentUser?.name} 👋</h1>
            <p className="text-gray-text text-[12px] font-light">
              Your current status and analytics are here
            </p>
          </div>

          <div className="w-full flex flex-col bg-green lg:flex-row justify-between gap-7">
            <div className="w-full lg:w-3/5 flex flex-col gap-10">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-6">
                <div
                  className={`bg-white rounded-lg ${
                    isPartner ? "hidden" : "flex"
                  } flex flex-col gap-2 items-center p-5`}
                >
                  <Image
                    src="/assets/icons/bar-chart2.svg"
                    alt="chart"
                    width={100}
                    height={100}
                    className="object-contain w-full"
                  />
                  <p className="text-[18px]">
                    {dashboardStats?.all_users.partners}
                  </p>
                  <p className="font-light text-[12px] text-gray-text">
                    All Partners
                  </p>
                </div>
                <div className="bg-white rounded-lg flex flex-col gap-2 items-center p-5">
                  <Image
                    src="/assets/icons/bar-chart.svg"
                    alt="chart"
                    width={100}
                    height={100}
                    className="object-contain w-full"
                  />
                  <p className="text-[18px]">
                    {dashboardStats?.all_users.businesses}
                  </p>
                  <p className="font-light text-[12px] text-gray-text">
                    All Business
                  </p>
                </div>
                <div
                  className={`bg-white rounded-lg ${
                    !isPartner && !isSuperAdmin ? "hidden" : "flex"
                  } flex gap-2 flex-col items-center p-5`}
                >
                  <Image
                    src="/assets/icons/bar-chart2.svg"
                    alt="chart"
                    width={100}
                    height={100}
                    className="object-contain w-full"
                  />
                  <p className="text-[18px]">
                    {dashboardStats?.all_users.consultants}
                  </p>
                  <p className="font-light text-[12px] text-gray-text">
                    All Consultants
                  </p>
                </div>
                <div
                  className={`bg-white rounded-lg ${
                    isPartner || isSuperAdmin ? "flex" : "hidden"
                  } gap-2 flex-col items-center p-5`}
                >
                  <Image
                    src="/assets/icons/bar-chart2.svg"
                    alt="chart"
                    width={100}
                    height={100}
                    className="object-contain w-full"
                  />
                  <p className="text-[18px]">
                    {dashboardStats?.all_users.businesses}
                  </p>
                  <p className="font-light text-[12px] text-gray-text">
                    All Suscribers
                  </p>
                </div>

                <div
                  className={`bg-white rounded-lg flex flex-col gap-1 items-center p-5 ${
                    !isSuperAdmin ? "hidden" : "flex"
                  }`}
                >
                  <Image
                    src="/assets/icons/bar-chart2.svg"
                    alt="chart"
                    width={100}
                    height={100}
                    className="object-contain w-full"
                  />
                  <p className="text-[18px] font-bold">
                    {dashboardStats?.verido_users.partners}
                  </p>
                  <p className="text-verido-green text-sm font-bold">VERIDO</p>
                  <p className="font-light text-[12px] text-gray-text">
                    Partners
                  </p>
                </div>
                <div
                  className={`bg-white rounded-lg flex flex-col gap-1 items-center p-5 ${
                    !isSuperAdmin ? "hidden" : "flex"
                  }`}
                >
                  <Image
                    src="/assets/icons/bar-chart.svg"
                    alt="chart"
                    width={100}
                    height={100}
                    className="object-contain w-full"
                  />
                  <p className="text-[18px] font-bold">
                    {dashboardStats?.verido_users.businesses}
                  </p>
                  <p className="text-verido-green text-sm font-bold">VERIDO</p>
                  <p className="font-light text-[12px] text-gray-text">
                    Business
                  </p>
                </div>
                <div
                  className={`bg-white rounded-lg flex flex-col gap-1 items-center p-5 ${
                    !isSuperAdmin ? "hidden" : "flex"
                  }`}
                >
                  <Image
                    src="/assets/icons/bar-chart2.svg"
                    alt="chart"
                    width={100}
                    height={100}
                    className="object-contain w-full"
                  />
                  <p className="text-[18px] font-bold">
                    {dashboardStats?.all_users.consultants}
                  </p>
                  <p className="text-verido-green text-sm font-bold">VERIDO</p>
                  <p className="font-light text-[12px] text-gray-text">
                    Consultants
                  </p>
                </div>
                <div
                  className={`bg-white rounded-lg flex flex-col gap-1 items-center p-5 ${
                    !isSuperAdmin ? "hidden" : "flex"
                  }`}
                >
                  <Image
                    src="/assets/icons/bar-chart3.svg"
                    alt="chart"
                    width={100}
                    height={100}
                    className="object-contain w-full"
                  />
                  <p className="text-[18px] font-bold">0</p>
                  <p className="text-verido-green text-sm font-bold">VERIDO</p>
                  <p className="font-light text-[12px] text-gray-text">
                    Suscribers
                  </p>
                </div>

                <div
                  className={`bg-white rounded-lg flex flex-col gap-1 items-center p-5 ${
                    !isSuperAdmin ? "hidden" : "flex"
                  }`}
                >
                  <Image
                    src="/assets/icons/bar-chart2.svg"
                    alt="chart"
                    width={100}
                    height={100}
                    className="object-contain w-full"
                  />
                  <p className="text-[18px]">
                    {dashboardStats?.independent_users.partners}
                  </p>
                  <p className="font-light text-[12px] text-gray-text text-center">
                    Independent Partners
                  </p>
                </div>
                <div
                  className={`bg-white rounded-lg flex flex-col gap-1 items-center p-5 ${
                    !isSuperAdmin ? "hidden" : "flex"
                  }`}
                >
                  <Image
                    src="/assets/icons/bar-chart.svg"
                    alt="chart"
                    width={100}
                    height={100}
                    className="object-contain w-full"
                  />
                  <p className="text-[18px]">
                    {dashboardStats?.independent_users.businesses}
                  </p>
                  <p className="font-light text-[12px] text-gray-text text-center">
                    Independent Business
                  </p>
                </div>
                <div
                  className={`bg-white rounded-lg flex flex-col gap-1 items-center p-5 ${
                    !isSuperAdmin ? "hidden" : "flex"
                  }`}
                >
                  <Image
                    src="/assets/icons/bar-chart2.svg"
                    alt="chart"
                    width={100}
                    height={100}
                    className="object-contain w-full"
                  />
                  <p className="text-[18px]">
                    {dashboardStats?.independent_users.consultants}
                  </p>
                  <p className="font-light text-[12px] text-gray-text text-center">
                    Independent Consultants
                  </p>
                </div>
                <div
                  className={`bg-white rounded-lg flex flex-col gap-1 items-center p-5 ${
                    !isSuperAdmin ? "hidden" : "flex"
                  }`}
                >
                  <Image
                    src="/assets/icons/bar-chart3.svg"
                    alt="chart"
                    width={100}
                    height={100}
                    className="object-contain w-full"
                  />
                  <p className="text-[18px]">0</p>
                  <p className="font-light text-[12px] text-gray-text text-center">
                    Independent Subscribers
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
              {(isSuperAdmin || isPartner) && (
                <div className="flex justify-between flex-col p-5 rounded-md bg-white max-h-[25rem] overflow-y-auto">
                  <VideoTable columns={columnsVideo} data={videos} />
                </div>
              )}
            </div>
            <div className="flex justify-between flex-1 flex-col gap-8">
              <DownLinksGraph />
              <div
                className={`bg-white p-6 rounded-lg  flex flex-col items-center justify-between ${
                  !isSuperAdmin && !isPartner ? "hidden" : ""
                }`}
              >
                <div className=" flex flex-col items-center justify-center">
                  <Image
                    src="/assets/icons/growth.svg"
                    width={300}
                    height={300}
                    alt="Illustration"
                  />
                  <h2 className="text-[15px] text-center">
                    {isSuperAdmin
                      ? "Create New Partner/Consultant Account"
                      : "Create Consultant"}
                  </h2>
                  <div className="flex items-center gap-6 justify-between mt-10">
                    {isSuperAdmin && <CreatePartner />}
                    <CreateConsultant />
                  </div>
                </div>
              </div>
              <div>
                <DashboardHexChart chartData={chartData} />
              </div>
            </div>
          </div>
          <BusinessStatistics />
          <div
            className={`bg-white p-1 md:p-10 lg:p-10 rounded-md ${
              !isSuperAdmin && !isPartner ? "hidden" : ""
            }`}
          >
            <ConsultantTable data={consultants} columns={columnsConsultant} />
          </div>
          <div className="bg-white p-1 md:p-10 lg:p-10  rounded-md">
            <BusinessOwnerTable
              data={businessOwner}
              columns={columnsBusiness}
            />
          </div>

          <CashMovementChart />
          <DashboardMultipleLineChart/>
          <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center">
            <div className="bg-white rounded-lg flex flex-1 gap-4 items-center p-5">
              <Image
                src="/assets/icons/barchart1.svg"
                alt="chart"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <p className="text-[15px] lg:text-[18px]">
                  {totalSubscription}
                </p>
                <p className="font-light text-[12px] text-gray-text">
                  Total susbscription
                </p>
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
                <p className="text-[15px] lg:text-[18px]">
                  $
                  {
                    dashboardStats?.money_in_v_money_out.expenses
                      .directLabour?.[0]?.totalAmount
                  }
                </p>
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
                <p className="text-[15px] lg:text-[18px]">
                  $
                  {
                    dashboardStats?.money_in_v_money_out.expenses
                      .directMaterial?.[0]?.totalAmount
                  }
                </p>
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
                <p className="text-[15px] lg:text-[18px]">$17,346.00</p>
                <p className="font-light text-[12px] text-gray-text">
                  Overhead
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-md">
            <CountryTable data={countryData} columns={columnsCountry} />
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardContent;
