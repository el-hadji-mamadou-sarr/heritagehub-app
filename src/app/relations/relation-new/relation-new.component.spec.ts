import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationNewComponent } from './relation-new.component';

describe('RelationNewComponent', () => {
  let component: RelationNewComponent;
  let fixture: ComponentFixture<RelationNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelationNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
