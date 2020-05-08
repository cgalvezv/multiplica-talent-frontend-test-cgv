import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsGridPanelComponent } from './colors-grid-panel.component';

describe('ColorsGridPanelComponent', () => {
  let component: ColorsGridPanelComponent;
  let fixture: ComponentFixture<ColorsGridPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsGridPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsGridPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
