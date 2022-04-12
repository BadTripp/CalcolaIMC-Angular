import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcolaImgComponent } from './calcola-img.component';

describe('CalcolaImgComponent', () => {
  let component: CalcolaImgComponent;
  let fixture: ComponentFixture<CalcolaImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcolaImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcolaImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
