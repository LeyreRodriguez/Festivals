import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupBussinesComponent } from './singup-bussines.component';

describe('SingupBussinesComponent', () => {
  let component: SingupBussinesComponent;
  let fixture: ComponentFixture<SingupBussinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingupBussinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingupBussinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
