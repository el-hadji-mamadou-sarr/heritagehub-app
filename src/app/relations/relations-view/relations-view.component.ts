import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Relation } from '../../interfaces/relation.interface';

@Component({
  selector: 'app-relations-view',
  templateUrl: './relations-view.component.html',
  styleUrl: './relations-view.component.css',
})
export class RelationsViewComponent {
  relationForm: FormGroup;
  @Input() relation!: Relation;
  constructor(private fb: FormBuilder) {
    this.relationForm = this.fb.group({
      person_name: [{ value: '', disabled: true }, Validators.required],
      relation_type: [{ value: '', disabled: true }, Validators.required],
    });
  }

  ngOnInit(): void {
    this.relationForm.patchValue({
      person_name: `${this.relation.other_person?.first_name} ${this.relation.other_person?.last_name}`,
      relation_type: this.relation.relation_type,
    });
  }
}
