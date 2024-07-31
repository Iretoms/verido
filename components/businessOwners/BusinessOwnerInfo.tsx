import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import { useBusinessById } from "../../lib/react-query/query/useBusiness";

import BusinessInfoCard from "./BusinessInfoCard";
import { ProductTable } from "../products/ProductTable";
import { CustomerTable } from "../customers/CustomerTable";
import { SuppliersTable } from "../suppliers/SuppliersTable";
import { columns } from "../products/column";
import { columnsCustomer } from "../customers/column";
import { columnsSupplier } from "../suppliers/column";
import ChangeConsultant from "../consultants/ChangeConsultant";
import GlobalLoadingIndicator from "@/app/GlobalLoadingIndicator";
import { AdminBusinessFullResponse } from "@/types";

const BusinessOwnerInfo = () => {
  const { id } = useParams() as { id: string };

  const { data, isPending , isRefetching } = useBusinessById(id);
  const businessData = data as AdminBusinessFullResponse;
  const products = businessData?.data?.company?.products ?? [];
  const customers = businessData?.data?.associates?.customers ?? [];
  const suppliers = businessData?.data?.associates?.suppliers ?? [];

  if (isPending || isRefetching) {
    return <GlobalLoadingIndicator />;
  }

  console.log(businessData);
  return (
    <div className="w-full h-full p-2 lg:p-0">
      {businessData && (
        <div className="flex flex-col gap-10">
          <BusinessInfoCard business={businessData.response} />
          <div className="flex justify-between gap-10">
            <div className="bg-white gap-10 lg:gap-0 p-3 rounded-lg flex justify-between w-full  lg:w-[70%]">
              <div className=" rounded-lg">
                <Image
                  src="/assets/icons/Image-Button.svg"
                  width={250}
                  height={250}
                  alt="avater"
                  className="object-contain  rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-3  text-black-light w-[60%]">
                <p className="text-[18px] mb-14">Consultant</p>
                <p className="text-[26px] font-semibold">
                  {businessData.response?.consultant?.username}
                </p>
                <div className="flex flex-col items-start ">
                  <p className="font-light text-[12px] text-light-gray">
                    owner
                  </p>
                  <p className="text-[13px]">
                    {businessData.response?.full_name}
                  </p>
                </div>
                <ChangeConsultant />
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[40%]">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-[12px] font-bold">Money In</p>
                <div className="flex justify-between items-center">
                  <div className="w-1/2 h-8 relative">
                    <Image
                      src="/assets/icons/intersect.svg"
                      alt="Money In Graph"
                      width={200}
                      height={200}
                      objectFit="contain"
                    />
                  </div>
                  <div className="bg-verido-faint-blue bg-opacity-20 p-3 rounded-xl relative">
                    <div className="absolute top-3 rounded-lg bottom-1 left-0 bg-verido-green w-[2px] h-[60%]" />
                    <p className="text-sm">$12,400</p>
                    <p className="text-[11px] text-green-500 font-semibold">
                      ↗ 23.3%
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-[12px] font-bold">Money Out</p>
                <div className="flex justify-between items-center">
                  <div className="w-1/2 h-8 relative">
                    <Image
                      src="/assets/icons/intersectRed.svg"
                      alt="Money Out Graph"
                      width={200}
                      height={200}
                      objectFit="contain"
                    />
                  </div>
                  <div className="bg-verido-red bg-opacity-20 p-3 rounded-xl relative">
                    <div className="absolute top-3 rounded-lg bottom-1 left-0 bg-verido-red w-[2px] h-[60%]" />
                    <p className="text-sm">$12,400</p>
                    <p className="text-[11px] text-red-500 font-semibold">
                      ↗ 23.3%
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-[12px] font-bold">Balance</p>
                <div className="flex justify-between items-center">
                  <div className="w-1/2 h-8 relative">
                    <Image
                      src="/assets/icons/intersectBlue.svg"
                      alt="Balance Graph"
                      objectFit="contain"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="bg-verido-faint-blue bg-opacity-20 p-3 rounded-xl relative">
                    <div className="absolute top-3 rounded-lg bottom-1 left-0 bg-verido-blue w-[2px] h-[60%]" />
                    <div>
                      <p className="text-sm">$12,400</p>
                      <p className="text-[11px] text-blue-500 font-semibold">
                        ↗ 23.3%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-1 md:p-10 lg:p-10 gap-5 w-full bg-white mb-10 rounded-lg">
            <ProductTable data={products} columns={columns} />
          </div>
          <div className="flex flex-col p-1 md:p-10 lg:p-10 gap-5 w-full bg-white mb-10 rounded-lg">
            <CustomerTable data={customers} columns={columnsCustomer} />
          </div>
          <div className="flex flex-col p-1 md:p-10 lg:p-10 gap-5 w-full bg-white mb-10 rounded-lg">
            <SuppliersTable data={suppliers} columns={columnsSupplier} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessOwnerInfo;
