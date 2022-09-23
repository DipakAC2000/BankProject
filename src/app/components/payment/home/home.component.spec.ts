import { ComponentFixture, TestBed } from '@angular/core/testing';

import { paymentHomeComponent } from './home.component';

describe('paymentHomeComponent', () => {
  let component: paymentHomeComponent;
  let fixture: ComponentFixture<paymentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ paymentHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(paymentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
