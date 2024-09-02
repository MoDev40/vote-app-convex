import { query } from "./_generated/server";

export const getCompetitor = query({
  handler: async (ctx) => {
    return await ctx.db.query("competitors").collect();
  },
});
