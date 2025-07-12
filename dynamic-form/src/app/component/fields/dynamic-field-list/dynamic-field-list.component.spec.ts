import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFieldListComponent } from './dynamic-field-list.component';

describe('DynamicFieldListComponent', () => {
  let component: DynamicFieldListComponent;
  let fixture: ComponentFixture<DynamicFieldListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFieldListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
