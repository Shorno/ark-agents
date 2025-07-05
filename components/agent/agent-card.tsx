"use client"

import type React from "react"
import {motion} from "motion/react"
import {Bot, Zap, Star, Clock, Archive} from "lucide-react"
import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import type {Agent} from "@/types/agent"

interface AgentCardProps {
    agent: Agent
    index: number
}

const statusConfig = {
    Active: {
        color: "bg-emerald-500",
        text: "text-emerald-700",
        icon: Zap,
    },
    Beta: {
        color: "bg-amber-500",
        text: "text-amber-700",
        icon: Clock,
    },
    Archived: {
        color: "bg-gray-400",
        text: "text-gray-600",
        icon: Archive,
    },
}

const categoryColors = {
    "Customer Service": "bg-blue-500",
    Operations: "bg-green-500",
    Marketing: "bg-pink-500",
    "Data Analysis": "bg-indigo-500",
    Development: "bg-violet-500",
    "Human Resources": "bg-emerald-500",
    Finance: "bg-yellow-500",
    Legal: "bg-slate-500",
}

const pricingStyles = {
    Subscription: "bg-blue-50 text-blue-700 border-blue-200",
    "Per-Use": "bg-purple-50 text-purple-700 border-purple-200",
    "Free Tier": "bg-green-50 text-green-700 border-green-200",
}

export default function AgentCard({agent, index}: AgentCardProps) {
    const statusInfo = statusConfig[agent.status]
    const StatusIcon = statusInfo.icon
    const categoryColor = categoryColors[agent.category as keyof typeof categoryColors] || "bg-gray-500"
    const pricingStyle = pricingStyles[agent.pricingModel as keyof typeof pricingStyles] || "bg-gray-50 text-gray-700 border-gray-200"

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{
                duration: 0.4,
                delay: index * 0.05,
            }}
            whileHover={{y: -4}}
            className="transition-all duration-200"
        >
            <Card className="h-full shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 ${categoryColor} rounded-xl flex items-center justify-center`}>
                            <Bot className="w-6 h-6 text-white"/>
                        </div>

                        <div className="flex items-center space-x-1">
                            {/*<div className={`w-2 h-2 ${statusInfo.color} rounded-full`}/>*/}
                            <StatusIcon className={`h-3 w-3 mr-1 ${statusInfo.text}`} />
                            <span className={`text-xs font-medium ${statusInfo.text}`}>{agent.status}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>

                        <p className="text-sm text-gray-600 leading-relaxed">{agent.description}</p>

                        <div className="flex items-center justify-between pt-2">
                            <span
                                className="text-xs font-medium text-gray-500 uppercase tracking-wide">{agent.category}</span>
                            <Badge variant="outline" className={`${pricingStyle} border font-semibold`}>
                                {agent.pricingModel}
                            </Badge>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
