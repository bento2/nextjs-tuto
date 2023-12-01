// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    // Vous pouvez ajouter d'autres fournisseurs si nécessaire
  ],
  // Ajoutez d'autres configurations selon vos besoins
  secret: process.env.AUTH_SECRET
});
