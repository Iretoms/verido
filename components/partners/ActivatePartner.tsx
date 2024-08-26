import React from "react";
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
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import usePartner from "@/lib/react-query/mutations/usePartner";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "../ui/loading-spinner";

const ActivatePartner = ({ id }: any) => {
  const { activatePartnerMutation } = usePartner();
  const router = useRouter();
  const isLoading = activatePartnerMutation.isPending

  const handleActivate = async () => {
    try {
      await activatePartnerMutation.mutateAsync(id);
      router.push("/companies");
    } catch (error) {}
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size={"sm"}
          className="bg-verido-green text-white px-8 py-3 text-[13px] rounded-md"
        >
          Activate
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[26rem]">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex justify-between gap-1 font-normal text-[15px]">
            <Image
              src="/assets/icons/caution.svg"
              width={20}
              height={20}
              alt="caution"
            />
            Are you sure you want to activate this account?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-light-gray text-sm font-light">
            This action will activate the partner&apos;s account.Are you sure?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border border-verido-green text-verido-green">
            No
          </AlertDialogCancel>
          <Button
          disabled={isLoading}
            onClick={handleActivate}
            className="text-white bg-verido-green"
          >
            {isLoading ? <LoadingSpinner/> : "Yes"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ActivatePartner;
