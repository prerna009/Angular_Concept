import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailsListComponent } from './emp-details-list.component';

describe('EmpDetailsListComponent', () => {
  let component: EmpDetailsListComponent;
  let fixture: ComponentFixture<EmpDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpDetailsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
