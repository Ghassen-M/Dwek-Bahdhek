import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninclientComponent } from './signinclient.component';

describe('SigninclientComponent', () => {
  let component: SigninclientComponent;
  let fixture: ComponentFixture<SigninclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
