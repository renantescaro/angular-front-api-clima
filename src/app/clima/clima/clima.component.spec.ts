import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClimaComponent } from './clima.component';

describe('ClimaComponent', () => {
  let component: ClimaComponent;
  let fixture: ComponentFixture<ClimaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
