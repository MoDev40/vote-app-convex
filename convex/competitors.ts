import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getCompetitor = query({
  handler: async (ctx) => {
    return await ctx.db.query("competitors").collect();
  },
});

export const updateCount = mutation({
  args: { id: v.id("competitors"), vote: v.number() },
  handler: async (ctx, args) => {
    const { id, vote } = args;

    const competitor = await ctx.db.get(id);

    if (!competitor) {
      throw new Error("Not found");
    }

    const { _id } = competitor;

    const count = competitor.count + vote;

    await ctx.db.patch(_id, { count });
  },
});
