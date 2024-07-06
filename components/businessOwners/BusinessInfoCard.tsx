import React from "react";
import { BusinessOwner } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";

interface BusinessInfoCardProps {
  business: BusinessOwner;
}

const BusinessInfoCard: React.FC<BusinessInfoCardProps> = ({
  business,
}) => {
  return (
    <div className="flex gap-5 p-10 w-full bg-white rounded-lg">
      <div className="flex flex-col flex-1 justify-between items-center border-r px-10 border-r-verido-border">
        <div className="flex items-center justify-center flex-col gap-2">
          <Image
            src="/assets/icons/memoji.svg"
            width={30}
            height={30}
            alt={business.name}
            className="w-16 h-16 rounded-full object-contain"
          />
          <div className="flex flex-col justify-center items-center gap-1">
            <h2 className="text-lg">{business.name}</h2>
            <p className="text-gray-text text-[10px] ">{business.email}</p>
            <Button size={'sm'} className="bg-verido-green text-white px-3 py-2 text-[13px] rounded-md">
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
            <h3 className="text-2xl">Business Owner's Informations</h3>
            <p className="text-gray-text text-[12px] w-[70%]">
              {business.company_info}
            </p>
          </div>
          <div className="">
            <Button size={'sm'} className="bg-verido-orange text-white px-8 py-3 text-[13px] rounded-md">
              Suspend
            </Button>
          </div>
        </div>
        <div className="border-t border-verido-border w-full py-4">
          <h3 className="text-2xl">About</h3>
          <p className="text-gray-text text-[12px]">{business.about}</p>
        </div>
        <div className="border-t border-verido-border py-4 flex flex-col gap-5 w-full">
          <h3 className="text-2xl">Contact</h3>
          <ul className="text-gray-text text-[12px] flex flex-col gap-5">
            <li>
              <span className="mr-10">Enterprise Name</span>{" "}
              {business.enterprise_name}
            </li>
            <li>
              <span className="mr-8">Institution</span> {business.institution}
            </li>
            <li>
              <span className="mr-8">Sector</span> {business.sector}
            </li>
            <li>
              <span className="mr-8">Currency</span> {business.currency}
            </li>
            <li>
              <span className="mr-8">Admin Name</span> {business.admin}
            </li>
            <li>
              <span className="mr-8">Email</span> {business.email}
            </li>
            <li>
              <span className="mr-8">Phone</span> {business.phone}
            </li>
            <li>
              <span className="mr-8">Date of Birth</span> {business.dob}
            </li>
            <li>
              <span className="mr-8">Address</span> {business.address}
            </li>
          </ul>
        </div>
        <div className="border-t border-verido-border flex flex-col gap-5 py-4 w-full">
          <h3 className="text-2xl">Registration</h3>
          <p className="text-gray-text text-sm">
            Date Joined
            <span className="ml-12">{business.date_joined}</span>
          </p>
          <p className="text-gray-text text-sm">
            Status
            <span className="ml-12">{business.status}</span>
          </p>
          <p className="text-gray-text text-sm">
            Business Subscription
            <span className="ml-12">{business.expires}</span>
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoCard;
