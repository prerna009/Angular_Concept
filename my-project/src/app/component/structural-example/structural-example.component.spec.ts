import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralExampleComponent } from './structural-example.component';

describe('StructuralExampleComponent', () => {
  let component: StructuralExampleComponent;
  let fixture: ComponentFixture<StructuralExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
