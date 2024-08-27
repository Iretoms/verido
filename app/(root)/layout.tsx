import React, { Suspense } from "react";
import Sidebar from "../../components/common/Sidebar";
import Navbar from "../../components/common/Navbar";
import type { Metadata } from "next";
import { Manrope as Inter } from "next/font/google";
import "../../app/globals.css";
import { QueryProvider } from "../QueryProvider";
import { ChakraProvider } from "@chakra-ui/react";
import MobileNav from "@/components/common/MobileNav";
import { AuthenticatedUserProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verido",
  description: "An App For Business Owners",
  icons: {
    icon: "/assets/icons/favicon.svg",
  },
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <ChakraProvider>
        <QueryProvider>
          <AuthenticatedUserProvider>
            <body className={`${inter.className} flex h-screen bg-gray-body`}>
              <Sidebar />
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="p-2 lg:p-5">
                  <Navbar />
                  <MobileNav />
                </div>
                <main className="flex-1 overflow-x-hidden  overflow-y-auto bg-white lg:px-3">
                  {children}
                </main>
              </div>
            </body>
          </AuthenticatedUserProvider>
        </QueryProvider>
      </ChakraProvider>
    </html>
  );
};

export default DashboardLayout;
