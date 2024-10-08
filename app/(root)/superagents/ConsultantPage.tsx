"use client";

import { ConsultantTable } from "../../../components/consultants/ConsultantTable";
import { columnsConsultant } from "./column";
import React from "react";
import { usePathname } from "next/navigation";
import { useConsultants } from "../../../lib/react-query/query/useConsultant";



const ConsultantsPage = () => {
  const { data: consultantsData, isFetching } = useConsultants();
  const pathname = usePathname();
  const consultantData = consultantsData || [];

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="text-sm text-verido-green p-2 lg:p-0">
          Home <span>/</span>{" "}
          <span className="text-gray-text">{pathname.substring(1)}</span>
        </div>

        <div className="bg-verido-white p-3 md:p-6 rounded-lg flex flex-col gap-6 min-h-[42rem]">
          <ConsultantTable
            data={consultantData}
            columns={columnsConsultant}
            isFetching={isFetching}
          />
        </div>
      </div>
    </>
  );
};

export default ConsultantsPage;
