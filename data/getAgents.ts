"use server"
import {Agent} from "@/types/agent";

interface AgentApiResponse {
    data: Agent[],
    message: string,
    status: string
}

export async function getAgents(): Promise<AgentApiResponse> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const response = await fetch("http://localhost:3000/api/agents")
    return await response.json()
}