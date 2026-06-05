// "use server"

import { authClient } from "./auth-client";

export const registerUser = async (formData) => {
    const regData = Object.fromEntries(formData.entries());
    // console.log(data);
    const { data, error } = await authClient.signUp.email({
        name: regData.name, // required
        email: regData.email, // required
        password: regData.password, // required
        image: regData.photoUrl,
        callbackURL: "/",
    });
    // console.log(data, error)
}

export const loginUser = async (formData) => {
    const regData = Object.fromEntries(formData.entries());
    // console.log(data);
    const { data, error } = await authClient.signIn.email({
        email: regData.email, // required
        password: regData.password, // required
        rememberMe: true,
        callbackURL: "/"
    });
    // console.log(data, error)
}

export const logoutUser = async () => {
    await authClient.signOut();
}

export const googleLogin = async() => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
}

export const githubLogin = async() => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}