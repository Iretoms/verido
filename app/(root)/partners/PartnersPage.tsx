"use client";

import { PartnersTable } from "../../../components/partners/PartnersTable";
import { columnsPartner } from "./column";
import React from "react";

import { usePathname } from "next/navigation";
import { usePartners } from "../../../lib/react-query/query/usePartners";

const PartnersPage = () => {
  const { data: partnerData, isFetching } = usePartners();
  const partners = partnerData || [];

  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      <div className="text-sm text-verido-green p-2 lg:p-0">
        Home <span>/</span>{" "}
        <span className="text-gray-text">{pathname.substring(1)}</span>
      </div>
      <div className="bg-verido-white p-3 md:p-6 rounded-lg flex flex-col gap-6 min-h-[42rem]">
        <PartnersTable
          data={partners}
          columns={columnsPartner}
          isFetching={isFetching}
        />
      </div>
    </div>
  );
};

export default PartnersPage;
