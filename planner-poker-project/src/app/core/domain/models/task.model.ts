import { Vote } from "./vote.model";

export interface Task {
    id: string;
    title: string;
    description: string;
    votes: Vote[];
    finalEstimate?: number;
}