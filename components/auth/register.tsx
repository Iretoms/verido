"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

type IUsers = {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

const onSubmit = async (data: IUsers) => {};
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IUsers>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[60%] flex flex-col gap-2"
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-[3rem]">Create Account✌️</h2>
          <p className="text-gray-text font-extralight text-[14px]">
            Please sign up to your personal account if you want to use all our
            premium services.
          </p>
        </div>
        <div className="">
          <label className=" text-sm font-medium text-black-light">
            Full Name:
          </label>
          <input
            {...register("fullName", { required: true })}
            className={`mt-1 text-sm text-gray-text w-full px-3 py-2 border ${
              errors.fullName ? "border-danger" : "border-light-gray"
            } rounded-md focus:outline-none focus:border-light-gray`}
          />
          {errors.fullName && (
            <p className="text-danger text-xs mt-1">This area is required</p>
          )}
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
          />
          {errors.email && (
            <p className="text-danger text-xs mt-1">This area is required</p>
          )}
        </div>
        <div className="">
          <label className=" text-sm font-medium text-black-light">
            Phone Number:
          </label>
          <input
            {...register("phoneNumber", { required: true })}
            className={`mt-1 text-sm text-gray-text  w-full px-3 py-2 border ${
              errors.phoneNumber ? "border-danger" : "border-light-gray"
            } rounded-md focus:outline-none focus:border-light-gray`}
          />
          {errors.phoneNumber && (
            <p className="text-danger text-xs mt-1">This area is required</p>
          )}
        </div>
        <div className="">
          <label className=" text-sm font-medium text-black-light">
            Password:
          </label>
          <input
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
            type="password"
            {...register("confirmPassword", { required: true })}
            className={`mt-1 text-sm text-gray-text w-full px-2 py-2 border ${
              errors.confirmPassword
                ? "border-verido-orange"
                : "border-light-gray"
            } rounded-md focus:outline-none focus:border-light-gray`}
          />
          {errors.confirmPassword && (
            <p className="text-verido-oborder-verido-orange text-xs mt-1">
              This area is required
            </p>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-verido-green mt-10   py-4 rounded-md w-full hover:bg-green-600"
        >
          Sign up
        </button>
        <div>
          <p className="font-bold text-gray-text text-sm">
            Already have an account?{" "}
            <Link
              className="text-verido-green text-sm font-bold"
              href="/signin"
            >
              Log in here
            </Link>
          </p>
        </div>
        <div>
          <Link className="text-gray-text" href="">
            Privacy Policy
          </Link>
          {""} .
          <Link className="text-gray-text" href="">
            Term of use
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
