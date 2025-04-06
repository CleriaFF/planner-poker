import { Injectable } from "@angular/core";
import { PlanningSessionRepository } from "../../core/ports/planning-session-repository";
import { HttpClient } from "@angular/common/http";
import { PlanningSession } from "../../core/domain/models/planning-session.interface";
import { firstValueFrom } from "rxjs";

@Injectable({providedIn: 'root'})
export class HttpPlanningSessionRepository implements PlanningSessionRepository {
    constructor(private http: HttpClient) {}

    async getSession(sessionId: string): Promise<PlanningSession> {
        const observable = this.http.get<PlanningSession>(`http:.../${sessionId}`);
        return await firstValueFrom(observable);
    }
}