import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgenciaComponent } from './list-agencia.component';

describe('ListAgenciaComponent', () => {
  let component: ListAgenciaComponent;
  let fixture: ComponentFixture<ListAgenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAgenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
