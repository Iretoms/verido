//@ts-nocheck
import React from "react";
import { useParams } from "next/navigation";
import { usePartnerById } from "../../lib/react-query/query/usePartners";
import { ConsultantTable } from "../consultants/ConsultantTable";
import { BusinessOwnerTable } from "../businessOwners/BusinessOwnersTable";
import { columnsBusiness } from "../../app/(root)/business-owners/column";
import { columnsConsultant } from "../../app/(root)/consultants/column";
import PartnerInfoCard from "./PartnerInfoCard";
import GlobalLoadingIndicator from "@/app/GlobalLoadingIndicator";
import BusinessCashMovementChart from "../charts/BusinessCashMovementChart";
import { monthNames } from "@/constant";
import { MultipleLineChart } from "../charts/MultipleLineChart";
import StatisticsCard from "../common/StatisticsCard";
import PartnerCashStatistics from "./PartnerCashStatistics";
import { HexChart } from "../charts/HexChart";

const PartnerInfo = () => {
  const { id } = useParams() as { id: string };

  const { data, isPending, isRefetching } = usePartnerById(id);
  const partnerDetails = data?.response;
  const partnerStats = data?.data;
  const consultantsData = partnerDetails?.consultants || [];
  const businessData = partnerDetails?.businesses || [];

  const chartDataCash = partnerStats?.money_in_v_money_out?.money_in?.sales.map(
    ((sale) => {
      const month = sale._id;
      const monthName = monthNames[parseInt(month?.split("-")[1]) - 1];
      const moneyIn = sale.totalAmount;

      return {
        month: monthName,
        moneyIn: moneyIn,
      };
    }) || []
  );

  const moneySalesIn =
    partnerStats?.money_in_v_money_out?.total_money_in?.[0]?.totalAmount;
  const partnerLabourStat =
    partnerStats?.money_in_v_money_out?.expenses?.directLabour[0]?.totalAmount;
  const partnerMaterialStat =
    partnerStats?.money_in_v_money_out?.expenses?.directMaterial[0]?.totalAmount;

  const chartDataMoneyInVsMoneyOut =
    partnerStats?.money_in_v_money_out?.total_money_in.map((moneyIn) => {
      const month = moneyIn.month;
      const monthName = monthNames[parseInt(month.split("-")[1]) - 1];
      const directLabour =
        partnerStats?.money_in_v_money_out?.expenses.directLabour.find(
          (item) => item._id === month
        )?.totalAmount || 0;
      const directMaterial =
        partnerStats?.money_in_v_money_out?.expenses.directMaterial.find(
          (item) => item._id === month
        )?.totalAmount || 0;

      return {
        month: monthName,
        moneyIn: moneyIn.totalAmount,
        directLabour: directLabour,
        directMaterial: directMaterial,
      };
    }) || [];

  if (isPending || isRefetching) {
    return <GlobalLoadingIndicator />;
  }

  return (
    <div className="w-full h-full p-2 lg:p-0">
      {partnerDetails && (
        <div className="flex flex-col gap-10">
          <PartnerInfoCard partners={partnerDetails} />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full lg:w-70%">
              <PartnerCashStatistics />
            </div>
            <div className="w-full lg:w-40%">
              <HexChart chartData={chartDataCash} />
            </div>
          </div>

          <BusinessCashMovementChart chartData={chartDataCash} />
          <MultipleLineChart chartData={chartDataMoneyInVsMoneyOut} />
          <div className="flex mt-3 lg:mt-10 flex-wrap lg:flex-nowrap gap-4 items-center">
            <StatisticsCard
              value={`$ ${moneySalesIn}`}
              label="Total Subscription"
              iconSrc="/assets/icons/barchart1.svg"
            />
            <StatisticsCard
              value={`$ ${partnerLabourStat}`}
              label="Direct Labour"
              iconSrc="/assets/icons/barchart2.svg"
            />
            <StatisticsCard
              value={`$ ${partnerMaterialStat}`}
              label="Direct Material"
              iconSrc="/assets/icons/barchart3.svg"
            />
            <StatisticsCard
              value="$17,346.00"
              label="Overhead"
              iconSrc="/assets/icons/barchart4.svg"
            />
          </div>
          <div className="flex flex-col p-1 md:p-10 lg:p-10 gap-5 w-full bg-white mb-10 rounded-lg">
            <ConsultantTable
              data={consultantsData}
              columns={columnsConsultant}
            />
          </div>

          <div className="flex flex-col p-1 md:p-10 lg:p-10 gap-5 w-full bg-white mb-10 rounded-lg">
            <BusinessOwnerTable data={businessData} columns={columnsBusiness} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerInfo;
