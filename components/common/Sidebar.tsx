import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
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
        <nav className="flex flex-col gap-1 -mt-3">
          <Link
            href="/"
            className="flex items-center px-6 py-2"
          >
            <Image
              src="/assets/icons/dashboard.svg"
              width={25}
              height={25}
              alt="dashboard"
            />
            <span className="mx-3 font-light text-gray-text font-sm text-sm">
              Dashboard
            </span>
          </Link>
          <Link
            href="/business-owners"
            className="flex items-center px-6 py-2"
          >
            <Image
              src="/assets/icons/id_card.svg"
              width={25}
              height={25}
              alt="dashboard"
            />
            <span className="mx-3 font-light text-gray-text font-sm text-sm">
              Business Owners
            </span>
          </Link>
          <Link
            href="/consultants"
            className="flex items-center px-6 py-2"
          >
            <Image
              src="/assets/icons/userSet.svg"
              width={25}
              height={25}
              alt="dashboard"
            />
            <span className="mx-3 font-light text-gray-text font-sm text-sm">
              Consultants
            </span>
          </Link>
        </nav>
      </div>

      <div className="">
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
    </div>
  );
};

export default Sidebar;
