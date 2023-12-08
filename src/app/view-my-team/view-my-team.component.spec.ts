import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyTeamComponent } from './view-my-team.component';

describe('ViewMyTeamComponent', () => {
  let component: ViewMyTeamComponent;
  let fixture: ComponentFixture<ViewMyTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMyTeamComponent]
    });
    fixture = TestBed.createComponent(ViewMyTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
