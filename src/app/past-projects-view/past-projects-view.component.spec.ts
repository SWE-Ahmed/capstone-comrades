import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastProjectsViewComponent } from './past-projects-view.component';

describe('PastProjectsViewComponent', () => {
  let component: PastProjectsViewComponent;
  let fixture: ComponentFixture<PastProjectsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastProjectsViewComponent]
    });
    fixture = TestBed.createComponent(PastProjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
