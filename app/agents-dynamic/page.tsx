import {Bot} from "lucide-react";
import {Suspense} from "react";
import AgentGrid from "@/components/agent/agent-grid";
import AgentGridSkeleton from "@/components/agent/agent-grid-skeleton";


export const dynamic = 'force-dynamic'

export default async function DynamicAgentPage() {
    return (
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-2 mb-4">
                    <Bot className="w-8 h-8 text-blue-600"/>
                    <h1 className="text-3xl font-bold text-gray-900">Dynamic Ai Agents Page to Mock Loading UI</h1>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover and deploy intelligent AI agents to automate your business processes
                </p>
            </div>
            <Suspense fallback={<AgentGridSkeleton/>}>
                <AgentGrid/>
            </Suspense>
        </div>
    )
}