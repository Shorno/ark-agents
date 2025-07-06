"use client"

import { motion } from "motion/react"
import { ArrowRight, Brain, Zap, Target } from "lucide-react"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center mt-32 md:mt-0 justify-center px-4">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                        AI Agents for
                        <span className="block text-blue-600">Every Purpose</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Discover the perfect AI Agents for your needs. From content creation to data analysis, find specialized
                        models designed to excel at specific tasks.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
                >
                    <div className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                        <Brain className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                        <h3 className="font-semibold text-slate-900 mb-2">Intelligent Analysis</h3>
                        <p className="text-slate-600 text-sm">Advanced models for data processing and insights</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                        <Zap className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                        <h3 className="font-semibold text-slate-900 mb-2">Lightning Fast</h3>
                        <p className="text-slate-600 text-sm">Optimized performance for real-time applications</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                        <Target className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                        <h3 className="font-semibold text-slate-900 mb-2">Purpose-Built</h3>
                        <p className="text-slate-600 text-sm">Specialized models for specific use cases</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <Link href="/agents" prefetch={false}>
                        <motion.button
                            className="group relative inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            Explore AI Models
                            <motion.div
                                className="flex items-center"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </motion.button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                >
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 mb-1">10+</div>
                        <div className="text-slate-600 text-sm">AI Agents</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 mb-1">1k+</div>
                        <div className="text-slate-600 text-sm">Active Users</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 mb-1">99.9%</div>
                        <div className="text-slate-600 text-sm">Uptime</div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}
