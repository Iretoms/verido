"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import useAuth from "../../../lib/react-query/mutations/useAuth";
import { IRecoverPassword } from "../../../types/index";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

const RecoverPasswordSuccess = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <section className="w-[90%] md:w-[80%] flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-[32px] font-bold">Password Reset Link Sent</h2>
          <p className="text-gray-text text-[14px]">
            {`We've emailed a password reset link to: emial. Check your inbox and click the link to create a new password.`}
          </p>
        </div>

        <Link href={"/reset-password"}>
          <Button
            type="submit"
            className="text-white bg-verido-green mt-10   py-2 rounded-md w-full hover:bg-green-600"
          >
            Open Email App
          </Button>
        </Link>
        <div className="mt-5 flex justify-center w-full">
          <p className="font-bold text-gray-text text-sm">
            No email?{" "}
            <Link
              className="text-verido-green text-sm font-bold"
              href="/recover-password"
            >
              Resend Link
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default RecoverPasswordSuccess;
