import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  competitors: defineTable({
    id: v.number(),
    name: v.string(),
    background: v.string(),
    image: v.string(),
    count: v.int64(),
  }).index("byid", ["id"]),
});
