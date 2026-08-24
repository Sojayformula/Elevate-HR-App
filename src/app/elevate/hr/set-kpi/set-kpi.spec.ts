import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetKpi } from './set-kpi';

describe('SetKpi', () => {
  let component: SetKpi;
  let fixture: ComponentFixture<SetKpi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetKpi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetKpi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
