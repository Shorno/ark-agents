"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {signOut, useSession} from "@/lib/auth-client";
import {Skeleton} from "@/components/ui/skeleton";
import {useRouter} from "next/navigation";

export default function UserMenu() {
    const {data, isPending} = useSession();
    const router = useRouter()

    if (isPending) {
        return <Skeleton className="h-10 w-10 rounded-full"/>
    }

    if (!data?.user) {
        return (
            <Button asChild size="sm">
                <Link href="/login">Login</Link>
            </Button>
        );
    }

    const handleLogout = async () => {
        const result = await signOut()
        if (result?.data?.success) {
            router.push("/")
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="focus:outline-none"
                    aria-label="Open user menu"
                >
                    <Avatar>
                        <AvatarImage src={data.user.image || "https://github.com/shadcn.png"}/>
                        <AvatarFallback>
                            <span className={"font-semibold"}>{data?.user?.name ? data?.user?.name[0] : "U"}</span>
                        </AvatarFallback>
                    </Avatar>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="min-w-[160px]">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem asChild>
                    <Link href="/profile">
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600 focus:text-red-600"
                >
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}