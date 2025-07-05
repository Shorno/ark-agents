"use server"
import {Agent} from "@/types/agent";
import {agents} from "@/mock-data/mock-agents";

interface AgentApiResponse {
    data: Agent[],
    message: string,
    status: string
}

//for mocking real api
// const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAgents(): Promise<AgentApiResponse> {
    await new Promise(resolve => setTimeout(resolve, 500));
    // const response = await fetch(`${API_URL}/agents`)
    return {
        message : "Agent mock-data retrieved successfully",
        status: "success",
        data : agents
    }
}
