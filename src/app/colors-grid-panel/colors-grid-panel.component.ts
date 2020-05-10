import { Component, OnInit } from '@angular/core';
import { ColorApiService } from '../shared/services/color-api.service';
import { ResponseColorData, Color } from '../shared/models/color.model';
import { PageEvent } from '@angular/material/paginator';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { PAGINATION, TEXTS } from 'src/environments/environment';

@Component({
  selector: 'app-colors-grid-panel',
  templateUrl: './colors-grid-panel.component.html',
  styleUrls: ['./colors-grid-panel.component.css']
})
/**
 * Component containing the colors listed in flex grid section
 * @author Camilo Gálvez Vidal
 */
export class ColorsGridPanelComponent implements OnInit {
  // Variable that will store the color data obtained
  colorData: ResponseColorData = null;
  // Variable that will store the list of colors obtained
  colors: Color[] = [];
  // Is the current mqAlias of the screen devices, to apply mobile behavior
  currentScreenWidth = '';
  // Variable that will store the value obtained from the filter input
  filterValue = '';
  // Is the filter input placeholder msg
  placeholder = TEXTS.PLACEHOLDER_FILTER_INPUT;

  constructor(
    private mediaObs: MediaObserver,
    private colorsAPI: ColorApiService
  ) {
    // Subscription to get mqAlias of screen, after the size was changed
    this.mediaObs.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias !== this.currentScreenWidth) {
          this.currentScreenWidth = change.mqAlias;
      }
    });
  }

  /**
   * Initialize the list
   * @author Camilo Gálvez Vidal
   */
  ngOnInit(): void {
    this._initColors(PAGINATION.DEFAULT_INIT_PAGE, PAGINATION.DEFAULT_ELEMENT_PER_PAGE);
  }

  /**
   * Method that obtains the list of colors, from the endpoint
   * delivered for the test, to populate flex grid section
   * @param page is the current page
   * @param perPage is the number of elements showing in the list
   * @author Camilo Gálvez Vidal
   */
  private _initColors(page: number, perPage: number) {
    this.colorsAPI.getColors(page, perPage).subscribe(res => {
      if (!!res) {
        this.colorData = res;
        this.colors = res.data;
      }
    });
  }

  /**
   * Method that resets the information displayed inside the flex grid section
   * @param page is the page from which you want to obtain the data
   * @param perPage is the number of items you want to display
   * @author Camilo Gálvez Vidal
   */
  private _resetColors(page: number, perPage: number) {
    this.colors = [];
    this._initColors(page, perPage);
  }

  /**
   * Method that updates the value obtained from the filter input (will be used in the color filter pipe)
   * @param event is the keyup filter input event
   * @author Camilo Gálvez Vidal
   */
  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
  }

  /**
   * Method that generates the paging action in the flex grid section
   * @param event is the pagination event
   * @author Camilo Gálvez Vidal
   */
  changePage(event: PageEvent) {
    this._resetColors(event.pageIndex + 1, event.pageSize);
  }

}
