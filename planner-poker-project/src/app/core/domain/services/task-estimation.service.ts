import { PlanningSession } from "../models/planning-session.interface";

export class TaskEstimationService {
    addVote(session: PlanningSession, taskId: string, participantId: number, voteValue: number) {
        const task = session.tasks.find(t => t.id === taskId);
        task?.votes.push({participantId: participantId, value: voteValue});
        return session;
    }
}