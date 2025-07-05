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
    status: 'idle' | 'loading' | 'succeeded' | 'failed';

}

const initialState: AgentState = {
    allAgents: [],
    filters: {
        name: "",
        status: [],
        category: [],
        pricing: "all",
    },
    status: 'idle',
};

const agentSlice = createSlice({
    name: "agents",
    initialState,
    reducers: {
        setAllAgents(state, action: PayloadAction<Agent[]>) {
            state.allAgents = action.payload;
            state.status = 'succeeded';
        },
        setAgentFilters(state, action: PayloadAction<AgentFilters>) {
            state.filters = action.payload;
        },
        setLoading(state) {
            state.status = 'loading';
        },
        setIdle(state) {
            state.status = 'idle';
        },
    },
});
export const { setAllAgents, setAgentFilters } = agentSlice.actions;
export default agentSlice.reducer;
