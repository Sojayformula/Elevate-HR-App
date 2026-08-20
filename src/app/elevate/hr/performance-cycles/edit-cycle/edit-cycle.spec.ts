import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCycle } from './edit-cycle';

describe('EditCycle', () => {
  let component: EditCycle;
  let fixture: ComponentFixture<EditCycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCycle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCycle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
