import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNewComponent } from './event-new.component';

describe('EventNewComponent', () => {
  let component: EventNewComponent;
  let fixture: ComponentFixture<EventNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
