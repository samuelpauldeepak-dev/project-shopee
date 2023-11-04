import { getServerSession, NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import jsonwebtoken, { Jwt } from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import { SessionInterface, UserProfile } from "../common.type";
import { createUser, getUser } from "./actions";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      authorization: {
        params: { scope: "openid profile email" },
      },
      issuer: "https://www.linkedin.com",
      jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
      profile(profile, tokens) {
        const defaultImage =
          "https://cdn-icons-png.flaticon.com/512/174/174857.png";
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture ?? defaultImage,
        };
      },
    }),
  ],
  jwt: {
    encode: ({ secret, token }) => {
      const encodeToken = jsonwebtoken.sign(
        {
          ...token,
          iss: "grafbase",
          exp: Math.floor((Date.now() + 7 * 24 * 60 * 60 * 1000) / 1000), //one week from the login
        },
        secret
      );
      return encodeToken;
    },
    decode: async ({ secret, token }) => {
      const decodeToken = jsonwebtoken.verify(token!, secret) as JWT;
      return decodeToken;
    },
  },
  theme: {
    colorScheme: "light",
    logo: "/images/logo-black.png",
  },
  callbacks: {
    async session({ session }) {
      const email = session?.user?.email as string;
      try {
        const data = (await getUser(email)) as { user?: UserProfile };
        const newSession = {
          ...session,
          user: {
            ...session.user,
            ...data?.user,
          },
        };
        return newSession;
      } catch (error) {
        console.log("Error Retrieving User Data", error);
        return session;
      }

      return session;
    },
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        const userExist = (await getUser(user?.email as string)) as {
          user?: UserProfile;
        };

        if (!userExist.user) {
          await createUser(
            user.name as string,
            user.email as string,
            user.image as string
          );
        }
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};

export async function getCurrentUser() {
  const session = (await getServerSession(authOptions)) as SessionInterface;

  return session;
}
