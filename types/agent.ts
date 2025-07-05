export interface Agent {
    id: string,
    name: string,
    description: string,
    status: Status;
    category: string;
    pricingModel: PricingModel
}


type Status = "Active" | "Beta" | "Archived"
type PricingModel = "Subscription" | "Per‑Use" | "Free Tie"