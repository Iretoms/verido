"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuthenticatedUser } from "../../context/AuthContext";
import SidebarSkeleton from "./SidebarSkeleton";

const Sidebar: React.FC = () => {
  const { currentUser, isLoading } = useAuthenticatedUser();
  const pathName = usePathname();

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
      roles: ["super_admin", "partner", "consultant"],
    },
    {
      path: "/country-admin",
      label: "Country Admin",
      icon: "/assets/icons/user-star.svg",
      roles: ["super_admin", "partner", "consultant"],
    },
    {
      path: "/partners",
      label: "Partners",
      icon: "/assets/icons/user-multiple.svg",
      roles: ["super_admin", "partner", "consultant"],
    },
    {
      path: "/companies",
      label: "Companies",
      icon: "/assets/icons/city.svg",
      roles: ["super_admin"],
    },
    {
      path: "/superagents",
      label: "Super Agents",
      icon: "/assets/icons/person.svg",
      roles: ["super_admin", "partner"],
    },
    {
      path: "/sub-agents",
      label: "Sub Agents",
      icon: "/assets/icons/user-square.svg",
      roles: ["super_admin", "partner", "consultant"],
    },
    {
      path: "/experts",
      label: "Expert",
      icon: "/assets/icons/user-check.svg",
      roles: ["super_admin", "partner", "consultant"],
    },
    {
      path: "/chats",
      label: "Chats",
      icon: "/assets/icons/chat.svg",
      roles: ["super_admin", "partner", "consultant"],
    },
    {
      path: "/marketplace",
      label: "Marketplace",
      icon: "/assets/icons/marketplace.svg",
      roles: ["super_admin", "partner", "consultant"],
    },
  ];

  const getVisibleItems = useMemo(() => {
    return allItems.filter((item) =>
      item.roles.includes(currentUser?.role ?? "")
    );
  }, [currentUser]);


  return (
    <div className="bg-white w-64 hidden h-full md:hidden lg:flex flex-col justify-between">
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
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
