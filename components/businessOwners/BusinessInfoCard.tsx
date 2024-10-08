import React from "react";
import { AdminBusinessResponse } from "../../types/index";
import Image from "next/image";
import { Button } from "../ui/button";

import SuspendConsultant from "../consultants/SuspendConsultant";

interface BusinessInfoCardProps {
  business: AdminBusinessResponse;
}

const BusinessInfoCard: React.FC<BusinessInfoCardProps> = ({ business }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 p-2 md:p-10 w-full bg-white rounded-lg">
      <div className="flex flex-col flex-1 justify-between items-center border-r px-10 border-r-verido-border">
        <div className="flex items-center justify-center flex-col gap-2">
          <Image
            src="/assets/icons/winkface.svg"
            width={30}
            height={30}
            alt={business?.full_name}
            className="w-16 h-16 rounded-full object-contain"
          />
          <div className="flex flex-col justify-center items-center gap-1">
            <h2 className="text-lg text-center">{business?.business?.name}</h2>
            <p className="text-gray-text text-[10px] ">{business?.email}</p>
            <Button
              size={"sm"}
              className="bg-verido-green text-white px-3 py-2 text-[13px] rounded-md"
            >
              Message Business Owner
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/assets/icons/relax_sleep.svg"
            alt="relax"
            width={30}
            height={30}
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-col items-start justify-start gap-3 w-full ">
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col flex-1 gap-2 ">
            <h3 className="text-2xl">Business Owner&apos;s Informations</h3>
            <p className="text-gray-text text-[12px] w-[70%]">
              {business?.full_name}
            </p>
          </div>
          <div className="">
            <SuspendConsultant />
          </div>
        </div>
        <div className="border-t border-verido-border w-full py-4">
          <h3 className="text-2xl">About</h3>
          <p className="text-gray-text text-[12px]">{business?.full_name}</p>
        </div>
        <div className="border-t border-verido-border py-4 flex flex-col gap-5 w-full">
          <h3 className="text-2xl">Contact</h3>
          <div className="flex gap-10">
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              <li>Enterprise Name</li>
              <li>Institution</li>
              <li>Sector</li>
              <li>Currency</li>
              <li>Admin Name</li>
              <li>Email</li>
              <li>Phone</li>
              <li>Business Type</li>
            </ul>
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              <li>{business?.full_name}</li>
              <li>{business?.business?.name}</li>
              <li>{business?.business?.sector}</li>
              <li>
                {business?.business?.currencySymbol}{" "}
                {business?.business?.currency}
              </li>
              <li>{business?.full_name}</li>
              <li>{business?.email}</li>
              <li>{business?.username}</li>
              <li>{business?.business?.type}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-verido-border flex flex-col gap-5 py-4 w-full">
          <h3 className="text-2xl">Registration</h3>
          <div className="flex gap-10">
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              <li>Date Joined</li>
              <li>Status</li>
              <li>Subscription Expires</li>
            </ul>
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              <li>{business?.subscription_status?.started}</li>
              <li>{business?.subscription_status?.status}</li>
              <li>{business?.subscription_status?.expires}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoCard;
