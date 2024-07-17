import React from "react";
import Sidebar from "@/components/common/Sidebar";
import Navbar from "@/components/common/Navbar";
import type { Metadata } from "next";
import { Manrope as Inter } from "next/font/google";
import "../../app/globals.css";
import { QueryProvider } from "@/app/QueryProvider";

import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verido",
  description: "An App For Business Owners",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <ChakraProvider>
        <QueryProvider>
          <body className={`${inter.className} flex h-screen bg-gray-body`}>
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="p-5">
                <Navbar />
              </div>
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-body px-6">
                {children}
              </main>
            </div>
          </body>
        </QueryProvider>xx
      </ChakraProvider>
    </html>
  );
};

export default DashboardLayout;
