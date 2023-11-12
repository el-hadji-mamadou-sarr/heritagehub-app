import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RelationService } from '../relation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-relation-new',
  templateUrl: './relation-new.component.html',
  styleUrl: './relation-new.component.css',
})
export class RelationNewComponent {
  RELATION_TYPES = [
    'pere',
    'mere',
    'fils',
    'fille',
    'frere',
    'soeur',
    'grand-pere',
    'grand-mere',
    'petit-fils',
    'petite-fille',
    'oncle',
    'tante',
    'neveu',
    'niece',
    'ami',
    'cousin',
    'cousine',
  ];
  relationForm: FormGroup;
  personID: number | null = null;
  @Output() formSubmitted = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private relationService: RelationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.relationForm = this.fb.group({
      relation_type: ['', Validators.required],
      other_person_id: ['', Validators.required],
    });
  }

  onSubmit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (!param) {
      return;
    }
    this.personID = +param;

    const relationVal = {
      other_person_id: this.relationForm.value.other_person_id,
      relation_type: this.relationForm.value.relation_type,
      person_id: this.personID,
    };
    console.log(relationVal);
    this.relationService.createRelation(relationVal).subscribe({
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
