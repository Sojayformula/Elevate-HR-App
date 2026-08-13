import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyActive } from './my-active';

describe('MyActive', () => {
  let component: MyActive;
  let fixture: ComponentFixture<MyActive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyActive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyActive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
