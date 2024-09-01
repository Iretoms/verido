"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
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
import InternationalPhoneSelect from "../common/InternationalPhoneSelect";
import { LoadingSpinner } from "../ui/loading-spinner";

interface ICreateUser {
  userType: string;
  name: string;
  email: string;
  phone: string;
  sector: string;
  institution: string;
  subTimeline: string;
}

const AddUser = () => {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<ICreateUser>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      userType: "",
      name: "",
      email: "",
      phone: "",
      sector: "",
      institution: "",
      subTimeline: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (data: ICreateUser) => {
    if (isSubmitting) return;
    try {
      reset();
      setOpen(false);
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
            <Label htmlFor="userType" className="text-[14px] font-medium">
              User Type
            </Label>
            <Select onValueChange={(value) => setValue("userType", value)}>
              <SelectTrigger className="w-full text-light-gray">
                <SelectValue placeholder="Select User Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  className="text-sm text-light-gray"
                  value="countryAdmin"
                >
                  Country Admin
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="partner">
                  Partner
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="company">
                  Company
                </SelectItem>
                <SelectItem
                  className="text-sm text-light-gray"
                  value="superAgents"
                >
                  Super Agents
                </SelectItem>
                <SelectItem
                  className="text-sm text-light-gray"
                  value="subAgents"
                >
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
            <Label htmlFor="phone" className="text-[14px] font-medium">
              Phone
            </Label>
            <InternationalPhoneSelect />

            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 items-start">
            <Label htmlFor="sector" className="text-[14px] font-medium">
              Sector
            </Label>
            <Select onValueChange={(value) => setValue("sector", value)}>
              <SelectTrigger className="w-full text-light-gray">
                <SelectValue placeholder="Select Sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  className="text-sm text-light-gray"
                  value="entertainment"
                >
                  Entertainment
                </SelectItem>
                <SelectItem
                  className="text-sm text-light-gray"
                  value="business"
                >
                  Business
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="minning">
                  Minning
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="IT">
                  IT
                </SelectItem>
                <SelectItem
                  className="text-sm text-light-gray"
                  value="politics"
                >
                  Politics
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <Label htmlFor="institution" className="text-[14px] font-medium">
              Institution
            </Label>
            <Input
              id="institution"
              {...register("institution", {
                required: "Phone number is required",
              })}
              className={`border ${
                errors.institution ? "border-red-500" : "border-verido-border"
              } px-3 py-2 focus:outline-none`}
            />
            {errors.institution && (
              <p className="text-red-500 text-xs">
                {errors.institution.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 items-start">
            <Label htmlFor="subTimeline" className="text-[14px] font-medium">
              Subscription Timeline
            </Label>
            <Select onValueChange={(value) => setValue("subTimeline", value)}>
              <SelectTrigger className="w-full text-light-gray">
                <SelectValue placeholder="Select Timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-sm text-light-gray" value="yearly">
                  Yearly
                </SelectItem>
                <SelectItem
                  className="text-sm text-light-gray"
                  value="quarterly"
                >
                  Quartely
                </SelectItem>
                <SelectItem className="text-sm text-light-gray" value="monthly">
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
