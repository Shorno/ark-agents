import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Agent } from "@/types/agent";

export interface AgentFilters {
    name: string;
    status: string[];
    category: string[];
    pricing: string;
}

interface AgentState {
    allAgents: Agent[];
    filters: AgentFilters;
}

const initialState: AgentState = {
    allAgents: [],
    filters: {
        name: "",
        status: [],
        category: [],
        pricing: "all",
    },
};

const agentSlice = createSlice({
    name: "agents",
    initialState,
    reducers: {
        setAllAgents(state, action: PayloadAction<Agent[]>) {
            state.allAgents = action.payload;
        },
        setAgentFilters(state, action: PayloadAction<AgentFilters>) {
            state.filters = action.payload;
        },
    },
});

export const { setAllAgents, setAgentFilters } = agentSlice.actions;
export default agentSlice.reducer;
