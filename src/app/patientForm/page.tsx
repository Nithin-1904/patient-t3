"use client";
import React from "react";
import { department, gender } from "./values";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type PatientElements } from "./types";
import { Label } from "~/shadcn/ui/label";
import { Input } from "~/shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/shadcn/ui/select";
import { RadioGroup, RadioGroupItem } from "~/shadcn/ui/radio-group";
import { Button } from "~/shadcn/ui/button";
import { api } from "~/trpc/react";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientElements>();

  const insertDetails = api.patient.create.useMutation({
    onSuccess: (data) => console.log(data),
  });

  const onSubmit: SubmitHandler<PatientElements> = async (data) => {
    console.log(data);
    await insertDetails.mutateAsync(data);
  };

  return (
    <>
      <div className="m-5 rounded-md bg-white p-16 pt-12 shadow-xl dark:bg-gray-800 dark:text-white">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-5xl font-medium text-green-500">
              {" "}
              Patient form
            </h1>
            <p className="text-xl">Fill the details to register the patient</p>
          </div>
          <div className="text-right">
            <h1 className="text-3xl font-medium text-green-500">
              Celeritaz Health Pvt Ltd
            </h1>
            <p className="text-md"> 12-45/2 Amigo Street, Darwin Colony</p>
          </div>
        </div>
        <hr className="my-3 border-[1px] border-gray-700" />
        <form
          className="flex flex-col items-center gap-y-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid w-full grid-cols-2 justify-center gap-x-16 gap-y-8 p-4">
            <div className="grid w-full items-center">
              <Label htmlFor="doc_name" className="text-xl text-green-500">
                Doctor Name
              </Label>
              <Input
                type="text"
                id="doc_name"
                placeholder="Doctor Name"
                className="text-md h-full border-[2px] border-green-500 p-3"
                {...register("doc_name")}
              />
              {errors && (
                <p className="text-red-500">{errors.doc_name?.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="department" className="text-xl text-green-500">
                Department
              </Label>
              <Select {...register("department")}>
                <SelectTrigger  className="text-md h-[60%] border-[2px] border-green-500 p-3">
                  <SelectValue
                    placeholder="Department"
                  />
                </SelectTrigger>
                <SelectContent
                 >
                  {department.map((value, index) => (
                    <SelectItem key={index} value={value.toLowerCase()}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors && (
                <p className="text-red-500">{errors.department?.message}</p>
              )}
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="patient_name" className="text-xl text-green-500">
                Patient Name
              </Label>
              <Input
                type="text"
                id="patient_name"
                placeholder="Full name"
                className="text-md h-full border-[2px] border-green-500 p-3"
                {...register("patient_name")}
              />
              {errors && (
                <p className="text-red-500">{errors.patient_name?.message}</p>
              )}
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="careof" className="text-xl text-green-500">
                Parent/Guardian Name
              </Label>
              <Input
                type="text"
                id="careof"
                placeholder="Full name"
                className="text-md h-full border-[2px] border-green-500 p-3"
                {...register("careof")}
              />
              {errors && (
                <p className="text-red-500">{errors.careof?.message}</p>
              )}
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="age" className="text-xl text-green-500">
                Age
              </Label>
              <Input
                type="number"
                id="age"
                placeholder="Age"
                className="text-md h-full border-[2px] border-green-500 p-3"
                {...register("age",{valueAsNumber:true,min:3})}
              />
              {errors && <p className="text-red-500">{errors.age?.message}</p>}
            </div>

            <div className="grid">
              <Label htmlFor="gender" className="text-xl text-green-500">
                Gender
              </Label>
              <div>
                <RadioGroup className="grid grid-cols-3">
                  {gender.map((value, index) => (
                    <>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          key={index}
                          id={value.toLowerCase()}
                          value={value.toLowerCase()}
                          {...register("gender")}
                        />
                        <Label
                          className="text-green-500"
                          htmlFor={value.toLowerCase()}
                        >
                          {value}
                        </Label>
                      </div>
                    </>
                  ))}
                </RadioGroup>
                {errors && (
                  <p className="text-red-500">{errors.gender?.message}</p>
                )}
              </div>
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="email" className="text-xl text-green-500">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="text-md h-full border-[2px] border-green-500 p-3"
                {...register("email")}
              />
              {errors && (
                <p className="text-red-500">{errors.email?.message}</p>
              )}
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="occupation" className="text-xl text-green-500">
                Occupation
              </Label>
              <Input
                type="text"
                id="occupation"
                placeholder="Occupation"
                className="text-md h-full border-[2px] border-green-500 p-3"
                {...register("occupation")}
              />
              {errors && (
                <p className="text-red-500">{errors.occupation?.message}</p>
              )}
            </div>
          </div>
          <Button className=" text-md h-full w-[40%] items-center bg-green-500 p-3 font-medium hover:bg-green-700">
            {insertDetails.isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default Page;
