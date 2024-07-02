import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Manrope as Inter } from "next/font/google";
import "../../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verido",
  description: "An App For Business Owners",
};

interface Props {
  children: React.ReactNode;
}

export const AuthLayoutWrapper = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen`}>
        <div className="hidden md:flex flex-col bg-light-green flex-1 items-center gap-10 p-14">
          <div className="flex items-start w-full">
            <Image
              width={150}
              height={100}
              className="object-contain"
              src="/assets/icons/verido_logo.svg"
              alt="logo"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              width={550}
              height={200}
              className="object-contain"
              src="/assets/icons/auth_card.svg"
              alt="auth-image"
            />
          </div>

          <div className="flex justify-center items-center flex-col -mt-14 gap-3">
            <h1 className="text-verido-green text-2xl">
              Very good works are waiting for you 🤞
            </h1>
            <p className="text-gray-text text-md text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
          </div>
        </div>
        <div className="flex-1 flex-col flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
};
