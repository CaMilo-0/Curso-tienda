import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaIncorrectaComponent } from './pagina-incorrecta.component';

describe('PaginaIncorrectaComponent', () => {
  let component: PaginaIncorrectaComponent;
  let fixture: ComponentFixture<PaginaIncorrectaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaIncorrectaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaIncorrectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
