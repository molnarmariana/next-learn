import type { NextAuthConfig } from 'next-auth';
import type { Provider } from 'next-auth/providers';

export const authConfig = {
  providers: [
    // Example: Add your authentication providers here
    // GithubProvider({ clientId: process.env.GITHUB_ID!, clientSecret: process.env.GITHUB_SECRET! }),
  ],
  pages: {
    signIn: '/login',
  },
} satisfies NextAuthConfig;