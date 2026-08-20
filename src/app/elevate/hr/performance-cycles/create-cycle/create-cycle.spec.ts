import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCycle } from './create-cycle';

describe('CreateCycle', () => {
  let component: CreateCycle;
  let fixture: ComponentFixture<CreateCycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCycle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCycle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
