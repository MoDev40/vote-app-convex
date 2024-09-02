import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  competitors: defineTable({
    name: v.string(),
    background: v.optional(v.string()),
    image: v.string(),
    count: v.number(),
  }).index("by_name", ["name"]),
});
