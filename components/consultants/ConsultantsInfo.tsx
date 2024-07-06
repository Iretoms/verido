import React from "react";
import { useParams } from "next/navigation";
import { useConsultantById } from "@/lib/react-query/query/useConsultant";
import ConsultantInfoCard from "./ConsultantInfoCard";
import BusinessToConsultantCard from "./BusinessToConsultantCard";

const ConsultantsInfo = () => {
  const { id } = useParams() as { id: string };

  const {
    data: consultant,
    isLoading,
    isError,
  } = useConsultantById(Number(id));

  return (
    <div className="w-full h-full">
      {consultant && (
        <>
          <ConsultantInfoCard consultant={consultant} />
          <BusinessToConsultantCard consultant = {consultant}/>
        </>
      )}
    </div>
  );
};

export default ConsultantsInfo;
