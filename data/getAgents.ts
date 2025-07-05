"use server"
import {Agent} from "@/types/agent";
import {agents} from "@/mock-data/mock-agents";

interface AgentApiResponse {
    data: Agent[],
    message: string,
    status: string
}

export async function getAgents(): Promise<AgentApiResponse> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
        message : "Agent mock-data retrieved successfully",
        status: "success",
        data : agents
    }
}
