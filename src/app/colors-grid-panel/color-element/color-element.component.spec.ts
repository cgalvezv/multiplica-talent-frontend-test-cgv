import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorElementComponent } from './color-element.component';

describe('ColorElementComponent', () => {
  let component: ColorElementComponent;
  let fixture: ComponentFixture<ColorElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
