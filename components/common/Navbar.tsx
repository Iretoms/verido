"use client";
import React from "react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import useAuth from "@/lib/react-query/mutations/useAuth";

const Navbar = () => {
  const router = useRouter();
  const {logout} = useAuth()

  const handleLogout = () => {
    logout()
  };

  return (
    <header className="bg-white rounded-lg flex items-center justify-between p-1 md:p-5">
      <div className="flex items-center gap-2 md:gap-5">
        <Image
          width={30}
          height={30}
          src="/assets/icons/add-box.svg"
          alt="documents"
        />
        <p className="font-semibold text-[14px] text-black-light">
          Do you know the latest update of 2021? 🎉{" "}
          <span className="text-verido-green font-normal">
            Our roadmap is alive for future updates.
          </span>
        </p>
        <Image
          width={20}
          height={20}
          src="/assets/icons/add-box.svg"
          alt="share"
          className="-ml-5"
        />
      </div>
      <div className="flex items-center gap-7">
        <Image src="/assets/icons/search.svg" width={20} height={20} alt="" />
        <div className="relative">
          <Image
            src="/assets/icons/notification.svg"
            width={20}
            height={20}
            alt=""
          />
          <div className="absolute top-0 right-0 bg-verido-blue rounded-full w-2 h-2"></div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src="/assets/icons/winkface.svg"
              width={30}
              height={30}
              alt="user avatar"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-bold" onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
