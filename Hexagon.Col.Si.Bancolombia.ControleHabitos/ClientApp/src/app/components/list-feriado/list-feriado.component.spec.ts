import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFeriadoComponent } from './list-feriado.component';

describe('ListFeriadoComponent', () => {
  let component: ListFeriadoComponent;
  let fixture: ComponentFixture<ListFeriadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFeriadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFeriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
