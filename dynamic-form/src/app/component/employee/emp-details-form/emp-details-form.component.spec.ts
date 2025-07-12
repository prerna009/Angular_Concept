import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailsFormComponent } from './emp-details-form.component';

describe('EmpDetailsFormComponent', () => {
  let component: EmpDetailsFormComponent;
  let fixture: ComponentFixture<EmpDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpDetailsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
