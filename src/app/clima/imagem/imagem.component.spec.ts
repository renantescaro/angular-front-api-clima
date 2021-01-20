import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImagemComponent } from './imagem.component';

describe('ImagemComponent', () => {
  let component: ImagemComponent;
  let fixture: ComponentFixture<ImagemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
