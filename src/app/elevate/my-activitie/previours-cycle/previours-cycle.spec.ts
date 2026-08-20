import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevioursCycle } from './previours-cycle';

describe('PrevioursCycle', () => {
  let component: PrevioursCycle;
  let fixture: ComponentFixture<PrevioursCycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrevioursCycle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevioursCycle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
