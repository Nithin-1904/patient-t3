import React from "react";
import { Label } from "~/shadcn/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/shadcn/ui/select";
import { type OptionsProps } from "./types";

const Options = ({ label, name, values, placeholder,error }: OptionsProps) => {
  return (
    <>
      <div>
        <Label htmlFor={name} className="text-xl text-green-500">
          {label}
        </Label>
        <Select>
          <SelectTrigger className="text-md h-[60%] border-[2px] border-green-500 p-3">
            <SelectValue placeholder={placeholder} className="text-slate-100" />
          </SelectTrigger>
          <SelectContent>
            {values.map((value, index) => (
              <SelectItem key={index} value={value.toLowerCase()}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
    </>
  );
};

export default Options;
