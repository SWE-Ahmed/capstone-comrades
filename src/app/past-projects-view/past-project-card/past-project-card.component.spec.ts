import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastProjectCardComponent } from './past-project-card.component';

describe('PastProjectCardComponent', () => {
  let component: PastProjectCardComponent;
  let fixture: ComponentFixture<PastProjectCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastProjectCardComponent]
    });
    fixture = TestBed.createComponent(PastProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
