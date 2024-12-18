import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformOperatorComponent } from './perform-operator.component';

describe('PerformOperatorComponent', () => {
  let component: PerformOperatorComponent;
  let fixture: ComponentFixture<PerformOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerformOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
