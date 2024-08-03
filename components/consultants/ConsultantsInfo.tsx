//@ts-nocheck
import React from "react";
import { monthNames } from "@/constant";
import { useConsultantById } from "../../lib/react-query/query/useConsultant";
import { useParams } from "next/navigation";
import ConsultantInfoCard from "./ConsultantInfoCard";

import { BusinessOwnerTable } from "../businessOwners/BusinessOwnersTable";
import { columnsBusiness } from "../../app/(root)/business-owners/column";
import GlobalLoadingIndicator from "@/app/GlobalLoadingIndicator";
import ConsultantMoneyInMoneyOut from "../charts/ConsultantMoneyInMoneyOut";
import StatisticsCard from "../common/StatisticsCard";

const ConsultantsInfo = () => {
  const { id } = useParams() as { id: string };
  const { data, isPending, isRefetching } = useConsultantById(id);
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

  if (isPending || isRefetching) {
    return <GlobalLoadingIndicator />;
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
              value={`$ ${moneySalesIn}`}
              label="Total Subscription"
              iconSrc="/assets/icons/barchart1.svg"
            />
            <StatisticsCard
              value={`$ ${consultantLabourStat}`}
              label="Direct Labour"
              iconSrc="/assets/icons/barchart2.svg"
            />
            <StatisticsCard
              value={`$ ${consultantMaterialStat}`}
              label="Direct Material"
              iconSrc="/assets/icons/barchart3.svg"
            />
            <StatisticsCard
              value="$17,346.00"
              label="Overhead"
              iconSrc="/assets/icons/barchart4.svg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultantsInfo;
