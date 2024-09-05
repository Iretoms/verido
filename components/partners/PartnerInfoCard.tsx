import React from "react";
import { Partner } from "../../types/index";
import Image from "next/image";
import { Button } from "../ui/button";
import SuspendPartner from "./SuspendPartner";
import ActivatePartner from "./ActivatePartner";

interface BusinessInfoCardProps {
  partners: Partner;
}

const PartnerInfoCard: React.FC<BusinessInfoCardProps> = ({ partners }) => {
  return (
    <div className="flex flex-col gap-8 w-full bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-light-green p-3 text-[16px] font-bold">
            OM
          </div>
          <div>
            <h2 className="text-[22px] font-bold">Donware</h2>
            <p className="text-gray-text text-[14px]">someemail@gmail.com</p>
            <p className="bg-light-green text-verido-green max-w-max px-3 py-1 text-[12px] rounded-[12px] mt-1">
              Active
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            size={"sm"}
            className="flex gap-2 items-center bg-transparent text-gray-text px-3 py-2 text-[13px] border rounded-md"
          >
            <Image
              src="/assets/icons/edit.svg"
              alt="edit"
              width={14}
              height={14}
            />
            Edit Profile
          </Button>
          <Button
            size={"sm"}
            className="flex gap-2 items-center bg-transparent text-gray-text px-3 py-2 text-[13px] border rounded-md"
          >
            <Image
              src="/assets/icons/send.svg"
              alt="edit"
              width={14}
              height={14}
            />
            Transfer User
          </Button>
          <Button
            size={"sm"}
            className="bg-suspend text-white px-3 py-2 text-[13px] rounded-md"
          >
            Suspend
          </Button>
        </div>
      </div>

      <div className="border rounded-[16px] overflow-hidden">
        <p className="px-6 py-4 bg-sidebar-gray font-medium border-b">
          Basic Information
        </p>
        <div className="flex px-6 py-6">
          <div className="w-1/2 flex flex-col gap-3">
            <p className="text-[14px] flex gap-2">
              <span className="font-medium">Partner Name:</span>
              <span className="font-normal">Micheal Mitchel</span>
            </p>
            <p className="text-[14px] flex gap-2">
              <span className="font-medium">Email Address:</span>
              <span className="font-normal">somemail@gmail.com</span>
            </p>
            <p className="text-[14px] flex gap-2">
              <span className="font-medium">Partner ID:</span>
              <span className="font-normal">DONWARE156</span>
            </p>
            <p className="text-[14px] flex gap-2">
              <span className="font-medium">Sector:</span>
              <span className="font-normal">Agriculture</span>
            </p>
            <p className="text-[14px] flex gap-2">
              <span className="font-medium">Institution:</span>
              <span className="font-normal">Farm produce</span>
            </p>
            <p className="text-[14px] flex gap-2">
              <span className="font-medium">Date Created:</span>
              <span className="font-normal">28/08/24</span>
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <p className="text-[14px] flex gap-2">
              <span className="font-medium">Country admin:</span>
              <span className="font-normal">Bill Sander</span>
            </p>
            <p className="text-[14px] flex gap-2">
              <span className="font-medium">Country admin ID:</span>
              <span className="font-normal">BS 123</span>
            </p>
            <p className="text-[14px] flex gap-2">
              <span className="font-medium">Subscription:</span>
              <span className="font-normal">15%</span>
            </p>
            <p className="text-[14px] flex gap-2">
              <span className="font-medium">Subscription amount:</span>
              <span className="font-normal">$3000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerInfoCard;
