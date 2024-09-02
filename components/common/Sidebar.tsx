"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuthenticatedUser } from "../../context/AuthContext";
import SidebarSkeleton from "./SidebarSkeleton";
import LogoutModal from "../auth/LogoutModal";
import useAuth from "@/lib/react-query/mutations/useAuth";

const Sidebar: React.FC = () => {
  const { currentUser, isLoading } = useAuthenticatedUser();
  const pathName = usePathname();
  const {  logoutMutation } = useAuth();
  const isLoggingOut = logoutMutation.status ==="pending";

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathName === href
        ? "bg-active-green rounded-lg text-verido-green"
        : "text-gray-text";
    }
    return pathName.startsWith(href)
      ? "bg-active-green rounded-lg text-verido-green"
      : "text-gray-text";
  };

  const allItems = [
    {
      path: "/",
      label: "Dashboard",
      icon: "/assets/icons/dashboard.svg",
      roles: ["master_admin", "partner", "consultant", "country_admin"],
    },
    {
      path: "/country-admin",
      label: "Country Admin",
      icon: "/assets/icons/user-star.svg",
      roles: ["master_admin", "partner", "consultant"],
    },
    {
      path: "/partners",
      label: "Partners",
      icon: "/assets/icons/user-multiple.svg",
      roles: ["master_admin", "country_admin"],
    },
    {
      path: "/companies",
      label: "Companies",
      icon: "/assets/icons/city.svg",
      roles: ["master_admin", "partner", "country_admin"],
    },
    {
      path: "/superagents",
      label: "Super Agents",
      icon: "/assets/icons/person.svg",
      roles: ["master_admin", "partner", "country_admin"],
    },
    {
      path: "/sub-agents",
      label: "Sub Agents",
      icon: "/assets/icons/user-square.svg",
      roles: ["master_admin", "partner", "consultant", "country_admin"],
    },
    {
      path: "/experts",
      label: "Expert",
      icon: "/assets/icons/user-check.svg",
      roles: ["master_admin", "partner", "consultant", "country_admin"],
    },
    {
      path: "/chats",
      label: "Chats",
      icon: "/assets/icons/chat.svg",
      roles: ["master_admin", "partner", "consultant", "country_admin"],
    },
    {
      path: "/marketplace",
      label: "Marketplace",
      icon: "/assets/icons/marketplace.svg",
      roles: ["master_admin", "partner", "consultant", "country_admin"],
    },
  ];

  const getVisibleItems = useMemo(() => {
    return allItems.filter((item) =>
      item.roles.includes(currentUser?.role ?? "")
    );
  }, [currentUser]);

  return (
    <div className="bg-sidebar-gray border-r-[1px] border-r-[#E4E5E8] w-64 hidden h-full md:hidden lg:flex flex-col justify-between">
      <div className="flex flex-col ">
        <div className="p-6">
          <Image
            src="/assets/icons/verido_logo.svg"
            alt="Verido Logo"
            width={130}
            height={50}
          />
        </div>
        <p className="p-6 text-gray-text text-[12px] font-[500]">MAIN</p>
        {isLoading ? (
          <SidebarSkeleton />
        ) : (
          <nav className="flex flex-col gap-1 -mt-3 px-2">
            {getVisibleItems.map((item: any) => (
              <Link key={item.path} href={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center relative px-6 py-3 ${isActive(
                    item.path
                  )}`}
                >
                  <Image
                    src={item.icon}
                    width={25}
                    height={25}
                    alt={item.label}
                  />
                  <span
                    className={`mx-3 font-light font-sm text-sm ${isActive(
                      item.path
                    )}`}
                  >
                    {item.label}
                  </span>
                  {isActive(item.path).includes("bg-active-green") && (
                    <div className="absolute w-[2px] h-[70%] bg-verido-green right-0 mr-1"></div>
                  )}
                </Link>
              </Link>
            ))}
          </nav>
        )}
      </div>
      <div className="flex flex-col p-5 gap-8">
        <div className="flex gap-3 font-light font-sm text-sm cursor-pointer">
          <Image
            src="/assets/icons/settings.svg"
            width={20}
            height={20}
            alt="Settings"
          />
          Settings
        </div>
        <div className="flex gap-3 font-light font-sm text-sm cursor-pointer">
          <Image
            src="/assets/icons/logout.svg"
            width={20}
            height={20}
            alt="Logout"
          />
          <LogoutModal isLoggingOut={isLoggingOut} logout={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
