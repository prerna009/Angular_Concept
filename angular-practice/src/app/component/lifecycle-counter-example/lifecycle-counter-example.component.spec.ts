import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleCounterExampleComponent } from './lifecycle-counter-example.component';

describe('LifecycleCounterExampleComponent', () => {
  let component: LifecycleCounterExampleComponent;
  let fixture: ComponentFixture<LifecycleCounterExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifecycleCounterExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleCounterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
