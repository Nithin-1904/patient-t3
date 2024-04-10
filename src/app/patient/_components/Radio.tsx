import React from "react";
import { Label } from "~/shadcn/ui/label";
import { RadioGroup, RadioGroupItem } from "~/shadcn/ui/radio-group";
import { type RadioProps } from "./types";



const Radio = ({ label, name, values,error }: RadioProps) => {
  return (
    <>
      <div className="grid">
        <Label htmlFor={name} className="text-xl text-green-500">
          {label}
        </Label>
        <div>
          <RadioGroup className="grid grid-cols-3">
            {values.map((value, index) => (
              <>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    key={index}
                    id={value.toLowerCase()}
                    value={value.toLowerCase()}
                  />
                  <Label className="text-green-500" htmlFor={value.toLowerCase()}>{value}</Label>
                </div>
              </>
            ))}
          </RadioGroup>
          {error && <p className="text-red-500">{error.message}</p>}
        </div>
      </div>
    </>
  );
};

export default Radio;
