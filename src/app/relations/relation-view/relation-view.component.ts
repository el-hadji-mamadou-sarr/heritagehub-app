import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Relation } from '../../interfaces/relation.interface';

@Component({
  selector: 'app-relation-view',
  templateUrl: './relation-view.component.html',
  styleUrl: './relation-view.component.css',
})
export class RelationViewComponent {
  relationForm: FormGroup;
  @Input() relation!: Relation;
  constructor(private fb: FormBuilder) {
    this.relationForm = this.fb.group({
      relation_type: [{ value: '', disabled: true }, Validators.required],
      person_name: [{ value: '', disabled: true }, Validators.required],
    });
  }

  ngOnInit(): void {
    this.relationForm.patchValue({
      relation_type: this.relation.relation_type,
      person_name: `${this.relation.other_person?.first_name} ${this.relation.other_person?.last_name}`,
    });
  }
}
