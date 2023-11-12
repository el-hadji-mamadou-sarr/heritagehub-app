import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Event } from '../../interfaces/event.interface';

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrl: './events-view.component.css',
})
export class EventsViewComponent {
  @Input() events!: Event[];
  @Input() canEdit!: boolean;
  @Output() formSubmitted = new EventEmitter<boolean>();
  @Output() eventDeleted = new EventEmitter<boolean>();

  openForm: boolean = false;
  isFormSubmitted: boolean = false;
  openNewEventForm() {
    this.openForm = true;
  }
  submitForm(submitted: boolean) {
    this.isFormSubmitted = submitted;
    this.openForm = false;
    console.log(submitted)
    this.formSubmitted.emit(true);
  }

  deleteEvent(deleted:boolean){
    
    this.eventDeleted.emit(true);
  }



}
