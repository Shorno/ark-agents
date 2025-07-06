import {Bot} from "lucide-react";
import {Suspense} from "react";
import AgentGrid from "@/components/agent/agent-grid";
import AgentGridSkeleton from "@/components/agent/agent-grid-skeleton";
import AgentFilter from "@/components/agent/agent-filter";
import {getAgents} from "@/data/getAgents";
import AgentFilterSkeleton from "@/components/AgentFilterSkeleton";


export default async function AgentPage() {
    const agents = await getAgents()

    return (
        <div className="max-w-6xl mx-auto px-4 py-32">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-2 mb-4">
                    <Bot className="w-8 h-8 text-blue-600"/>
                    <h1 className="text-3xl font-bold text-gray-900">AI Agents</h1>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover and deploy intelligent AI agents to automate your business processes
                </p>
            </div>
            <Suspense fallback={<AgentFilterSkeleton/>}>
                <AgentFilter/>
            </Suspense>
            <Suspense fallback={<AgentGridSkeleton/>}>
                <AgentGrid agents={agents}/>
            </Suspense>
        </div>
    )
}