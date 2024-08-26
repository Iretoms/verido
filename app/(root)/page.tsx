"use client";
import React from "react";
import Image from "next/image";
import { columnsVideo } from "../../components/video/column";
import { columnsCountry } from "../../components/countries/column";
import BusinessStatistics from "../../components/common/BusinessStatistics";
import SubscriptionCashMovementChart from "../../components/charts/SubscriptionCashMovementChart";
import { VideoTable } from "../../components/video/VideoTable";
import { useVideos } from "../../lib/react-query/query/useVideo";
import { CountryTable } from "../../components/countries/CountryTable";
import { countryData } from "../../constant/index";
import { useAuthenticatedUser } from "../../context/AuthContext";
import { useDashboardStats } from "@/lib/react-query/query/useStats";
import { DashboardMultipleLineChart } from "@/components/charts/DashboardMultipleLineChart";
import StatisticsCard from "@/components/common/StatisticsCard";
import DashboardMoneyInMoneyOut from "@/components/charts/DashboardMoneyInMoneyOut";
import { Skeleton } from "@chakra-ui/react";
import { Input } from "@/components/ui/input";

const DashboardContent = () => {
  const { currentUser, isLoading } = useAuthenticatedUser();
  const { data: videData } = useVideos();
  const videos = videData || [];
  const isSuperAdmin = currentUser?.role === "super_admin";
  const isPartner = currentUser?.role === "partner";
  const isConsultant = currentUser?.role === "consultant";
  const { data: dashboardStats, isPending } = useDashboardStats();
  const totalSubscription = React.useMemo(() => {
    const total =
      dashboardStats?.money_in_v_money_out.subscription?.reduce(
        (acc, curr) => acc + curr.totalAmount,
        0
      ) || 0;
    return parseFloat(total.toFixed(2));
  }, [dashboardStats]);
  const totalDirectLabour = React.useMemo(() => {
    const total =
      dashboardStats?.money_in_v_money_out.expenses.directLabour?.reduce(
        (acc, curr) => acc + curr.totalAmount,
        0
      ) || 0;
    return parseFloat(total.toFixed(2));
  }, [dashboardStats]);

  const totalDirectMaterial = React.useMemo(() => {
    const total =
      dashboardStats?.money_in_v_money_out.expenses.directMaterial?.reduce(
        (acc, curr) => acc + curr.totalAmount,
        0
      ) || 0;
    return parseFloat(total.toFixed(2));
  }, [dashboardStats]);

  const totalOverhead = React.useMemo(() => {
    const total =
      dashboardStats?.money_in_v_money_out.expenses.overheadItemTransactions?.reduce(
        (acc, curr) => acc + curr.totalAmount,
        0
      ) || 0;
    return parseFloat(total.toFixed(2));
  }, [dashboardStats]);

  if (isLoading || isPending) {
    return (
      <div className="w-full flex flex-col flex-1 p-3 lg:p-6 space-y-6">
        <div className="flex flex-col gap-5">
          <Skeleton height={"32px"} width={"500px"} className="rounded-lg" />
          <Skeleton height={"18px"} width={"60px"} className="rounded-lg" />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton
              className="rounded-lg w-[254px] h-[261.5px]"
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {currentUser && (
        <div className="w-full flex flex-col flex-1 p-3 lg:p-6 space-y-6">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-text text-[12px] font-light">
              Find your company’s key metrics and activities here
            </p>
            <div>
              <div className="flex items-center p-2 justify-between border border-text-gray rounded-lg h-[2.5rem]">
                <Image
                  className="object-contain"
                  src="/assets/icons/person.svg"
                  alt="search icon"
                  width={15}
                  height={15}
                />
                <Input
                  placeholder="Search"
                  className="max-w-sm h-full outline-none"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col bg-green lg:flex-row justify-between gap-7">
            <div className="w-full flex flex-col gap-10">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-6">
                <div
                  className={`bg-white rounded-lg ${
                    isPartner ? "hidden" : "flex"
                  } flex-col gap-2 items-center p-5`}
                >
                  <Image
                    src="/assets/icons/bar-chart2.svg"
                    alt="chart"
                    width={100}
                    height={100}
                    className="object-contain w-full"
                  />
                  <p className="text-[18px]">
                    {dashboardStats?.all_users?.partners}
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
                    All Sub Agents
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
                    All Super Agents
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
                    isSuperAdmin ? "" : "hidden"
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
                    {dashboardStats?.verido_users?.partners}
                  </p>
                  <p className="text-verido-green text-sm font-bold">VERIDO</p>
                  <p className="font-light text-[12px] text-gray-text">
                    Partners
                  </p>
                </div>
                <div
                  className={`bg-white rounded-lg flex flex-col gap-1 items-center p-5 ${
                    isSuperAdmin ? "" : "hidden"
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
                    {dashboardStats?.verido_users?.businesses}
                  </p>
                  <p className="text-verido-green text-sm font-bold">VERIDO</p>
                  <p className="font-light text-[12px] text-gray-text">
                    Sub Agents
                  </p>
                </div>
                <div
                  className={`bg-white rounded-lg flex flex-col gap-1 items-center p-5 ${
                    isSuperAdmin ? "" : "hidden"
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
                    {dashboardStats?.all_users?.consultants}
                  </p>
                  <p className="text-verido-green text-sm font-bold">VERIDO</p>
                  <p className="font-light text-[12px] text-gray-text">
                    Super Agents
                  </p>
                </div>
                <div
                  className={`bg-white rounded-lg flex flex-col gap-1 items-center p-5 ${
                    isSuperAdmin ? "" : "hidden"
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
                    isSuperAdmin ? "" : "hidden"
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
                    {dashboardStats?.independent_users?.partners}
                  </p>
                  <p className="font-light text-[12px] text-gray-text text-center">
                    Independent Partners
                  </p>
                </div>
                <div
                  className={`bg-white rounded-lg flex flex-col gap-1 items-center p-5 ${
                    isSuperAdmin ? "" : "hidden"
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
                    {dashboardStats?.independent_users?.businesses}
                  </p>
                  <p className="font-light text-[12px] text-gray-text text-center">
                    Independent Sub Agents
                  </p>
                </div>
                <div
                  className={`bg-white rounded-lg flex flex-col gap-1 items-center p-5 ${
                    isSuperAdmin ? "" : "hidden"
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
                    {dashboardStats?.independent_users?.consultants}
                  </p>
                  <p className="font-light text-[12px] text-gray-text text-center">
                    Independent Super Agents
                  </p>
                </div>
                <div
                  className={`bg-white rounded-lg flex flex-col gap-1 items-center p-5 ${
                    isSuperAdmin ? "" : "hidden"
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
            </div>
          </div>
          <DashboardMultipleLineChart />
          <DashboardMoneyInMoneyOut />
          {isConsultant ? "" : <SubscriptionCashMovementChart />}
          <BusinessStatistics />

          <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center">
            <StatisticsCard
              value={`$ ${totalSubscription}`}
              label="Total Subscription"
              iconSrc="/assets/icons/barchart1.svg"
            />
            <StatisticsCard
              value={`$ ${totalDirectLabour}`}
              label="Direct Labour"
              iconSrc="/assets/icons/barchart2.svg"
            />
            <StatisticsCard
              value={`$ ${totalDirectMaterial}`}
              label="Direct Material"
              iconSrc="/assets/icons/barchart3.svg"
            />
            <StatisticsCard
              value={`$ ${totalOverhead}`}
              label="Overhead"
              iconSrc="/assets/icons/barchart4.svg"
            />
          </div>
          <div className="bg-white p-10 rounded-md">
            <CountryTable data={countryData} columns={columnsCountry} />
          </div>
          <div>
            {(isSuperAdmin || isPartner) && (
              <div className="flex justify-between flex-col p-5 rounded-md bg-white max-h-[25rem] overflow-y-auto">
                <VideoTable columns={columnsVideo} data={videos} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardContent;
