import { type UseFormRegister } from "react-hook-form";

export interface TextProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  register?:UseFormRegister<PatientElements>;
  error?:string|undefined;
}

export interface RadioProps {
  label: string;
  name: string;
  values: string[];
  register?:UseFormRegister<PatientElements>;
  error?:string|undefined;
}

export interface OptionsProps {
  label: string;
  name: string;
  values: string[];
  placeholder: string;
  register?:UseFormRegister<PatientElements>;
  error?:string|undefined;
}

export interface PatientElements{
    doc_name:string;
    department:string;
    patient_name:string;
    careof:string;
    age:number;
    gender:string;
    email:string;
    occupation:string;
}

export type ValidFieldNames = 
| "doc_name"
| "patient_name"
| "department"
| "careof"
| "age"
| "gender"
| "email"
| "occupation"

