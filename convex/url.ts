import { ConvexError, v } from "convex/values"
import {nanoid} from "nanoid"
import {mutation} from "./_generated/server"
import { getUserIdentity } from "./get_user_identity"
export const createUrl = mutation({
    args:{
        url:v.string()
    },
    handler:async(ctx,input)=>{
        const session =await getUserIdentity(ctx);
        const url = await ctx.db.insert("url",{
            url:input.url,
            user_id:session.subject,
            short_id:nanoid(7),
            is_deleted:undefined
        });
        return url 
    }
})