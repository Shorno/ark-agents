import LoginWrapper from "@/components/login-wrapper";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Login"
};

export default function SignInPage() {
    return (
        <LoginWrapper/>
    )
}
