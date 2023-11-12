import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../../interfaces/event.interface';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrl: './event-view.component.css',
})
export class EventViewComponent implements OnInit {
  eventForm: FormGroup;
  @Input() event!: Event;
  @Output() eventDeleted = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private eventService :EventService) {
    this.eventForm = this.fb.group({
      event_type: [{ value: '', disabled: true }, Validators.required],
      event_name: [{ value: '', disabled: true }, Validators.required],
    });
  }

  ngOnInit(): void {
    this.eventForm.patchValue({
      event_type: this.event.event_type,
      event_name: this.event.event_name,
    });
  }

  deleteEvent(){
    this.eventService.deleteEvent(this.event.id!).subscribe({
      next: (response) => {
        console.log(response);
        this.eventDeleted.emit(true);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
