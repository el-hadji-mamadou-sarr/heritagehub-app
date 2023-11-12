import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Relation } from '../../interfaces/relation.interface';
import { RelationService } from '../relation.service';

@Component({
  selector: 'app-relation-view',
  templateUrl: './relation-view.component.html',
  styleUrl: './relation-view.component.css',
})
export class RelationViewComponent {
  relationForm: FormGroup;
  @Input() relation!: Relation;
  @Output() relationDeleted = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder, private relationService:RelationService) {
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


  deleteRelation(){
    this.relationService.deleteRelation(this.relation.id!).subscribe({
      next: (response) => {
        
        this.relationDeleted.emit(true);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
