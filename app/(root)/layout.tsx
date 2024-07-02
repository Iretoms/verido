import React from "react";
import Sidebar from "@/components/common/Sidebar";
import Navbar from "@/components/common/Navbar";

const DahboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-body">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="p-5">
          <Navbar />
        </div>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-body p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DahboardLayout;
