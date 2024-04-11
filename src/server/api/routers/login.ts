import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const loginRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const exsistingUser = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (exsistingUser) {
        return exsistingUser;
      }

      return ctx.db.user.create({
        data: {
          email: input.email,
          password: input.password,
        },
      });
    }),

    hello: publicProcedure
    .input(z.object({ email: z.string() }))
    .query(async ({ input }) => {
      // Fetch and return the input email
      return{
        greeting:input.email,
      } 
    }),
});
