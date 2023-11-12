import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrl: './person-detail.component.css',
})
export class PersonDetailComponent implements OnInit {
  personDetailForm: FormGroup;
  personID: number | null = null;
  noEvents: boolean = false;
  noRelations: boolean = false;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personDetailForm = this.fb.group({
      firstname: [{ value: '', disabled: true }, Validators.required],
      lastname: [{ value: '', disabled: true }, Validators.required],
      birthdate: [{ value: '', disabled: true }],
      familly_id: [{ value: '', disabled: true }],
      father_id: [{ value: '', disabled: true }],
      mother_id: [{ value: '', disabled: true }],
      genre: [{ value: '', disabled: true }],
    });
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (!param) {
      return;
    }
    this.personID = +param;
    this.personService.getPersonDetail(this.personID).subscribe({
      next: (response) => {
        console.log(response);
        this.personDetailForm.patchValue({
          firstname: response.first_name,
          lastname: response.last_name,
          birthdate: response.birth_date,
          familly_id: response.familly_id,
          father_id: response.father_id,
          mother_id: response.mother_id,
          genre: response.gender,
        });
        if (response.events?.length == 0) {
          this.noEvents = true;
        }
        if (response.relations?.length == 0) {
          this.noRelations = true;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
