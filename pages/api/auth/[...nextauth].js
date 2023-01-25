import NextAuth from 'next-auth';
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    //github provider
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    //google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    //custom credential provider
    CredentialsProvider({
      id: 'credentials',
      name: 'plantco',
      credentials: {
        username: { label: 'username', type: 'text', },
        password: { label: 'Password', type: 'password' }
      },
          
      async authorize(credentials, req) {

        const username = credentials.username;
        const password = credentials.password

        const response = await fetch('http://localhost:3001/authenticate', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        
        console.log(response)
        if (!response.ok) {
          throw new Error(data.message);
        } 
        if (response.ok && data) {
          return data;
        }

        // Return null if user data could not be retrieved
        return null
      },
    }),
  ],  
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;  // Setting token in session
      return session;
    },
  },
  secret:  process.env.JWT_SECRET,
}

export default NextAuth(authOptions)