import {Button} from "@/components/ui/button";
import Link from "next/link";

const navItems = [
    {label: "Agents", href: "/agents"},
    {label: "About", href: "/about"}
]
export default function Navbar() {
    return (
        <nav className={"w-full py-2 fixed z-50"}>
            <div className={"flex justify-between items-center mx-auto max-w-7xl backdrop-blur-sm shadow px-4 py-2  rounded-sm"}>
                <Link href={"/"} className={"text-xl font-semibold"}>Ark Agents</Link>
                <ul className={"flex gap-10"}>
                    {navItems.map((nav) => (
                        <li key={nav.href}>
                            <Link href={nav.href} className="hover:underline">{nav.label}</Link>
                        </li>
                    ))}
                </ul>
                <Button size={"sm"}>
                    Login
                </Button>
            </div>
        </nav>
    )
}