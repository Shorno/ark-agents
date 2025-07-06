"use server"
import {Agent} from "@/types/agent";
import {agents} from "@/mock-data/mock-agents";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

export interface AgentApiResponse {
    data: Agent[],
    message: string,
    status: string
}

export async function getAgents(): Promise<AgentApiResponse> {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session) redirect("/login")

    await new Promise(resolve => setTimeout(resolve, 500));
    return {
        message : "Agent mock-data retrieved successfully",
        status: "success",
        data : agents
    }
}
