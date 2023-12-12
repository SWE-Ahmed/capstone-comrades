import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaritemComponent } from './sidebaritem.component';

describe('SidebaritemComponent', () => {
  let component: SidebaritemComponent;
  let fixture: ComponentFixture<SidebaritemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebaritemComponent]
    });
    fixture = TestBed.createComponent(SidebaritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
