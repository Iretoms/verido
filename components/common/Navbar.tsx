"use client";
import React, { useState } from "react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../../components/ui/dropdown-menu";
import useAuth from "../../lib/react-query/mutations/useAuth";
import LogoutModal from "../auth/LogoutModal";
import { useAuthenticatedUser } from "@/context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();
  const { currentUser } = useAuthenticatedUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white rounded-lg hidden lg:flex items-center justify-between p-1 md:p-5">
      <div className="flex items-center gap-2 md:gap-5">
        <Image
          width={30}
          height={30}
          src="/assets/icons/add-box.svg"
          alt="documents"
        />
        <Image
          width={20}
          height={20}
          src="/assets/icons/add-box.svg"
          alt="share"
          className="-ml-5"
        />
      </div>
      <div className="flex items-center gap-7">
        <div className="relative">
          <Image
            src="/assets/icons/notification.svg"
            width={20}
            height={20}
            alt=""
          />
          <div className="absolute top-0 right-0 bg-verido-blue rounded-full w-2 h-2"></div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image
            src="/assets/icons/Avatar.svg"
            width={30}
            height={30}
            alt="user avatar"
          />
          <p>{currentUser?.name}</p>
          <Image
          className="cursor-pointer"
            src="/assets/icons/dropdown.svg"
            width={20}
            height={20}
            alt="user avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
