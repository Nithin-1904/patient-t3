import { z } from "zod";
import { Patient } from "~/app/patientList/_components/columns";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const patientRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        doc_name: z.string(),
        patient_name: z.string(),
        department: z.string(),
        careof: z.string(),
        age: z.number().positive().int(),
        gender: z.string(),
        email: z.string().email(),
        occupation: z.string().max(40),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.patient.create({
        data: {
          doc_name: input.doc_name,
          department: input.department,
          patient_name: input.patient_name,
          careof: input.careof,
          age: input.age,
          gender: input.gender,
          email: input.email,
          occupation: input.occupation,
        },
      });
    }),


    getValues: publicProcedure.query(async ({ ctx }) => {
      const patients = await ctx.db.patient.findMany({
        select: {
          id: true,
          patient_name: true,
          department: true,
          // Make sure to select the correct field from your database
          // submittedAt: true, // Remove this line if submittedAt is not a field in your Patient type
        },
      });
      return patients;
    }),
});
