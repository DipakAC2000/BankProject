import { ComponentFixture, TestBed } from '@angular/core/testing';

import { navbarHomeComponent } from './home.component';

describe('navbarHomeComponent', () => {
  let component: navbarHomeComponent;
  let fixture: ComponentFixture<navbarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ navbarHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(navbarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
