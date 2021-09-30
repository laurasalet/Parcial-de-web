import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPagoCuotasComponent } from './registro-pago-cuotas.component';

describe('RegistroPagoCuotasComponent', () => {
  let component: RegistroPagoCuotasComponent;
  let fixture: ComponentFixture<RegistroPagoCuotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPagoCuotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPagoCuotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
