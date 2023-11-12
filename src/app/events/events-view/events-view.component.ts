import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Event } from '../../interfaces/event.interface';

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrl: './events-view.component.css',
})
export class EventsViewComponent implements OnInit {
  eventForm: FormGroup;
  @Input() event!: Event;
  constructor(private fb: FormBuilder) {
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
}
