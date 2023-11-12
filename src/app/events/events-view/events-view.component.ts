import { Component, Input } from '@angular/core';

import { Event } from '../../interfaces/event.interface';

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrl: './events-view.component.css',
})
export class EventsViewComponent {
  @Input() events!: Event[];
  @Input() canEdit!: boolean;
  openForm: boolean = false;

  openNewEventForm() {
    this.openForm = true;
  }
  
}
