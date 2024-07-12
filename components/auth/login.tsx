"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { IUsers } from "@/types";
import useAuth from "@/lib/react-query/mutations/useAuth";

const Login = () => {
  const { loginMutation } = useAuth();

  const onSubmit = async (data: IUsers) => {
    if (isSubmitting) return;
    try {
      await loginMutation.mutateAsync(data);
    } catch (error) {}
  };
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IUsers>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] md:w-[60%] flex flex-col gap-2"
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-[3rem]">Login🖐🏻</h2>
          <p className="text-gray-text font-extralight text-[14px]">
            Welcome back, please login to your account.
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
          />
          {errors.email && (
            <p className="text-danger text-xs mt-1">This area is required</p>
          )}
        </div>

        <div className="relative">
          <label className=" text-sm font-medium text-black-light">
            Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true, minLength: 6 })}
            className={`mt-1 text-sm text-gray-text  w-full px-3 py-2 border ${
              errors.password ? "border-verido-orange" : "border-light-gray"
            } rounded-md focus:outline-none focus:border-light-gray`}
          />
          <div
            className="absolute right-3 top-10 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <Image
              src={
                showPassword
                  ? "/assets/icons/eye-off.svg"
                  : "/assets/icons/eye-off.svg"
              }
              alt="toggle password visibility"
              width={15}
              height={15}
            />
          </div>
          {errors.password && (
            <p className="text-verido-orange text-xs mt-1">
              Please enter at least 6 characters
            </p>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="form-checkbox text-verido-green border-light-gray rounded"
            />
            <span className="ml-2 text-black-light text-sm">Remember me</span>
          </label>
          <Link href="/recover-password" className="text-sm  text-gray-text">
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          className={`text-white bg-verido-green mt-10    py-4 rounded-md w-full hover:bg-green-600`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
        <div>
          <p className="font-bold text-gray-text text-sm">
            Do you have an account?{" "}
            <Link
              className="text-verido-green text-sm font-bold"
              href="/signup"
            >
              Create an account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
