import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yourrrr } from './yourrrr';

describe('Yourrrr', () => {
  let component: Yourrrr;
  let fixture: ComponentFixture<Yourrrr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yourrrr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Yourrrr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
