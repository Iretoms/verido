"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type IUsers = {
  password: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IUsers>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const password = watch("password");
  const router = useRouter()
  const onSubmit = async (data: IUsers) => {
    router.push('/signin')

  };
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] md:w-[60%] flex flex-col gap-2"
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-[2.8rem]">Reset Password ✍🏻</h2>
          <p className="text-gray-text font-extralight text-[14px]">
            Email verification is done. Please choose another password.
          </p>
        </div>

        <div className="">
          <label className=" text-sm font-medium text-black-light">
            Password:
          </label>
          <input
            placeholder="At least 6 characters"
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className={`mt-1 text-sm text-gray-text  w-full px-3 py-2 border ${
              errors.password ? "border-verido-orange" : "border-light-gray"
            } rounded-md focus:outline-none focus:border-light-gray`}
          />
          {errors.password && (
            <p className="text-verido-orange text-xs mt-1">
              Please enter at least 6 characters
            </p>
          )}
        </div>
        <div className="">
          <label className=" text-sm font-medium text-black-light">
            Confirm Password:
          </label>
          <input
            placeholder="At least 6 characters"
            type="password"
            {...register("confirmPassword", {
              required: true,
              minLength: 6,
              validate: (value) => value === password || "Passwords must match",
            })}
            className={`mt-1 text-sm text-gray-text  w-full px-3 py-2 border ${
              errors.password ? "border-verido-orange" : "border-light-gray"
            } rounded-md focus:outline-none focus:border-light-gray`}
          />
          {errors.confirmPassword && (
            <p className="text-verido-orange text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-verido-green mt-10   py-4 rounded-md w-full hover:bg-green-600"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
