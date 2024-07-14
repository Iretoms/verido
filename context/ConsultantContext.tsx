'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Consultant } from "@/types";

interface ConsultantContextProps {
  selectedConsultant: Consultant | null;
  setSelectedConsultant: (consultant: Consultant) => void;
}

const ConsultantContext = createContext<ConsultantContextProps | undefined>(
  undefined
);

export const ConsultantProvider = ({ children }: { children: ReactNode }) => {
  const [selectedConsultant, setSelectedConsultant] =
    useState<Consultant | null>(null);

  return (
    <ConsultantContext.Provider
      value={{ selectedConsultant, setSelectedConsultant }}
    >
      {children}
    </ConsultantContext.Provider>
  );
};

export const useConsultantContext = () => {
  const context = useContext(ConsultantContext);
  if (!context) {
    throw new Error(
      "useConsultantContext must be used within a ConsultantProvider"
    );
  }
  return context;
};
