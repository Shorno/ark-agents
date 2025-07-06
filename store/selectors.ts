import {RootState} from "@/lib/store";
import { createSelector } from "@reduxjs/toolkit";

const selectAllAgents = (state: RootState) => state.agents.allAgents;
const selectFilters = (state: RootState) => state.agents.filters;

export const selectFilteredAgents = createSelector(
  [selectAllAgents, selectFilters],
  (allAgents, filters) => {
    return allAgents.filter(agent => {
      const nameMatch =
        !filters.name ||
        agent.name.toLowerCase().includes(filters.name.toLowerCase()) ||
        agent.description.toLowerCase().includes(filters.name.toLowerCase());
      const statusMatch =
        !filters.status.length || filters.status.includes(agent.status);
      const categoryMatch =
        !filters.category.length || filters.category.includes(agent.category);
      const pricingMatch =
        filters.pricing === "all" || agent.pricingModel === filters.pricing;
      return nameMatch && statusMatch && categoryMatch && pricingMatch;
    });
  }
);
