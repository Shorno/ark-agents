import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import {NuqsAdapter} from "nuqs/adapters/next/app";
import StoreProvider from "@/app/StoreProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: `%s | Ark Agents`,
        default: "Ark Agents"
    },
    description: "Revolutionize your business operations with our cutting-edge AI solutions. From machine learning to intelligent automation, we deliver results that matter"
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Navbar/>
        <div className={"bg-gray-50 min-h-screen"}>
            <StoreProvider>
                <NuqsAdapter>
                    {children}
                </NuqsAdapter>
            </StoreProvider>
        </div>
        </body>
        </html>
    );
}
