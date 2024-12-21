import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDemoComponent } from './parent-demo.component';

describe('ParentComponent', () => {
  let component: ParentDemoComponent;
  let fixture: ComponentFixture<ParentDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
