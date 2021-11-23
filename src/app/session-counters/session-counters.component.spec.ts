import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionCountersComponent } from './session-counters.component';

describe('SessionCountersComponent', () => {
  let component: SessionCountersComponent;
  let fixture: ComponentFixture<SessionCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionCountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
