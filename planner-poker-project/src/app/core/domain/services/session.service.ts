import { HttpPlanningSessionRepository } from "../../../adapters/secondary/http-planning-session-repository.service";
import { PlanningSessionPresenter } from "../../ports/planning-session-presenter";

export class SessionService {
    constructor( private repository: HttpPlanningSessionRepository, private presenter: PlanningSessionPresenter) {}

    async loadSession(sessionId: string): Promise<void> {
        const session = await this.repository.getSession(sessionId);
        this.presenter.showSession(session);
    }
}