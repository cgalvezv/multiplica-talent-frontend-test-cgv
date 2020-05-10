import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
/**
 * Component that contains the tabs to display the catalog either in list or grid
 * @author Camilo Gálvez Vidal
 */
export class MainPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
