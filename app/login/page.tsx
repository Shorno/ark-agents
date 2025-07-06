"use client"

import {motion} from "motion/react"
import {ArrowLeft} from "lucide-react"
import Link from "next/link"
import {signInWithGoogle} from "@/lib/auth-client";

export default function SignInPage() {
    const handleGoogleSignIn = async () => {
       const response =  await signInWithGoogle()
        console.log(response)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5}}
                    className="mb-8"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4"/>
                        Back to home
                    </Link>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 shadow-xl"
                >
                    <div className="text-center mb-8">
                        <motion.h1
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.1}}
                            className="text-3xl font-bold text-slate-900 mb-2"
                        >
                            Arc Agents
                        </motion.h1>
                        <motion.p
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="text-slate-600"
                        >
                            Sign in to access your AI models
                        </motion.p>
                    </div>

                    <motion.button
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.3}}
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg group"
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        <span>Continue with Google</span>
                        <motion.div
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{x: -5}}
                            whileHover={{x: 0}}
                        >
                            →
                        </motion.div>
                    </motion.button>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.6, delay: 0.4}}
                        className="my-8 text-center"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-slate-500">Secure authentication</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.5}}
                        className="text-center"
                    >
                        <p className="text-sm text-slate-500 leading-relaxed">
                            By signing in, you agree to our{" "}
                            <Link href="/#" className="text-blue-600 hover:text-blue-700 underline">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/#" className="text-blue-600 hover:text-blue-700 underline">
                                Privacy Policy
                            </Link>
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.6}}
                    className="mt-8 text-center"
                >
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                        <p className="text-sm text-blue-800">
                            <span className="font-semibold">New to our platform?</span> Your account will be created
                            automatically
                            when you sign in with Google.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
