import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { PersonService } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrl: './person-create.component.css',
})
export class PersonCreateComponent {
  personCreateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private router: Router
  ) {
    this.personCreateForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate: [''],
      familly_id: [''],
      father_id: [''],
      mother_id: [''],
      genre: [''],
    });
  }

  onSubmit() {
    const personval = {
      first_name: this.personCreateForm.value.firstname,
      last_name: this.personCreateForm.value.lastname,
      birth_date: this.personCreateForm.value.birthdate
        ? this.personCreateForm.value.birthdate
        : null,
      familly_id: this.personCreateForm.value.familly_id
        ? this.personCreateForm.value.familly_id
        : null,
      father_id: this.personCreateForm.value.father_id
        ? this.personCreateForm.value.father_id
        : null,
      mother_id: this.personCreateForm.value.mother_id
        ? this.personCreateForm.value.mother_id
        : null,
      gender: this.personCreateForm.value.genre,
      child_from_marriage: null,
    };
    this.personService.createPerson(personval).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['dashboard']);
      },
      error: (error) => {
        console.log('login failed', error);
      },
    });
  }
}
