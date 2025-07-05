import {NextResponse} from "next/server";
import {agents} from "@/mock-data/mock-agents";

export async function GET() {

    return NextResponse.json(
        {
            message: "Agent mock-data retrieved successfully",
            status: "success",
            data: agents
        },
        {status: 200})

}