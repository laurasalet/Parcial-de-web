import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAyudaComponent } from './registrar-ayuda.component';

describe('RegistrarAyudaComponent', () => {
  let component: RegistrarAyudaComponent;
  let fixture: ComponentFixture<RegistrarAyudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAyudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
