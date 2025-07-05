import { Card, CardContent } from "@/components/ui/card"

export default function AgentCardSkeleton() {
    return (
        <Card className="h-full shadow-sm border border-gray-100">
            <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-xl animate-pulse" />
                    <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-gray-200 rounded-full animate-pulse" />
                        <div className="w-12 h-3 bg-gray-200 rounded animate-pulse" />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="w-3/4 h-5 bg-gray-200 rounded animate-pulse" />

                    <div className="space-y-2">
                        <div className="w-full h-3 bg-gray-200 rounded animate-pulse" />
                        <div className="w-full h-3 bg-gray-200 rounded animate-pulse" />
                        <div className="w-2/3 h-3 bg-gray-200 rounded animate-pulse" />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <div className="w-20 h-3 bg-gray-200 rounded animate-pulse" />
                        <div className="w-16 h-6 bg-gray-200 rounded-full animate-pulse" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
