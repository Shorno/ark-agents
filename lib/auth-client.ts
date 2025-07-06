import {createAuthClient} from "better-auth/react"

export const {signIn, useSession, signOut, $Infer} = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL
})

export const signInWithGoogle = async () => {
    const data = await signIn.social({
        provider: "google",
        callbackURL: "/agents"
    })
    console.log(data)
}

