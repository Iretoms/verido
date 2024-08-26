import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { LoadingSpinner } from "../ui/loading-spinner";

interface AlertDialog {
  logout: () => void;
}

const LogoutModal = ({ logout }: AlertDialog) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <p className="cursor-pointer">Logout</p>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[40rem] flex justify-center gap-20 items-center flex-col h-[20rem]">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex justify-between gap-1 font-normal text-[20px]">
            <Image
              src="/assets/icons/caution.svg"
              width={20}
              height={20}
              alt="caution"
            />
            Are you sure you want Logout?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex gap-10">
          <AlertDialogCancel className="border border-verido-green text-verido-green w-[10rem]">
            No
          </AlertDialogCancel>
          <Button
            className="text-white bg-verido-red w-[10rem]"
            disabled={isLoading}
            onClick={logout}
          >
            {isLoading ? <LoadingSpinner/> : "Yes"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutModal;
