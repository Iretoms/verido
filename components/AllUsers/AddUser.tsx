"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { ICreatePartner } from "../../types/index";
import usePartner from "../../lib/react-query/mutations/usePartner";
import InternationalPhoneSelect from "../common/InternationalPhoneSelect";
import { LoadingSpinner } from "../ui/loading-spinner";

const AddUser = () => {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ICreatePartner>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password");
  const { createPartnerMutation } = usePartner();

  const onSubmit = async (data: ICreatePartner) => {
    if (isSubmitting) return;
    try {
      await createPartnerMutation.mutateAsync(data);
      reset();
      setOpen(false);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={"sm"} className="bg-verido-green text-verido-white">
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle className="text-[20px] font-semibold">
              Add User
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-1 items-start">
            <Label htmlFor="name" className="text-[14px] font-medium">
              User Type
            </Label>
            <Select>
              <SelectTrigger className="w-full text-light-gray">
                <SelectValue placeholder="Select User Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-sm text-light-gray" value="desc">
                  Country Admin
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="asc">
                  Partner
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="asc">
                  Company
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="asc">
                  Super Agents
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="asc">
                  Sub Agents
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <Label htmlFor="name" className="text-[14px] font-medium">
              Name
            </Label>
            <Input
              placeholder="Enter title"
              id="name"
              {...register("name", { required: "Full name is required" })}
              className={`border ${
                errors.name ? "border-red-500" : "border-verido-border"
              } px-3 py-2 focus:outline-none`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 items-start">
            <Label htmlFor="email" className="text-[14px] font-medium">
              Email address
            </Label>
            <Input
              placeholder="Enter email Address"
              id="email"
              {...register("email", { required: "Email is required" })}
              className={`border ${
                errors.email ? "border-red-500" : "border-verido-border"
              } px-3 py-2 focus:outline-none`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 items-start">
            <Label htmlFor="email" className="text-[14px] font-medium">
              Phone
            </Label>
            <InternationalPhoneSelect />

            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 items-start">
            <Label htmlFor="name" className="text-[14px] font-medium">
              Sector
            </Label>
            <Select>
              <SelectTrigger className="w-full text-light-gray">
                <SelectValue placeholder="Select Sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-sm text-light-gray" value="desc">
                  Country Admin
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="asc">
                  Partner
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="asc">
                  Company
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="asc">
                  Super Agents
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="asc">
                  Sub Agents
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <Label htmlFor="phone" className="text-[14px] font-medium">
              Institution
            </Label>
            <Input
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
              })}
              className={`border ${
                errors.phone ? "border-red-500" : "border-verido-border"
              } px-3 py-2 focus:outline-none`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 items-start">
            <Label htmlFor="name" className="text-[14px] font-medium">
              Subscription Timeline
            </Label>
            <Select>
              <SelectTrigger className="w-full text-light-gray">
                <SelectValue placeholder="Select Timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-sm text-light-gray" value="desc">
                  Yearly
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="asc">
                  Quartely
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="asc">
                  Monthly
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className={`w-full bg-button-disabled ${
                isSubmitting
                  ? "bg-button-disabled text-verido-nuetral"
                  : "bg-verido-green text-verido-white"
              } `}
              disabled={isSubmitting}
            >
              {isSubmitting ? <LoadingSpinner /> : "Add User"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUser;
