import { db } from "@/db/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth"
import Github from "next-auth/providers/github";


const handler = NextAuth({
    //@ts-ignore
    adapter: DrizzleAdapter(db),
    providers: [
        Github({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
        }),
    ],
})

export { handler as GET, handler as POST }
