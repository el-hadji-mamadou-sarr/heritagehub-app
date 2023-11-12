import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Relation } from '../../interfaces/relation.interface';

@Component({
  selector: 'app-relations-view',
  templateUrl: './relations-view.component.html',
  styleUrl: './relations-view.component.css',
})
export class RelationsViewComponent {
  @Input() relations!: Relation[];
  @Input() canEdit!: boolean;
  @Output() formSubmitted = new EventEmitter<boolean>();

  openForm: boolean = false;
  isFormSubmitted: boolean = false;
  openNewRelationForm() {
    this.openForm = true;
  }
  submitForm(submitted: boolean) {
    this.isFormSubmitted = submitted;
    this.openForm = false;
    this.formSubmitted.emit(true);
  }
}
