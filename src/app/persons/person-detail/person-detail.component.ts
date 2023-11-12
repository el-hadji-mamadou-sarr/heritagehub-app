import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../auth/auth.service';
import { Event } from '../../interfaces/event.interface';
import { Relation } from '../../interfaces/relation.interface';

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
  canEdit: boolean = false;
  events:Event[]=[];
  relations:Relation[]=[];

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
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
        this.events=response.events!;
        this.relations=response.relations!;
        if (response.events?.length == 0) {
          this.noEvents = true;
        }
        if (response.relations?.length == 0) {
          this.noRelations = true;
        }
        this.checkIsAdmin(this.authService.getToken()!, response.created_by!);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  checkIsAdmin(token: string, created_by: number): any {
    try {
      const decoded = jwtDecode(token);
      if (decoded.user_id == created_by) {
        this.canEdit = true;
      }
    } catch (Error) {
      return null;
    }
  }
}
