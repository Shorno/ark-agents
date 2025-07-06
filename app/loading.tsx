interface LoadingProps {
    text?: string
    size?: "sm" | "md" | "lg"
    fullScreen?: boolean
}

export default function Loading({ text = "Loading...", size = "md", fullScreen = true }: LoadingProps) {
    const sizeClasses = {
        sm: "w-6 h-6 border-2",
        md: "w-8 h-8 border-3",
        lg: "w-12 h-12 border-4",
    }

    const textSizeClasses = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
    }

    const containerClasses = fullScreen
        ? "fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"
        : "flex items-center justify-center p-4"

    return (
        <div className={containerClasses}>
            <div className="text-center">
                <div
                    className={`${sizeClasses[size]} border-slate-200 border-t-blue-600 rounded-full mx-auto mb-4 animate-spin`}
                />
                <p className={`text-slate-600 font-medium ${textSizeClasses[size]}`}>{text}</p>
            </div>
        </div>
    )
}
