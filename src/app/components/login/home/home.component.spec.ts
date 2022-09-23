import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loginHomeComponent } from './home.component';

describe('loginHomeComponent', () => {
  let component: loginHomeComponent;
  let fixture: ComponentFixture<loginHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ loginHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(loginHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
