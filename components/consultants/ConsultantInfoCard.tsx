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
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => {
      return index < rating && (
        <Image src='/assets/icons/Rate.svg' alt="rating" width={20} height={20} className="object-contain"/>
      )
    });
  };

  return (
    <div className="flex gap-5 h-full p-10 w-full bg-white rounded-lg">
      <div className="flex flex-col flex-1 justify-between items-center border-r px-10 border-r-verido-border">
        <div className="flex items-center justify-center flex-col gap-2">
          <Image
            src="/assets/icons/memoji.svg"
            width={30}
            height={30}
            alt={consultant.email}
            className="w-16 h-16 rounded-full object-contain"
          />
          <div className="flex flex-col justify-center items-center gap-1">
            <h2 className="text-lg">{consultant.username}</h2>
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
            <h3 className="text-2xl">Company&apos;s Informations</h3>
            <p className="text-gray-text text-[12px] w-[70%]">
              {consultant.email}
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
                  <AlertDialogCancel className="border border-verido-green text-verido-green">
                    No
                  </AlertDialogCancel>
                  <AlertDialogAction className="text-white bg-verido-orange">
                    Yes
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div className="border-t border-verido-border w-full py-4">
          <h3 className="text-2xl">About</h3>
          <p className="text-gray-text text-[12px]">{consultant.email}</p>
        </div>
        <div className="border-t border-verido-border py-4 flex flex-col gap-5 w-full">
          <h3 className="text-2xl">Contact</h3>
          <div className="flex gap-10">
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              <li>Enterprise Name</li>
              <li>Institution</li>
              <li>Admin Name</li>
              <li>Email</li>
              <li>Phone</li>
              <li>Date of Birth</li>
              <li>Address</li>
            </ul>
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              <li>{consultant.email}</li>
              <li>{consultant.institution}</li>
              <li>{consultant.email}</li>
              <li>{consultant.email}</li>
              <li>{consultant.email}</li>
              <li>{consultant.email}</li>
              <li>{consultant.email}</li>
            </ul>
          </div>
          <ul className="text-gray-text text-[12px] flex items-start justify-center flex-col gap-5"></ul>
        </div>
        <div className="border-t border-verido-border flex flex-col gap-5 py-4 w-full">
          <h3 className="text-2xl">Status</h3>

          <div className="flex gap-24">
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              <li>Status</li>
              <li>Rating</li>
            </ul>
            <ul className="flex flex-col gap-4 text-[12px] text-gray-text">
              <li>{consultant.email}</li>
              <li className="flex">{renderStars(consultant.rating)}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantInfoCard;
