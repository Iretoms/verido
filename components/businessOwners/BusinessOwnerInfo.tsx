import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import { useBusinessById } from "../../lib/react-query/query/useBusiness";
import { monthNames } from "@/constant";
import BusinessInfoCard from "./BusinessInfoCard";
import { ProductTable } from "../products/ProductTable";
import { CustomerTable } from "../customers/CustomerTable";
import { SuppliersTable } from "../suppliers/SuppliersTable";
import { columns } from "../products/column";
import { columnsCustomer } from "../customers/column";
import { columnsSupplier } from "../suppliers/column";
import ChangeConsultant from "../consultants/ChangeConsultant";
import { AdminBusinessFullResponse } from "@/types";
import BusinessCashMovementChart from "../charts/BusinessCashMovementChart";
import { MultipleLineChart } from "../charts/MultipleLineChart";
import StatisticsCard from "../common/StatisticsCard";
import BusinessMoneyInMoneyOut from "../charts/BusinessMoneyInMoneyOut";
import PartnerInfoCardSkeleton from "../partners/PartnerInfoCardSkeleton";

const BusinessOwnerInfo = () => {
  const { id } = useParams() as { id: string };
  const { data, isFetching } = useBusinessById(id);
  const businessData = data as AdminBusinessFullResponse;
  const products = businessData?.data?.company?.products ?? [];
  const customers = businessData?.data?.associates?.customers ?? [];
  const suppliers = businessData?.data?.associates?.suppliers ?? [];
  const moneyIn = React.useMemo(() => {
    return (
      businessData?.data?.money_in_v_money_out?.total_money_in?.reduce(
        (acc, curr) => acc + (curr.totalAmount || 0),
        0
      ) || 0
    );
  }, [businessData]);
  const moneyOut = React.useMemo(() => {
    return (
      businessData?.data?.money_in_v_money_out?.total_money_out?.reduce(
        (acc, curr) => acc + (curr.totalAmount || 0),
        0
      ) || 0
    );
  }, [businessData]);
  const balance = (moneyIn - moneyOut || 0).toFixed(2);
  const labour = React.useMemo(() => {
    return (
      businessData?.data?.money_in_v_money_out?.expenses.directLabour?.reduce(
        (acc, curr) => acc + (curr.totalAmount || 0),
        0
      ) || 0
    );
  }, [businessData]);
  const material = React.useMemo(() => {
    return (
      businessData?.data?.money_in_v_money_out?.expenses.directMaterial?.reduce(
        (acc, curr) => acc + (curr.totalAmount || 0),
        0
      ) || 0
    );
  }, [businessData]);

  const chartDataCash = React.useMemo(() => {
    const data =
      businessData?.data?.money_in_v_money_out?.money_in?.sales.map((sale) => {
        const month = sale._id;
        const monthName = monthNames[parseInt(month?.split("-")[1]) - 1];
        const moneyIn = sale.totalAmount;

        return {
          month: monthName,
          moneyIn: moneyIn,
        };
      }) || [];

    return data.sort(
      (a, b) => monthNames.indexOf(a.month) - monthNames.indexOf(b.month)
    );
  }, [businessData]);
  const chartDataMoneyInOut = React.useMemo(() => {
    const moneyInData =
      businessData?.data?.money_in_v_money_out?.total_money_in;
    const moneyOutData =
      businessData?.data?.money_in_v_money_out?.total_money_out;
    const transformedData = moneyInData?.map((moneyIn) => {
      const month = moneyIn.month;
      const monthName = monthNames[parseInt(month.split("-")[1]) - 1];
      const moneyInAmount = moneyIn.totalAmount;

      const moneyOutEntry = moneyOutData.find((item) => item.month === month);
      const moneyOutAmount = moneyOutEntry ? moneyOutEntry.totalAmount : 0;

      return {
        month: monthName,
        moneyIn: moneyInAmount,
        moneyOut: moneyOutAmount,
      };
    });
    return transformedData?.sort(
      (a, b) => monthNames.indexOf(a.month) - monthNames.indexOf(b.month)
    );
  }, [businessData]);

  const chartDataMoneyInVsMoneyOut = React.useMemo(() => {
    const data =
      businessData?.data?.money_in_v_money_out?.money_in?.sales?.map(
        (moneyIn) => {
          const month = moneyIn._id;
          const monthName = monthNames[parseInt(month?.split("-")[1]) - 1];
          const directLabour =
            businessData?.data?.money_in_v_money_out?.expenses.directLabour.find(
              (item) => item._id === month
            )?.totalAmount || 0;
          const directMaterial =
            businessData?.data?.money_in_v_money_out?.expenses.directMaterial.find(
              (item) => item._id === month
            )?.totalAmount || 0;

          return {
            month: monthName,
            moneyIn: moneyIn.totalAmount,
            directLabour: directLabour,
            directMaterial: directMaterial,
          };
        }
      ) || [];
    return data.sort(
      (a, b) => monthNames.indexOf(a.month) - monthNames.indexOf(b.month)
    );
  }, [businessData]);

  if (isFetching) {
    return <PartnerInfoCardSkeleton />;
  }

  return (
    <div className="w-full h-full p-2 lg:p-0">
      {businessData && (
        <div className="flex flex-col p-2 gap-2">
          <BusinessInfoCard business={businessData.response} />

          <div className="flex mt-3 lg:mt-10 flex-wrap lg:flex-nowrap gap-4 items-center">
            <div className="w-full border rounded-[16px] overflow-hidden">
              <div className="px-6 py-4 bg-sidebar-gray border-b">
                <p className="font-medium">Revenue</p>
                <p className="text-[12px] font-normal">
                  An overview of all users registered under Acme inc
                </p>
              </div>
              <div className="px-6 py-6">
                <div className="flex flex-wrap gap-4">
                  <div className="bg-active-green rounded-lg flex flex-1 justify-between items-center p-3">
                    <div>
                      <p className="font-medium text-gray-700 text-[13px] mb-3">
                        Total Subscription
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
                        Direct Labour
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
                        Direct Material
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
                        Overhead
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
                </div>

                <div className="w-full border rounded-[16px] overflow-hidden mt-6">
                  <div className="flex justify-between items-center px-6 py-4 border-b">
                    <div>
                      <p className="font-medium">
                        Money In Vs Labour Vs Material
                      </p>
                      <p className="text-[12px] font-normal">
                        Showing a trend and breakdown of earnings and expenses.
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
                      src="/assets/icons/numOfUserGraph3.svg"
                      alt="graph"
                      width={100}
                      height={100}
                    />

                    <div className="flex items-center gap-4 mt-6">
                      <p className="flex gap-1 items-center">
                        <span className="w-[12px] h-[12px] bg-verido-green-2 rounded-sm"></span>
                        <span className="text-[12px]">Money In</span>
                      </p>
                      <p className="flex gap-1 items-center">
                        <span className="w-[12px] h-[12px] bg-verido-blue-2 rounded-sm"></span>
                        <span className="text-[12px]">Direct Labour</span>
                      </p>
                      <p className="flex gap-1 items-center">
                        <span className="w-[12px] h-[12px] bg-verido-purple rounded-sm"></span>
                        <span className="text-[12px]">Direct Material</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full border rounded-[16px] overflow-hidden mt-6">
                  <div className="flex justify-between items-center px-6 py-4 border-b">
                    <div>
                      <p className="font-medium">Total Money In Vs Money Out</p>
                      <p className="text-[12px] font-normal">
                        Showing a trend of the total money in vs total money out
                        over time.
                      </p>
                    </div>
                    <Button
                      size={"sm"}
                      className="flex gap-2 items-center bg-transparent text-gray-text px-3 py-2 text-[13px] border rounded-md"
                    >
                      <Image
                        src="/assets/icons/filter.svg"
                        alt="edit"
                        width={14}
                        height={14}
                      />
                      Filter
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
                      src="/assets/icons/moneyInOutGraph.svg"
                      alt="graph"
                      width={100}
                      height={100}
                    />

                    <div className="flex items-center gap-4 mt-6">
                      <p className="flex gap-1 items-center">
                        <span className="w-[12px] h-[12px] bg-verido-green rounded-sm"></span>
                        <span className="text-[12px]">Money In</span>
                      </p>
                      <p className="flex gap-1 items-center">
                        <span className="w-[12px] h-[12px] bg-error rounded-sm"></span>
                        <span className="text-[12px]">Money Out</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col p-1 md:p-10 lg:p-10 gap-5 w-full bg-white mb-10 rounded-lg">
            <ProductTable data={products} columns={columns} />
          </div>
          <BusinessCashMovementChart chartData={chartDataCash} />
          <BusinessMoneyInMoneyOut chartData={chartDataMoneyInOut} />
          <MultipleLineChart chartData={chartDataMoneyInVsMoneyOut} />
          <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center">
            <StatisticsCard
              value={`$ ${moneyIn || 0} `}
              bgColor="verido-card-green"
              label="Total Subscriotion"
              percentage={2.5}
              trend="up"
            />
            <StatisticsCard
              value={`$ ${labour || 0}`}
              bgColor="verido-card-purple"
              label="Direct Labour"
              percentage={2.5}
              trend="up"
            />
            <StatisticsCard
              value={`$ ${material || 0}`}
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
            <CustomerTable data={customers} columns={columnsCustomer} />
          </div>
          <div className="flex flex-col p-1 md:p-10 lg:p-10 gap-5 w-full bg-white mb-10 rounded-lg">
            <SuppliersTable data={suppliers} columns={columnsSupplier} />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default BusinessOwnerInfo;
