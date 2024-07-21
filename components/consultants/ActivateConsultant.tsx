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

const ActivateConsultant = ({ id }: any) => {
  const { activateConsultantMutation } = useConsultant();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleActivate = async () => {
    setIsLoading(true);
    try {
      await activateConsultantMutation.mutateAsync(id);
      router.push("/consultants");
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
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
            This action will activate the consultant&apos;s account. Are you
            sure?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border border-verido-green text-verido-green">
            No
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleActivate}
            className="text-white bg-verido-green"
            disabled={isLoading}
          >
            {isLoading ? "Activating..." : "Yes"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ActivateConsultant;
