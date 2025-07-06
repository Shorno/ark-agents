"use client";
import {useState, useEffect} from "react";
import AgentCard from "@/components/agent/agent-card";
import AgentGridSkeleton from "@/components/agent/agent-grid-skeleton";
import {AgentApiResponse} from "@/data/getAgents";
import {useDispatch, useSelector} from "react-redux";
import {setAllAgents} from "@/store/agentSlice";
import {selectFilteredAgents} from "@/store/selectors";
import type {Agent} from "@/types/agent";
import {useAgentFilters} from "@/hooks/useAgentFilters";
import NoAgentsFound from "@/components/NoAgentsFound";

export default function AgentGrid({agents}: { agents: AgentApiResponse }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const {filters} = useAgentFilters();

    useEffect(() => {
        dispatch(setAllAgents(agents.data));
    }, [agents, dispatch]);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 300);
        return () => clearTimeout(timer);
    }, [agents, filters]);

    const filteredAgents: Agent[] = useSelector(selectFilteredAgents);

    if (loading) {
        return <AgentGridSkeleton/>;
    }


    if (filteredAgents.length === 0) {
        return <NoAgentsFound />;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent, index) => (
                <AgentCard key={agent.id} agent={agent} index={index}/>
            ))}
        </div>
    );
}
