import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const loginRouter = createTRPCRouter({
  insert: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const existingUser = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      // If user already exists, return it
      if (existingUser) {
        return existingUser;
      }

      // If user doesn't exist, create a new user
      return ctx.db.user.create({
        data: {
          email: input.email,
          password: input.password,
        },
      });
    }),

  latestMail: publicProcedure.query (async ({ ctx }) => {
    const response = await ctx.db.user.findFirst({
      orderBy: { email: "desc" },
    });
    // Fetch and return the input email
    return response;
  }),
});
