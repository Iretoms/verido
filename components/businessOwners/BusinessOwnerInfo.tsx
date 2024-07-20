import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import { useBusinessById } from "../../lib/react-query/query/useBusiness";

import BusinessInfoCard from "./BusinessInfoCard";
import { ProductTable } from "../products/ProductTable";
import { columns } from "../products/column";
import ChangeConsultant from "../consultants/ChangeConsultant";
import GlobalLoadingIndicator from "@/app/GlobalLoadingIndicator";

const BusinessOwnerInfo = () => {
  const { id } = useParams() as { id: string };

  const { data: businessData , isLoading } = useBusinessById(id);

  
  if (isLoading) {
    return <GlobalLoadingIndicator/>;
  }

  return (
    <div className="w-full h-full p-2 lg:p-0">
      {businessData && (
        <div className="flex flex-col gap-10">
          <BusinessInfoCard business={businessData} />
          <div className="flex justify-between">
            <div className="bg-white gap-10 lg:gap-0 p-3 rounded-lg flex justify-between w-full  lg:w-[60%]">
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
                  {businessData.consultant?.username}
                </p>
                <div className="flex flex-col items-start ">
                  <p className="font-light text-[12px] text-light-gray">
                    owner
                  </p>
                  <p className="text-[13px]">{businessData.full_name}</p>
                </div>
                <ChangeConsultant />
              </div>
            </div>
          </div>
          <div className="flex flex-col p-1 md:p-10 lg:p-10 gap-5 w-full bg-white mb-10 rounded-lg">
            <ProductTable data={businessData.product} columns={columns} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessOwnerInfo;
