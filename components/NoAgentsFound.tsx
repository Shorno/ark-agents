import { Ghost } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function NoAgentsFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px]">
            <Card className="w-full mx-auto shadow-md border-2 border-dashed border-gray-200 bg-gray-50">
                <CardContent className="flex flex-col items-center py-12">
                    <Ghost className="w-16 h-16 text-gray-400 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-700 mb-2">No agents found</h2>
                    <p className="text-gray-500 text-center">
                        Try adjusting your search or filter criteria.<br />
                        We couldn't find any agents matching your selection.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
