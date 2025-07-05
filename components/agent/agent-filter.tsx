"use client";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Funnel } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { agents } from "@/mock-data/mock-agents";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAgentFilters } from "@/hooks/useAgentFilters";
import {useDispatch} from "react-redux";
import {setAgentFilters} from "@/store/agentSlice";
import {useEffect} from "react";

const statusOptions = Array.from(new Set(agents.map(agent => agent.status)));
const categoryOptions = Array.from(new Set(agents.map(agent => agent.category)));
const pricingModel = Array.from(new Set(agents.map(agent => agent.pricingModel)));

export default function AgentFilter() {
    const { filters, setFilters, clearAll } = useAgentFilters();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAgentFilters(filters));
    }, [filters, dispatch]);

    return (
        <Card className="w-full px-5 py-4 md:px-8 md:py-6 mb-6 mx-auto rounded-2xl">
            <div className="flex items-center justify-between mb-2 md:mb-4">
                <div className="flex items-center gap-2">
                    <Funnel className="w-5 h-5 text-muted-foreground" />
                    <span className="font-semibold text-base md:text-lg">Filters</span>
                </div>
                <Button variant="outline" size="sm" onClick={clearAll}>
                    Clear All Filters
                </Button>
            </div>

            <div className="mb-3 md:mb-6">
                <Input
                    value={filters.name}
                    onChange={event => setFilters({ name: event.target.value })}
                    placeholder="Search agents..."
                    className="rounded-lg text-sm md:text-base h-9 md:h-11"
                />
            </div>

            <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-8">
                <div>
                    <div className="font-medium mb-1 md:mb-2 text-sm md:text-base">Status</div>
                    <div className="flex flex-row md:flex-col gap-2 overflow-x-auto">
                        {statusOptions.map(status => (
                            <label key={status} className="flex items-center gap-1 min-w-max">
                                <Checkbox
                                    id={`status-${status}`}
                                    checked={filters.status.includes(status)}
                                    onCheckedChange={checked => {
                                        const next = checked
                                            ? [...filters.status, status]
                                            : filters.status.filter(x => x !== status);
                                        setFilters({ status: next });
                                    }}
                                />
                                <span className="text-sm">{status}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="font-medium mb-1 md:mb-2 text-sm md:text-base">Category</div>
                    <ScrollArea className="md:h-36">
                        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto">
                            {categoryOptions.map(category => (
                                <label key={category} className="flex items-center gap-1 min-w-max">
                                    <Checkbox
                                        id={`category-${category}`}
                                        checked={filters.category.includes(category)}
                                        onCheckedChange={checked => {
                                            const next = checked
                                                ? [...filters.category, category]
                                                : filters.category.filter(x => x !== category);
                                            setFilters({ category: next });
                                        }}
                                    />
                                    <span className="text-sm">{category}</span>
                                </label>
                            ))}
                        </div>
                    </ScrollArea>
                </div>

                <div>
                    <div className="font-medium mb-1 md:mb-2 text-sm md:text-base">Pricing Model</div>
                    <RadioGroup
                        value={filters.pricing}
                        onValueChange={v => setFilters({ pricing: v })}
                        className="flex flex-row md:flex-col gap-2 overflow-x-auto"
                    >
                        <label className="flex items-center gap-1 min-w-max">
                            <RadioGroupItem value="all" id="pricing-all" />
                            <span className="text-sm">All</span>
                        </label>
                        {pricingModel.map(model => (
                            <label key={model} className="flex items-center gap-1 min-w-max">
                                <RadioGroupItem value={model} id={`pricing-${model}`} />
                                <span className="text-sm">
                                    {model.charAt(0).toUpperCase() + model.slice(1).replace(/-/g, " ")}
                                </span>
                            </label>
                        ))}
                    </RadioGroup>
                </div>
            </div>
        </Card>
    );
}
