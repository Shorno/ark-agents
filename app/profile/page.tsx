import ProfileWrapper from "@/components/profile-wrapper";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Profile"
};

export default function ProfilePage(){
    return (
        <ProfileWrapper/>
    )
}