"use client";
import React from "react";
import Image from "next/image";
import { ConsultantTable } from "@/components/consultants/ConsultantTable";
import { BusinessOwnerTable } from "@/components/businessOwners/BusinessOwnersTable";
import { useConsultants } from "@/lib/react-query/query/useConsultant";
import { columns } from "./consultants/column";
import { columnsBusiness } from "./business-owners/column";
import { useBusiness } from "@/lib/react-query/query/useBusiness";

const DashboardContent = () => {
  const { data: consultantData, isLoading, isError } = useConsultants();
  const consultants = consultantData || [];
  const { data: businessOwnersData } = useBusiness();

  //Come back to correct this line
  const businessOwner = businessOwnersData || [];
  return (
    <div className="flex flex-col flex-1 p-6 space-y-6">
      <div>
        <h1 className="text-2xl">Welcome back, Edward 👋</h1>
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
              <p className="text-[18px]">1,346</p>
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
              <p className="text-[18px]">133</p>
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
              <p className="text-[18px]">346</p>
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
              <p className="text-[18px]">75</p>
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
              <p>$6.340.42</p>
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
          <div className="flex justify-between flex-col p-5 rounded-md bg-white">
            <div className="flex justify-between items-center">
              <h2 className="text-[13px] font-light">Recent Subscriptions</h2>
              <p className="text-[13px] font-light">View all</p>
            </div>
            <div className="mt-5">
              <SubscriptionTable />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className=" flex flex-col gap-2 items-center justify-center bg-white p-6 rounded-md">
            <div className="flex justify-between items-center  w-full">
              <p className="text-sm font-light">Downlinks</p>
              <Image
                src="/assets/icons/more-fill.svg"
                width={20}
                height={20}
                alt="more"
                className="object-contain cursor-pointer"
              />
            </div>
            <Image
              src="/assets/icons/Chart.svg"
              width={200}
              height={200}
              alt="Illustration"
            />

            <div className="flex justify-center gap-10 mt-8 items-center w-full">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-300"></div>
                <p className="text-[13px]">Business Owners</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-300"></div>
                <p className="text-[13px]">Consultants</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg flex items-center justify-between">
            <div className=" flex flex-col items-center justify-center">
              <Image
                src="/assets/icons/growth.svg"
                width={300}
                height={300}
                alt="Illustration"
              />
              <h2 className="text-[15px] text-center">
                Create New Business Account or Consultants
              </h2>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
                Create Account Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-md">
        <ConsultantTable data={consultants} columns={columns} />
      </div>
      <div className="bg-white p-10 rounded-md">
        <BusinessOwnerTable data={businessOwner} columns={columnsBusiness} />
      </div>
    </div>
  );
};

const SubscriptionTable = () => (
  <table className="w-full text-left">
    <thead>
      <tr className="text-[12px] text-gray-300">
        <th>Date</th>
        <th>Business Owners</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {[
        {
          date: "June 9, 2020",
          owner: "Elon Musk",
          amount: "$1,322.45",
          status: "Active",
        },
        {
          date: "June 9, 2020",
          owner: "Christiano Ronaldo",
          amount: "$733.32",
          status: "Active",
        },
        {
          date: "June 10, 2020",
          owner: "Jeff Bezos",
          amount: "$1,923.32",
          status: "Suspended",
        },
        {
          date: "June 9, 2020",
          owner: "Richard Hamilton",
          amount: "$922.12",
          status: "Active",
        },
        {
          date: "June 10, 2020",
          owner: "Lebron James",
          amount: "$323.98",
          status: "Expired",
        },
      ].map((sub, index) => (
        <tr key={index} className="border-b ">
          <td className="py-5 text-[12px]">{sub.date}</td>
          <td className="py-5 text-[12px] ">{sub.owner}</td>
          <td className="py-5 text-[12px] ">{sub.amount}</td>
          <td className="py-5 text-[12px] ">
            <span
              className={`px-2 py-1 rounded-lg ${getStatusColor(sub.status)}`}
            >
              {sub.status}
            </span>
          </td>
          <td></td>
        </tr>
      ))}
    </tbody>
  </table>
);

const getStatusColor = (status: any) => {
  switch (status) {
    case "Active":
      return "bg-light-green border border-verido-green text-verido-green";
    case "Suspended":
      return "bg-light-danger text-danger border border-danger";
    case "Expired":
      return "bg-light-orange text-verido-orange border border-verido-orange";
    default:
      return "";
  }
};

export default DashboardContent;
