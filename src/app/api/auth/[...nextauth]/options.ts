import type { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const options:NextAuthOptions = {
    providers :[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
          }),
          CredentialsProvider({
            name: "Credentials",
            credentials : {
                username : {
                    label : "Username :",
                    type : "text",
                    placeholder: "default username"
                },
                password : {
                    label : "Password:",
                    type:"password"
                }
            },
            async authorize(credentials){
                const user = {id : "42", "name": "Wira", password : "carigawe"}

                if (credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }else {
                    return null
                }
            }
          })
    ],
    session: {
        strategy: "jwt" 
      },
      debug:true
}