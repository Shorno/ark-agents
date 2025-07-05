"use client"
import {AgentApiResponse} from "@/data/getAgents";
import AgentCard from "@/components/agent/agent-card";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setAllAgents} from "@/store/agentSlice";
import {selectFilteredAgents} from "@/store/selectors";
import {Agent} from "@/types/agent";

export default function AgentGrid({agents}: { agents: AgentApiResponse }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAllAgents(agents.data));
    }, [agents, dispatch]);

    const filteredAgents: Agent[] = useSelector(selectFilteredAgents);



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent, index) => (
                <AgentCard key={agent.id} agent={agent} index={index}/>
            ))}
        </div>

    )
}
