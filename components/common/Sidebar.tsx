"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthenticatedUser } from "../../context/AuthContext";

const Sidebar = () => {
  const { currentUser } = useAuthenticatedUser();
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
      path: "/business-owners",
      label: "Business Owners",
      icon: "/assets/icons/id_card.svg",
      roles: ["super_admin", "partner", "consultant"],
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
      roles: ["super_admin", "partner", "consultant"],
    },
    {
      path: "/all-users",
      label: "All Users",
      icon: "/assets/icons/group-user.svg",
      roles: ["super_admin", "partner", "consultant"],
    },
    {
      path: "/chats",
      label: "Chats",
      icon: "/assets/icons/chat.svg",
      roles: ["super_admin", "partner", "consultant"],
    },
  ];

  const visibleItems = allItems.filter((item) => {
    if (currentUser?.role === "super_admin") return true;
    if (currentUser?.role === "partner") return item.roles.includes("partner");
    if (currentUser?.role === "consultant")
      return item.roles.includes("consultant");
    return item.path !== "/consultants" && item.path !== "/experts";
  });

  return (
    <div className="bg-white w-64 hidden  h-full md:hidden lg:flex flex-col justify-between">
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
        <nav className="flex flex-col gap-1 -mt-3 px-2">
          {visibleItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center relative px-6 py-3 ${isActive(
                item.path
              )}`}
            >
              <Image src={item.icon} width={25} height={25} alt={item.label} />
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
          ))}
        </nav>
      </div>
      <div className="p-4 flex items-center">
        <Image
          src="/assets/icons/winkface.svg"
          width={40}
          height={40}
          alt="User avatar"
          className="rounded-full"
        />
        <div className="ml-3">
          <p className="text-sm font-medium">{currentUser?.name}</p>
          <p className="text-xs text-gray-500">View Profile</p>
        </div>
        <button className="ml-auto">
          <Image
            src="/assets/icons/settings.svg"
            width={20}
            height={20}
            alt="Settings"
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
