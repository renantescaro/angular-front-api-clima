import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegarLocalizacaoComponent } from './pegar-localizacao.component';

describe('PegarLocalizacaoComponent', () => {
  let component: PegarLocalizacaoComponent;
  let fixture: ComponentFixture<PegarLocalizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PegarLocalizacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PegarLocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
