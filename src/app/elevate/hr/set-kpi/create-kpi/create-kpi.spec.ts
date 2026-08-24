import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKpi } from './create-kpi';

describe('CreateKpi', () => {
  let component: CreateKpi;
  let fixture: ComponentFixture<CreateKpi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateKpi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateKpi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
