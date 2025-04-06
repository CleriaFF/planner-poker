import { PlanningSession } from "../domain/models/planning-session.interface";

export interface PlanningSessionPresenter {
    showSession(session: PlanningSession): void;
}