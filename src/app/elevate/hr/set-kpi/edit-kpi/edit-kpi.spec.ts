import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKpi } from './edit-kpi';

describe('EditKpi', () => {
  let component: EditKpi;
  let fixture: ComponentFixture<EditKpi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditKpi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditKpi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
