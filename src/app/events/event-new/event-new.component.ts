import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrl: './event-new.component.css',
})
export class EventNewComponent {
  EVENT_TYPES = [
    'naissance',
    'enfance',
    'education',
    'relations',
    'emploi',
    'mariage',
    'parentalite',
    'demenagement',
    'pertes',
    'realisations',
    'sante',
    'vieillissement',
    'retraite',
    'mort',
    'annivairsaire',
  ];
  eventForm: FormGroup;
  personID: number | null = null;
  @Output() formSubmitted = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.eventForm = this.fb.group({
      event_type: ['', Validators.required],
      event_name: ['', Validators.required],
    });
  }

  onSubmit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (!param) {
      return;
    }
    this.personID = +param;

    const eventVal = {
      event_name: this.eventForm.value.event_name,
      event_type: this.eventForm.value.event_type,
      person_id: this.personID,
    };
    console.log(eventVal);
    this.eventService.createEvent(eventVal).subscribe({
      next: (response) => {
        console.log(response);

        this.formSubmitted.emit(true);
      },
      error: (error) => {
        console.log('login failed', error);
      },
    });
  }
}
