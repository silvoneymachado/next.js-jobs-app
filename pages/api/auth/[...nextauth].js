import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    // Passwordless / email sign in
    Providers.Email({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
          }
        },
        from: process.env.EMAIL_FROM
    }),    
  ],
  // Optional SQL or MongoDB database to persist users
  database: process.env.DATABASE_URL
}

export default (req, res) => NextAuth(req, res, options);
