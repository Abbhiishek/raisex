import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import { db } from "@/db/schema"
import { DrizzleAdapter } from "@auth/drizzle-adapter"


export const { handlers, auth, signIn, signOut } = NextAuth({
    //@ts-ignore
    adapter: DrizzleAdapter(db),
    providers: [
        Github({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
        }),
    ],
})