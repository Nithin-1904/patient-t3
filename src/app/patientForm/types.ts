import { z, type ZodType } from "zod";

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

export const PatientValidation:ZodType<PatientElements>=z.object({
  doc_name:z.string({required_error:"Name is required"}),
  patient_name:z.string({required_error:"Name is required"}),
  department:z.string(),
  careof:z.string({required_error:"Name is required"}),
  age:z.number({required_error:"Age is required"}).positive().int("Enter integer value"),
  gender:z.string(),
  email:z.string({required_error:"Email is required"}).email(),  
  occupation:z.string({required_error:"Email is required"}).max(40),  
})