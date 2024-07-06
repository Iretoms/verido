"use client";
import React, { useState } from "react";
import { Consultant } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ConsultantInfoCardProps {
  consultant: Consultant;
}

const ConsultantInfoCard: React.FC<ConsultantInfoCardProps> = ({
  consultant,
}) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="flex gap-5 h-full p-10 w-full bg-white rounded-lg">
      <div className="flex flex-col flex-1 justify-between items-center border-r px-10 border-r-verido-border">
        <div className="flex items-center justify-center flex-col gap-2">
          <Image
            src="/assets/icons/memoji.svg"
            width={30}
            height={30}
            alt={consultant.name}
            className="w-16 h-16 rounded-full object-contain"
          />
          <div className="flex flex-col justify-center items-center gap-1">
            <h2 className="text-lg">{consultant.name}</h2>
            <p className="text-gray-text text-[10px] ">{consultant.email}</p>
            <Button
              size={"sm"}
              className="bg-verido-green text-white px-3 py-2 text-[13px] rounded-md"
            >
              Delete Consultant
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
            <h3 className="text-2xl">Company's Informations</h3>
            <p className="text-gray-text text-[12px] w-[70%]">
              {consultant.company_info}
            </p>
          </div>
          <div className="">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  size={"sm"}
                  className="bg-verido-orange text-white px-8 py-3 text-[13px] rounded-md"
                >
                  Suspend
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-[26rem]">
                <AlertDialogHeader>
                  <AlertDialogTitle className="flex  justify-between gap-1 font-normal text-[15px]">
                    <Image
                      src="/assets/icons/caution.svg"
                      width={20}
                      height={20}
                      alt="caution"
                    />
                    Are you sure you want to suspend this account?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-light-gray text-sm font-light">
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="border border-verido-green text-verido-green">No</AlertDialogCancel>
                  <AlertDialogAction className="text-white bg-verido-orange">Yes</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div className="border-t border-verido-border w-full py-4">
          <h3 className="text-2xl">About</h3>
          <p className="text-gray-text text-[12px]">{consultant.about}</p>
        </div>
        <div className="border-t border-verido-border py-4 flex flex-col gap-5 w-full">
          <h3 className="text-2xl">Contact</h3>
          <ul className="text-gray-text text-[12px] flex flex-col gap-5">
            <li>
              <span className="mr-10">Enterprise Name</span>{" "}
              {consultant.enterprise_name}
            </li>
            <li>
              <span className="mr-8">Institution</span> {consultant.institution}
            </li>
            <li>
              <span className="mr-8">Admin Name</span> {consultant.admin}
            </li>
            <li>
              <span className="mr-8">Email</span> {consultant.email}
            </li>
            <li>
              <span className="mr-8">Phone</span> {consultant.phone}
            </li>
            <li>
              <span className="mr-8">Date of Birth</span> {consultant.dob}
            </li>
            <li>
              <span className="mr-8">Address</span> {consultant.address}
            </li>
          </ul>
        </div>
        <div className="border-t border-verido-border flex flex-col gap-5 py-4 w-full">
          <h3 className="text-2xl">Status</h3>
          <p className="text-gray-text text-sm">
            Status
            <span className="ml-12">{consultant.status}</span>
          </p>
          <p className="text-gray-text text-sm">
            Rating <span className="ml-12">⭐⭐⭐⭐⭐</span>
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default ConsultantInfoCard;
