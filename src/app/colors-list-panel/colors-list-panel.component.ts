import { Component, OnInit } from '@angular/core';
import { ColorApiService } from '../shared/services/color-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Color } from '../shared/models/color.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { copyToClipboard } from '../shared/functions/clipboard.functions';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { TEXTS, PAGINATION, DATA_TABLE, MOBILE } from 'src/environments/environment';

@Component({
  selector: 'app-colors-list-panel',
  templateUrl: './colors-list-panel.component.html',
  styleUrls: ['./colors-list-panel.component.css']
})
/**
 * Component containing the colors listed in a datatable component
 * @author Camilo Gálvez Vidal
 */
export class ColorsListPanelComponent implements OnInit {
  // Color data source variable to use in mat-table
  dataSource: MatTableDataSource<Color> = null;
  // Headers of the mat table
  displayedColumns: string[] = null;
  // Is the current mqAlias of the screen devices, to apply mobile behavior
  currentScreenWidth = '';
  // Is the filter input placeholder msg
  placeholder = TEXTS.PLACEHOLDER_FILTER_INPUT;
  // Is the mobile footer msg
  footerMsg = TEXTS.COLOR_FOOTER_MSG;

  constructor(
    private snackBar: MatSnackBar,
    private colorsAPI: ColorApiService,
    private mediaObs: MediaObserver
  ) {
    // Subscription to get mqAlias of screen, after the size was changed
    this.mediaObs.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias !== this.currentScreenWidth) {
          this.currentScreenWidth = change.mqAlias;
          this._onChangeCurrenScreenWidth();
      }
    });
  }

  /**
   * Initialize the list
   * @author Camilo Gálvez Vidal
   */
  ngOnInit(): void {
    this._initColors(PAGINATION.DEFAULT_INIT_PAGE, PAGINATION.MAX_ELEMENT_PER_PAGE);
  }
  /**
   * Method that obtains the list of colors, from the endpoint
   * delivered for the test, to populate the mat-table component
   * @param page is the current page
   * @param perPage is the number of elements showing in the list
   * @author Camilo Gálvez Vidal
   */
  private _initColors(page: number, perPage: number) {
    this.colorsAPI.getColors(page, perPage).subscribe(res => {
      if (!!res) {
        this.dataSource = new MatTableDataSource(res.data);
      }
    });
  }
  /**
   * Method that updates the table after the screen size is changed
   * @author Camilo Gálvez Vidal
   */
  private _onChangeCurrenScreenWidth() {
    this.displayedColumns = DATA_TABLE.COLUMNS;
    // Condition to hide the last 2 columns (Only mobile)
    if (this.currentScreenWidth === MOBILE.XS_SCREEN || this.currentScreenWidth === MOBILE.SM_SCREEN) {
      this.displayedColumns = this.displayedColumns.slice(0, -2);
    }
  }

  /**
   * Method that updates the items shown in the list, after a filter value has been written
   * @param event is the keyup filter input event
   * @author Camilo Gálvez Vidal
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Method that generates the copy to clipboard action
   * @param colorName is the name of the color to copy
   * @param colorCode is the code of the color to copy
   * @author Camilo Gálvez Vidal
   */
  onCopyAction(colorName: string, colorCode: string) {
    const message = TEXTS.SNACKBAR_MSG.replace(TEXTS.REPLACE_KEY, colorName.toUpperCase());
    copyToClipboard(colorCode.toLocaleUpperCase());
    this.snackBar.open(message, null, {
      duration: 2000
    });
  }

  /**
   * Method that generates the text for the tooltip component
   * @param color is a color code
   * @author Camilo Gálvez Vidal
   */
  getMessageTooltip(color: string) {
    return TEXTS.COLOR_TOOLTIP_MSG.replace(TEXTS.REPLACE_KEY, color.toUpperCase());
  }
}
