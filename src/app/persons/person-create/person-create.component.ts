import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrl: './person-create.component.css',
})
export class PersonCreateComponent {
  personCreateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personCreateForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate: ['', Validators.required],
      familly_id: ['', Validators.required],
      father_id: ['', Validators.required],
      mother_id: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }
}
