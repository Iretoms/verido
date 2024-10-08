"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
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
import { Label } from "../../components/ui/label";
import CountryAdminForm from "./CountryAdminForm";
import CompanyForm from "./CompanyForm";
import PartnerForm from "./PartnerForm";
import SuperAgentForm from "./SuperAgentForm";
import { useAuthenticatedUser } from "@/context/AuthContext";

export interface ICreateUser {
  email: string;
  phoneNumber: string;
  sector: string;
  password: string;
  institution: string;
  subTimeline: string;
  countryName: string;
}


const roleHierarchy: { [key: string]: string[] } = {
  master_admin: ["countryAdmin", "partner", "company", "superAgents"],
  country_admin: ["partner", "company", "superAgents"],
  partner: ["company", "superAgents"],
  companies: ["superAgents"],
  superagents: [],
};

const AddUser = () => {
  const [open, setOpen] = React.useState(false);
  const [userType, setUserType] = React.useState("");
  const { currentUser } = useAuthenticatedUser();

  const resetModal = () => {
    setUserType("");
  };

  const selectableRoles = currentUser?.role
    ? roleHierarchy[currentUser.role]
    : [];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={"sm"} className="bg-verido-green text-verido-white">
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col sm:max-w-[425px] lg:min-h-[500px]">
        <DialogHeader>
          <DialogTitle className="text-[20px] font-semibold">
            Add User
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-1 items-start">
          <Label htmlFor="userType" className="text-[14px] font-medium">
            User Type
          </Label>
          <Select onValueChange={(value) => setUserType(value)}>
            <SelectTrigger className="w-full text-light-gray">
              <SelectValue placeholder="Select User Type" />
            </SelectTrigger>
            <SelectContent>
              {selectableRoles.includes("countryAdmin") && (
                <SelectItem
                  className="text-sm text-light-gray"
                  value="countryAdmin"
                >
                  Country Admin
                </SelectItem>
              )}
              {selectableRoles.includes("partner") && (
                <SelectItem className="text-sm text-light-gray" value="partner">
                  Partner
                </SelectItem>
              )}
              {selectableRoles.includes("company") && (
                <SelectItem className="text-sm text-light-gray" value="company">
                  Company
                </SelectItem>
              )}
              {selectableRoles.includes("superAgents") && (
                <SelectItem
                  className="text-sm text-light-gray"
                  value="superAgents"
                >
                  Super Agents
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
        {userType === "countryAdmin" && (
          <CountryAdminForm closeModal={resetModal} />
        )}
        {userType === "company" && <CompanyForm closeModal={resetModal} />}
        {userType === "partner" && <PartnerForm closeModal={resetModal} />}
        {userType === "superAgents" && (
          <SuperAgentForm closeModal={resetModal} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddUser;
