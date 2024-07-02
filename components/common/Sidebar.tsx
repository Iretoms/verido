"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  const isActive = (href: string) => {
    return pathName === href
      ? "bg-active-green rounded-lg text-verido-green"
      : "text-gray-text";
  };
  const items = [
    {
      path: "/",
      label: "Dashboard",
      icon: "/assets/icons/dashboard.svg",
    },
    {
      path: "/business-owners",
      label: "Business Owners",
      icon: "/assets/icons/id_card.svg",
    },
    {
      path: "/consultants",
      label: "Consultants",
      icon: "/assets/icons/userSet.svg",
    },
  ];
  return (
    <div className="bg-white w-64 h-full flex flex-col justify-between">
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
          {items.map((item) => (
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
          src="/assets/icons/memoji.svg"
          width={40}
          height={40}
          alt="User avatar"
          className="rounded-full"
        />
        <div className="ml-3">
          <p className="text-sm font-medium">Jane Doe</p>
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
