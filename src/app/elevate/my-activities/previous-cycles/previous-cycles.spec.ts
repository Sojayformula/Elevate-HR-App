import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousCycles } from './previous-cycles';

describe('PreviousCycles', () => {
  let component: PreviousCycles;
  let fixture: ComponentFixture<PreviousCycles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousCycles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousCycles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
