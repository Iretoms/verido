"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../lib/react-query/query/useUser";
import useAuth from "../../lib/react-query/mutations/useAuth";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";

const MobileNav = () => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const allItems = [
    {
      path: "/",
      label: "Dashboard",
      icon: "/assets/icons/dashboard.svg",
      roles: ["super_admin", "partner"],
    },
    {
      path: "/business-owners",
      label: "Business Owners",
      icon: "/assets/icons/id_card.svg",
      roles: ["super_admin", "partner"],
    },
    {
      path: "/consultants",
      label: "Consultants",
      icon: "/assets/icons/userSet.svg",
      roles: ["super_admin", "partner"],
    },
    {
      path: "/partners",
      label: "Partners",
      icon: "/assets/icons/user_partner.svg",
      roles: ["super_admin"],
    },
    {
      path: "/experts",
      label: "Expert",
      icon: "/assets/icons/user-follow.svg",
      roles: ["super_admin", "partner"],
    },
    {
      path: "/all-users",
      label: "All Users",
      icon: "/assets/icons/group-user.svg",
      roles: ["super_admin", "partner"],
    },
    {
      path: "/chats",
      label: "Chats",
      icon: "/assets/icons/chat.svg",
      roles: ["super_admin", "partner"],
    },
  ];

  const visibleItems = allItems.filter((item) => {
    if (currentUser?.role === "super_admin") return true;
    if (currentUser?.role === "partner") return item.roles.includes("partner");
    return item.path !== "/consultants" && item.path !== "/experts";
  });

  return (
    <header className="bg-white rounded-lg flex lg:hidden items-center justify-between p-3">
      <div>
        <Image
          src="/assets/icons/winkface.svg"
          width={30}
          height={30}
          alt="user avatar"
        />
      </div>
      <div className="flex justify-center items-center gap-8">
        <Image
          src="/assets/icons/search.svg"
          width={20}
          height={20}
          alt="search"
        />
        <div className="relative">
          <Image
            src="/assets/icons/notification.svg"
            width={20}
            height={20}
            alt="notification"
          />
          <div className="absolute top-0 right-0 bg-verido-blue rounded-full w-2 h-2"></div>
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/assets/icons/hamburger.svg"
            alt="menu"
            width={20}
            height={20}
          />
        </SheetTrigger>
        <SheetContent>
          <div className="p-6">
            <Image
              src="/assets/icons/verido_logo.svg"
              alt="Verido Logo"
              width={130}
              height={50}
            />
          </div>
          <div className="flex flex-col mt-10 justify-between gap-10">
            {visibleItems.map((item) => (
              <SheetClose asChild key={item.path}>
                <Link href={item.path}>
                  <div className="flex items-center p-">
                    <Image
                      src={item.icon}
                      width={25}
                      height={25}
                      alt={item.label}
                    />
                    <span className="ml-3 font-sm text-gray-text">
                      {item.label}
                    </span>
                  </div>
                </Link>
              </SheetClose>
            ))}
            <SheetFooter>
              <Button onClick={handleLogout} className="w-full bg-verido-green">
                Logout
              </Button>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNav;
