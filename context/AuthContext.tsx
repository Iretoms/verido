'use client'
import React, { createContext, useContext, ReactNode } from "react";
import { useCurrentUser } from "../lib/react-query/query/useUser";
import { CurrentUserProfile } from "@/types";

interface AuthenticatedUserContextType {
  currentUser: CurrentUserProfile | null;
  isLoading: boolean;
  isError: boolean;
}

const AuthenticatedUserContext = createContext<
  AuthenticatedUserContextType | undefined
>(undefined);

export function AuthenticatedUserProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { data, isLoading, isError } = useCurrentUser();

  const currentUser: CurrentUserProfile | null = data ?? null;

  return (
    <AuthenticatedUserContext.Provider value={{ currentUser, isLoading, isError }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
}

export function useAuthenticatedUser() {
  const context = useContext(AuthenticatedUserContext);
  if (context === undefined) {
    throw new Error(
      "useAuthenticatedUser must be used within an AuthenticatedUserProvider"
    );
  }
  return context;
}
