import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import { useBusinessById } from "@/lib/react-query/query/useBusiness";

import BusinessInfoCard from "./BusinessInfoCard";
import { ProductTable } from "../products/ProductTable";
import { columns } from "../products/column";

const BusinessOwnerInfo = () => {
  const { id } = useParams() as { id: string };

  const { data: business, isLoading, isError } = useBusinessById(Number(id));

  return (
    <div className="w-full h-full">
      {business && (
        <div className="flex flex-col gap-10">
          <BusinessInfoCard business={business} />
          <div className="flex justify-between">
            <div className="bg-white p-3 rounded-lg flex justify-between w-[60%]">
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
                  {business.enterprise_name}
                </p>
                <div className="flex flex-col items-start ">
                  <p className="font-light text-[12px] text-light-gray">
                    owner
                  </p>
                  <p className="text-[13px]">{business.admin}</p>
                </div>
                <Button
                  size={"sm"}
                  className="rounded-2xl bg-verido-green textt-white text-[13px] w-[30%] mt-5"
                >
                  Assign/Change
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-10 w-full bg-white mb-10 rounded-lg">
            <ProductTable data={business.products} columns={columns} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessOwnerInfo;
