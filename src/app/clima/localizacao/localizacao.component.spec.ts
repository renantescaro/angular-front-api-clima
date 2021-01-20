import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LocalizacaoComponent } from './localizacao.component';

describe('LocalizacaoComponent', () => {
  let component: LocalizacaoComponent;
  let fixture: ComponentFixture<LocalizacaoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
