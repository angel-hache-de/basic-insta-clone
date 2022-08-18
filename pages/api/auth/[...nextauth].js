import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  //theme: {
  //    logo: "https://links.papareact.com/sq0",
  //    brandColor: "#f13207",
  //    colorScheme: "auto"
  //}
  pages: {
    signIn: "/auth/signin",
  },
//  Add more information to the session object
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("_")
        .toLocaleLowerCase();
      //Angel Hdz a angel_hdz

      session.user.uid = token.sub;
      return session;
    },
  },
});
