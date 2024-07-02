import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-white rounded-lg flex items-center justify-between p-5">
      <div className="flex items-center gap-5">
        <Image
          width={30}
          height={30}
          src="/assets/icons/document.svg"
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
          src="/assets/icons/upload.svg"
          alt="share"
          className="-ml-5"
        />
      </div>
      <div className="flex items-center gap-7">
        <Image src="/assets/icons/search.svg" width={20} height={20} alt="" />
        <Image
          src="/assets/icons/notification.svg"
          width={20}
          height={20}
          alt=""
        />
        <Image src="/assets/icons/memoji.svg" width={30} height={30} alt="" />
      </div>
    </header>
  );
};

export default Navbar;
