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
import { cardData, countryData } from "../../constant/index";
import { useAuthenticatedUser } from "../../context/AuthContext";
import { useDashboardStats } from "@/lib/react-query/query/useStats";
import { DashboardMultipleLineChart } from "@/components/charts/DashboardMultipleLineChart";
import StatisticsCard from "@/components/common/StatisticsCard";
import DashboardMoneyInMoneyOut from "@/components/charts/DashboardMoneyInMoneyOut";
import { Skeleton } from "@chakra-ui/react";
import { Input } from "@/components/ui/input";
import {
  countryRevenueData,
  partnerRevenueData,
  companyRevenueData,
  subAgentsRevenueData,
  superAgentsRevenueData,
} from "../../constant/index";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import AddUser from "@/components/AllUsers/AddUser";
import DashboardCard from "./DashboardCard";
import { DownLinksGraph } from "../common/DownLinksGraph";
import RevenueCard from "./RevenueCard";
import DashboardSkeleton from "./DashboardSkeleton";

const DashboardHome = () => {
  // const isLoading = true
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
    return <DashboardSkeleton />;
  }

  return (
    <>
      {currentUser && (
        <div className="w-full flex flex-col flex-1 p-3  space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-gray-text text-[12px] font-light">
                Find your company’s key metrics and activities here
              </p>
            </div>
            <div className="flex gap-3 items-center">
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
              <Select>
                <SelectTrigger className="w-[100px]  text-light-gray">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="text-sm text-light-gray" value="desc">
                    Descending
                  </SelectItem>
                  <SelectItem className="text-sm text-light-gray" value="asc">
                    Asecending
                  </SelectItem>
                </SelectContent>
              </Select>
              <AddUser />
            </div>
          </div>

          <div className="w-full flex flex-col bg-green lg:flex-row justify-between gap-7">
            <div className="w-full md:flex-row flex flex-col gap-10">
              <div className=" h-full flex flex-[2.5] flex-col gap-8">
                <h1 className="font-medium text-[20px]">
                  Performance Overview
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-2 lg:gap-5">
                  {cardData
                    .filter((card) => card.roles.includes(currentUser.role))
                    .map((card: any, index) => (
                      <DashboardCard
                        key={index}
                        title={card.title}
                        value={card.value}
                        background={card.background}
                        percentage={card.percentage}
                        trend={card.trend}
                        icon={card.icon}
                      />
                    ))}
                </div>

                <div>
                  <Image
                    className="object-contain w-full"
                    src="/assets/icons/NOU.svg"
                    width={100}
                    height={100}
                    alt="number of users"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <h1 className="font-medium text-[20px]">Revenue</h1>
                  <div className="flex w-full justify-between  flex-wrap lg:flex-nowrap gap-1 lg:gap-2 items-center">
                    <StatisticsCard
                      value={`$72,000`}
                      bgColor="#E6F2FF"
                      label="Total"
                      percentage={2.5}
                      trend="up"
                    />
                    <StatisticsCard
                      value={`$27,000`}
                      bgColor="#FFF4E6"
                      label="Subscription"
                      percentage={2.5}
                      trend="up"
                    />
                    <StatisticsCard
                      value={`$5,000`}
                      label="Adverts"
                      bgColor="#E6F6EA"
                      percentage={2.5}
                      trend="down"
                    />
                    <StatisticsCard
                      bgColor="#FFE8E5"
                      value={`$40,000`}
                      label="Partnerships"
                      percentage={2.5}
                      trend="up"
                    />
                  </div>
                </div>
                <div>
                  <Image
                    className="object-contain w-full"
                    src="/assets/icons/Rev.svg"
                    width={100}
                    height={100}
                    alt="number of users"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <h1 className="font-medium text-[20px]">
                    Money In Vs Money Out
                  </h1>
                  <div className="flex w-full justify-between  flex-wrap lg:flex-nowrap gap-2 items-center">
                    <StatisticsCard
                      value={`$72,000`}
                      bgColor="verido-card-purple"
                      label="Total"
                      percentage={2.5}
                      trend="up"
                    />
                    <StatisticsCard
                      value={`$27,000`}
                      bgColor="verido-card-orange"
                      label="Payment Due"
                      percentage={2.5}
                      trend="up"
                    />
                    <StatisticsCard
                      value={`$5,000`}
                      label="Paid"
                      bgColor="verido-card-green"
                      percentage={2.5}
                      trend="down"
                    />
                    <StatisticsCard
                      bgColor="verido-card-red"
                      value={`$40,000`}
                      label="Outstanding Payments"
                      percentage={2.5}
                      trend="up"
                    />
                  </div>
                </div>
                <div>
                  <Image
                    className="object-contain w-full"
                    src="/assets/icons/MIO.svg"
                    width={100}
                    height={100}
                    alt="number of users"
                  />
                </div>
                <div>
                  {(isSuperAdmin || isPartner) && (
                    <div className="flex justify-between flex-col rounded-md max-h-[30rem] overflow-y-auto">
                      <VideoTable columns={columnsVideo} data={videos} />
                    </div>
                  )}
                </div>
              </div>
              <div className="h-full flex flex-col flex-1 gap-6">
                <DownLinksGraph />
                <RevenueCard
                  title="Top 5 Revenue: Country"
                  items={countryRevenueData}
                />
                <RevenueCard
                  title="Top 5 Revenue: Partner"
                  items={partnerRevenueData}
                />
                <RevenueCard
                  title="Top 5 Revenue: Company"
                  items={companyRevenueData}
                />
                <RevenueCard
                  title="Top 5 Revenue: SuperAgents"
                  items={superAgentsRevenueData}
                />
                <RevenueCard
                  title="Top 5 Revenue: SubAgents"
                  items={subAgentsRevenueData}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardHome;
