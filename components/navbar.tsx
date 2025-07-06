"use client";
import Link from "next/link";
import {motion, useScroll, useTransform} from "motion/react";
import {usePathname} from "next/navigation";
import UserMenu from "@/components/UserMenu";

const navItems = [
    {label: "Agents", href: "/agents"},
];



export default function Navbar() {
    const {scrollY} = useScroll();
    const pathname = usePathname()
    const activePath = pathname === "/agents"

    const navbarPadding = useTransform(scrollY, [0, 100], ["1rem", "0.5rem"]);
    const navbarMargin = useTransform(scrollY, [0, 100], ["0rem", "1rem"]);
    const navbarBorderRadius = useTransform(scrollY, [0, 100], ["0rem", "1rem"]);
    const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(10px)"]);
    const backgroundColor = useTransform(
        scrollY,
        [0, 50],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
    );
    const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.2]);
    const shadowOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);


    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-250"
            style={{
                paddingTop: navbarMargin,
                paddingLeft: navbarMargin,
                paddingRight: navbarMargin,
            }}
        >
            <motion.div
                className="mx-auto max-w-7xl relative"
                style={{
                    backdropFilter: backdropBlur,
                    backgroundColor: backgroundColor,
                    borderRadius: navbarBorderRadius,
                    padding: navbarPadding,
                    boxShadow: useTransform(
                        shadowOpacity,
                        [0, 0.1],
                        ["0 0 0 0 rgba(0, 0, 0, 0)", "0 8px 32px 0 rgba(0, 0, 0, 0.1)"]
                    ),
                }}
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.1
                }}
            >
                <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{
                        borderRadius: navbarBorderRadius,
                        border: useTransform(
                            borderOpacity,
                            [0, 0.2],
                            ["1px solid rgba(255, 255, 255, 0)", "1px solid rgba(255, 255, 255, 0.2)"]
                        ),
                    }}
                />

                <div className="flex px-4 justify-between items-center relative z-10">
                    <Link
                        href="/"
                        className={`text-xl font-semibold`}
                    >
                        Ark Agents
                    </Link>

                    <ul className="flex gap-8">
                        {navItems.map((nav) => (
                            <li key={nav.href}
                            >
                                <Link

                                    href={nav.href}
                                    className={`font-medium px-3 py-1 rounded-md transition-colors duration-200 ${activePath
                                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                                        : "hover:bg-gray-100 hover:text-blue-600"}`}
                                >
                                    {nav.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <UserMenu/>
                </div>
            </motion.div>
        </motion.nav>
    );
}