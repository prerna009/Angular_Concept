import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDemoComponent } from './child-demo.component';

describe('ChildComponent', () => {
  let component: ChildDemoComponent;
  let fixture: ComponentFixture<ChildDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
