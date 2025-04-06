import { Component } from '@angular/core';
import { PlanningSessionPresenter } from '../../../core/ports/planning-session-presenter';
import { PlanningSession } from '../../../core/domain/models/planning-session.interface';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements PlanningSessionPresenter {

  session: PlanningSession | null = null;

  showSession(session: PlanningSession): void {
    this.session = session;
  }
}
