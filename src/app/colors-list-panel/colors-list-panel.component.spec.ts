import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsListPanelComponent } from './colors-list-panel.component';

describe('ColorsListPanelComponent', () => {
  let component: ColorsListPanelComponent;
  let fixture: ComponentFixture<ColorsListPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsListPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
