import {defineSchema, defineTable} from "convex/server"
import {v} from 'convex/values'

export default defineSchema({
    url:defineTable({
        url:v.string(),
        user_id:v.string(),
        is_deleted:v.number().optional(),
        short_id:v.string()
    }).index("by_userId", ["user_id"])
    .index("by_user_url", ["user_id", "url"])
    .index("by_short_id", ["short_id"])
    ,
    url_stats:defineTable({
        url_id:v.id("url"),
        click:v.int64(),
    }).index("by_url_id",["url_id"]),
    url_click:defineTable({
        url_id:v.id("url"),
        user_agent:v.string(),
        utm_source:v.string().optional(),
        country:v.string().optional(),
        citiy:v.string().optional()
    }).index("by_url_id",["url_id"])
})