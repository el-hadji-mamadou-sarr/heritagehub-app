import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationsViewComponent } from './relations-view.component';

describe('RelationsViewComponent', () => {
  let component: RelationsViewComponent;
  let fixture: ComponentFixture<RelationsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelationsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
