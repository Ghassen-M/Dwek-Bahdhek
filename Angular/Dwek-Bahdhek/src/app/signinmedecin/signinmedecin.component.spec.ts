import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninmedecinComponent } from './signinmedecin.component';

describe('SigninmedecinComponent', () => {
  let component: SigninmedecinComponent;
  let fixture: ComponentFixture<SigninmedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninmedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
