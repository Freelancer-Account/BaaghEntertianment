import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { authConfig } from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    if (!credentials?.email || !credentials?.password) {
                        return null;
                    }
                    const user = await prisma.user.findUnique({
                        where: { email: credentials.email as string }
                    });
                    
                    if (!user) {
                        console.log('Login attempt failed: User not found for email', credentials.email);
                        return null;
                    }

                    const isPasswordValid = bcrypt.compareSync(credentials.password as string, user.password);
                    
                    if (!isPasswordValid) {
                        console.log('Login attempt failed: Invalid password for email', credentials.email);
                        return null;
                    }

                    console.log('Login successful for user', user.email);
                    return { id: user.id, email: user.email, name: user.name, role: user.role };
                } catch (error) {
                    console.error('Crash inside NextAuth authorize:', error);
                    return null;
                }
            }
        })
    ],
});
