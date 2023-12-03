import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSubmitComponent } from './signup-submit.component';

describe('SignupSubmitComponent', () => {
  let component: SignupSubmitComponent;
  let fixture: ComponentFixture<SignupSubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupSubmitComponent]
    });
    fixture = TestBed.createComponent(SignupSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
