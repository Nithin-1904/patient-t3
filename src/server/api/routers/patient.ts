import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const patientRouter = createTRPCRouter({
//   create: publicProcedure
//     .input(
//       z.object({
//         doc_name: z.string(),
//         patient_name: z.string(),
//         department: z.string(),
//         careof: z.string(),
//         age: z.number().positive().int(),
//         gender: z.string(),
//         email: z.string().email(),
//         occupation: z.string().max(40),
//       }),
//     )
//     .mutation(async ({ ctx, input }) => {
//       // simulate a slow db call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       return ctx.db.patient.create({
//         data: {
//           doc_name: input.doc_name,
//           department: input.department,
//           patient_name: input.patient_name,
//           careof: input.careof,
//           age: input.age,
//           gender: input.gender,
//           email: input.email,
//           occupation: input.occupation,
//         },
//       });
//     }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});
