import React from "react";
import { Input } from "~/shadcn/ui/input";
import { Label } from "~/shadcn/ui/label";
import { type TextProps, ValidFieldNames } from "./types";

const Text = ({
  name,
  label,
  type,
  placeholder,
  register,
  error,
}: TextProps) => {
  return (
    <div className="grid w-full items-center">
      <Label htmlFor={name} className="text-xl text-green-500">
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        className="text-md h-full border-[2px] border-green-500 p-3"
        {...register(name)}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default Text;
