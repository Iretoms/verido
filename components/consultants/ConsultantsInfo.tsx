//@ts-nocheck
import React from "react";
import { monthNames } from "@/constant";
import { useConsultantById } from "../../lib/react-query/query/useConsultant";
import { useParams } from "next/navigation";
import ConsultantInfoCard from "./ConsultantInfoCard";
import { BusinessOwnerTable } from "../businessOwners/BusinessOwnersTable";
import { columnsBusiness } from "../../app/(root)/sub-agents/column";
import ConsultantMoneyInMoneyOut from "../charts/ConsultantMoneyInMoneyOut";
import StatisticsCard from "../common/StatisticsCard";
import PartnerInfoCardSkeleton from "../partners/PartnerInfoCardSkeleton";

const ConsultantsInfo = () => {
  const { id } = useParams() as { id: string };
  const { data, isFetching } = useConsultantById(id);
  const consultantStats = data?.data;
  const selectedConsultant = data?.response;
  const businessData = selectedConsultant?.business || [];
  const chartDataCash = React.useMemo(() => {
    if (!consultantStats?.money_in_v_money_out) return [];

    const salesData = consultantStats.money_in_v_money_out.total_money_in;
    const moneyOutData = consultantStats.money_in_v_money_out.total_money_out;

    const combinedData = salesData.map((sale: any) => {
      const month = sale.month;
      const monthName = monthNames[parseInt(month?.split("-")[1]) - 1];
      const moneyIn = sale.totalAmount;

      const correspondingMoneyOut = moneyOutData.find(
        (outItem) => outItem.month === month
      ) || { totalAmount: 0 };

      return {
        month: monthName,
        moneyIn: moneyIn,
        moneyOut: correspondingMoneyOut.totalAmount,
      };
    });

    moneyOutData.forEach((outItem) => {
      const month = outItem.month;
      const monthName = monthNames[parseInt(month?.split("-")[1]) - 1];
      if (!combinedData.some((item) => item.month === monthName)) {
        combinedData.push({
          month: monthName,
          moneyIn: 0,
          moneyOut: outItem.totalAmount,
        });
      }
    });

    return combinedData.sort(
      (a, b) => monthNames.indexOf(a.month) - monthNames.indexOf(b.month)
    );
  }, [consultantStats]);
  const moneySalesIn = React.useMemo(() => {
    return (
      consultantStats?.money_in_v_money_out?.total_money_in?.reduce(
        (acc, curr) => acc + (curr.totalAmount || 0),
        0
      ) || 0
    );
  }, [consultantStats]);
  const consultantLabourStat = React.useMemo(() => {
    return (
      consultantStats?.money_in_v_money_out?.expenses?.directLabour?.reduce(
        (acc, curr) => acc + (curr.totalAmount || 0),
        0
      ) || 0
    );
  }, [consultantStats]);
  const consultantMaterialStat = React.useMemo(() => {
    return (
      consultantStats?.money_in_v_money_out?.expenses?.directMaterial?.reduce(
        (acc, curr) => acc + (curr.totalAmount || 0),
        0
      ) || 0
    );
  }, [consultantStats]);

  if (isFetching) {
    return <PartnerInfoCardSkeleton />;
  }

  return (
    <div className="w-full h-full p-2 lg:p-0">
      {selectedConsultant && (
        <div className="flex flex-col gap-10">
          <ConsultantInfoCard consultant={selectedConsultant} />
          <div className="flex flex-col p-1 md:p-10 lg:p-10 gap-5 w-full bg-white mb-10 rounded-lg">
            <BusinessOwnerTable data={businessData} columns={columnsBusiness} />
          </div>
          <ConsultantMoneyInMoneyOut chartData={chartDataCash} />
          <div className="flex mt-3 lg:mt-10 flex-wrap lg:flex-nowrap gap-4 items-center">
            <StatisticsCard
              value={`$ ${moneySalesIn || 0} `}
              bgColor="verido-card-green"
              label="Total Subscriotion"
              percentage={2.5}
              trend="up"
            />
            <StatisticsCard
              value={`$ ${consultantLabourStat || 0}`}
              bgColor="verido-card-purple"
              label="Direct Labour"
              percentage={2.5}
              trend="up"
            />
            <StatisticsCard
              value={`$ ${consultantMaterialStat || 0}`}
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
        </div>
      )}
    </div>
  );
};

export default ConsultantsInfo;
