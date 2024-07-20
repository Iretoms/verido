import React, { useState } from "react";
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
import useConsultant from "@/lib/react-query/mutations/useConsultant";
import { useRouter } from "next/navigation";



const SuspendConsultant= ({ id }:any) => {
  const { suspendConsultantMutation } = useConsultant();
  const [isLoading, setIsLoading] = useState(false);
   const router = useRouter();


  const handleSuspension = async () => {
     setIsLoading(true);
    try {
      await suspendConsultantMutation.mutateAsync(id);
      router.push("/consultants");
    } catch (error) {
      console.error("Error suspending consultant:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
          <AlertDialogTitle className="flex justify-between gap-1 font-normal text-[15px]">
            <Image
              src="/assets/icons/caution.svg"
              width={20}
              height={20}
              alt="caution"
            />
            Are you sure you want to suspend this account?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-light-gray text-sm font-light">
            This action cannot be undone. This will suspend the
            consultant&apos;s account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border border-verido-green text-verido-green">
            No
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSuspension}
            className="text-white bg-verido-orange"
            disabled={isLoading}
          >
            {isLoading ? "Suspending..." : "Yes"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SuspendConsultant;
