import { Card } from "@/components/ui/card";
import { Funnel } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AgentFilterSkeleton() {
    return (
        <Card className="w-full px-5 py-4 md:px-8 md:py-6 mb-6 mx-auto rounded-2xl animate-pulse">
            <div className="flex items-center justify-between mb-2 md:mb-4">
                <div className="flex items-center gap-2">
                    <Funnel className="w-5 h-5 text-muted-foreground" />
                    <span className="font-semibold text-base md:text-lg">
            <Skeleton className="h-5 w-20" />
          </span>
                </div>
                <Skeleton className="h-8 w-28 rounded-md" />
            </div>

            <div className="mb-3 md:mb-6">
                <Skeleton className="h-11 w-full rounded-lg" />
            </div>

            <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-8">
                {/* Status */}
                <div>
                    <div className="font-medium mb-1 md:mb-2 text-sm md:text-base">
                        <Skeleton className="h-4 w-16" />
                    </div>
                    <div className="flex flex-row md:flex-col gap-2 overflow-x-auto">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center gap-1 min-w-max">
                                <Skeleton className="h-4 w-4 rounded" />
                                <Skeleton className="h-4 w-12" />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="font-medium mb-1 md:mb-2 text-sm md:text-base">
                        <Skeleton className="h-4 w-20" />
                    </div>
                    <div className="flex flex-row md:flex-col gap-2 overflow-x-auto">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-center gap-1 min-w-max">
                                <Skeleton className="h-4 w-4 rounded" />
                                <Skeleton className="h-4 w-16" />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Pricing Model */}
                <div>
                    <div className="font-medium mb-1 md:mb-2 text-sm md:text-base">
                        <Skeleton className="h-4 w-24" />
                    </div>
                    <div className="flex flex-row md:flex-col gap-2 overflow-x-auto">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center gap-1 min-w-max">
                                <Skeleton className="h-4 w-4 rounded-full" />
                                <Skeleton className="h-4 w-14" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}
