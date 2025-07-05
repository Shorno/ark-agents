import {getAgents} from "@/data/getAgents";
import AgentCard from "@/components/agent/agent-card";


export default async function AgentGrid() {
    const agents = await getAgents()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.data.map((agent, index) => (
                <AgentCard key={agent.id} agent={agent} index={index}/>
            ))}
        </div>

    )
}
