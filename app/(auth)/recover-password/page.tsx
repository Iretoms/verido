"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import useAuth from "../../../lib/react-query/mutations/useAuth";
import { IRecoverPassword } from "@/types";
// import { Button } from "@/components/ui/button";

const RecoverPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IRecoverPassword>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      email: "",
    },
  });
  const { recoverPasswordMutation } = useAuth();
  const onSubmit = async (data: IRecoverPassword) => {
    if (isSubmitting) return;
    try {
      await recoverPasswordMutation.mutateAsync(data);
    } catch (error) {}
  };
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] md:w-[60%] flex flex-col gap-2"
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-[2.5rem]">Recover Password 👀</h2>
          <p className="text-gray-text font-extralight text-[14px]">
            We’ll e-mail you instructions on how to reset your password.
          </p>
        </div>

        <div className="">
          <label className=" text-sm font-medium text-black-light">
            Email:
          </label>
          <input
            {...register("email", { required: true })}
            className={`mt-1 text-sm text-gray-text  w-full px-3 py-2 border ${
              errors.email ? "border-danger" : "border-light-gray"
            } rounded-md focus:outline-none focus:border-light-gray`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-danger text-xs mt-1">This area is required</p>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-verido-green mt-10   py-4 rounded-md w-full hover:bg-green-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : " Recover Password"}
        </button>
        <div>
          <p className="font-bold text-gray-text text-sm">
            Go back to{" "}
            <Link
              className="text-verido-green text-sm font-bold"
              href="/signin"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RecoverPassword;
