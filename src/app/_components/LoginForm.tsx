"use client";
import React from "react";
import { Button } from "~/shadcn/ui/button";
import { Input } from "~/shadcn/ui/input";
import { Label } from "~/shadcn/ui/label";
import { useForm, type SubmitHandler } from "react-hook-form";
import { LoginValidation, type LoginElements } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
// import { api } from "~/trpc/server";

const LoginForm = () => {
  const router = useRouter();

  // const insertLogin = api.login.create.useMutation({
    
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginElements>({ resolver: zodResolver(LoginValidation) });

  const onSubmit: SubmitHandler<LoginElements> = (data) => {
      console.log(data);
      router.push("/dashboard")
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 grid h-full w-full grid-cols-1 gap-8"
      >
        <div className="grid w-full items-center">
          <Label htmlFor="email" className="text-xl text-green-500">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="text-md h-full border-[2px] border-green-500"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="grid w-full items-center">
          <Label htmlFor="password" className="text-xl text-green-500">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            className="text-md h-full border-[2px] border-green-500"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <Button className="text-md mt-6 bg-green-500 p-4 hover:bg-green-600">
          {/* {insertLogin.isPending ? "Logging...":"Login"} */}Login
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
