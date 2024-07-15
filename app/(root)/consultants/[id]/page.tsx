"use client";

import ConsultantsInfo from "@/components/consultants/ConsultantsInfo";
import React from "react";
import { usePathname } from "next/navigation";
import BusinessStatistics from "@/components/common/BusinessStatistics";
import CashMovementChart from "@/components/common/CashMovementChart";
import MoneyInOutStats from "@/components/common/MoneyInOutStats";
import Image from "next/image";

const Page = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-6 ">
      <div className="text-sm  text-verido-green">
        Home <span>/ </span>{" "}
        <span className="text-gray-text capitalize">
          {""}

          {pathname.substring(1)}
        </span>
      </div>
      <div className=" rounded-lg ">
        <ConsultantsInfo />
      </div>
      <BusinessStatistics />
      <CashMovementChart />
      <MoneyInOutStats />
      <div className="flex gap-4 items-center">
        <div className="bg-white rounded-lg flex flex-1 gap-4 items-center p-5">
          <Image
            src="/assets/icons/barchart1.svg"
            alt="chart"
            width={90}
            height={90}
            className="object-contain w-full"
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
            width={90}
            height={90}
            className="object-contain w-full"
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
            width={90}
            height={90}
            className="object-contain w-full"
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
            width={90}
            height={90}
            className="object-contain w-full"
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
              width={130}
              height={130}
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
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
