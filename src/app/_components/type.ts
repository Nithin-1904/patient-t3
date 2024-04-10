import { z, type ZodType } from "zod";

export interface LoginElements{
    email: string;
    password: string;
}

export const LoginValidation:ZodType<LoginElements>=z.object({
    email:z.string({required_error:"Email is required"}).email(),
    password:z.string({required_error:"Password is required"}).min(8,{message:"Password is short"})
})