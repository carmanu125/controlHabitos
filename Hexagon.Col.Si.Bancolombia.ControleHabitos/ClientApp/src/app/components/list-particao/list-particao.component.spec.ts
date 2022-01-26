import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParticaoComponent } from './list-particao.component';

describe('ListParticaoComponent', () => {
  let component: ListParticaoComponent;
  let fixture: ComponentFixture<ListParticaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParticaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParticaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
