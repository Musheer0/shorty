import { AnyDataModel, GenericMutationCtx } from "convex/server";
import { ConvexError } from "convex/values";

export const getUserIdentity = async(ctx:GenericMutationCtx<AnyDataModel>)=>{
        const session =await ctx.auth.getUserIdentity()
         if(!session?.subject) throw new ConvexError("Unauthorized");
         return session
             
}