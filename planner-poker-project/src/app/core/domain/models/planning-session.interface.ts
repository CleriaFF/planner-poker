import { Participant } from "./participant.interface";
import { Task } from "./task.model";

export interface PlanningSession {
    id: string;
    title: string;
    participants: Participant[];
    tasks: Task[];
    isActive: boolean;
}