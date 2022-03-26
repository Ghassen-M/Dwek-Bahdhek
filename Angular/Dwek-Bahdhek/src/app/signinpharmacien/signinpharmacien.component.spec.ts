import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninpharmacienComponent } from './signinpharmacien.component';

describe('SigninpharmacienComponent', () => {
  let component: SigninpharmacienComponent;
  let fixture: ComponentFixture<SigninpharmacienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninpharmacienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninpharmacienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
