import { ComponentFixture, TestBed } from '@angular/core/testing';

import { registerHomeComponent } from './home.component';

describe('registerHomeComponent', () => {
  let component: registerHomeComponent;
  let fixture: ComponentFixture<registerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ registerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(registerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
