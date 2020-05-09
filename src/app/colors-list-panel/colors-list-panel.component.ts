import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ColorApiService } from '../shared/services/color-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Color } from '../shared/models/color.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { copyToClipboard } from '../shared/functions/clipboard.functions';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-colors-list-panel',
  templateUrl: './colors-list-panel.component.html',
  styleUrls: ['./colors-list-panel.component.css']
})
export class ColorsListPanelComponent implements OnInit {

  dataSource: MatTableDataSource<Color> = null;
  displayedColumns: string[] = null;
  currentScreenWidth = '';
  
  constructor(
    private snackBar: MatSnackBar,
    private colorsAPI: ColorApiService,
    private mediaObs: MediaObserver
  ) {
    this.mediaObs.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias !== this.currentScreenWidth) {
          this.currentScreenWidth = change.mqAlias;
          this._onChangeCurrenScreenWidth();
      }
    });
  }

  ngOnInit(): void {
    this._initColors(1, 20);
  }

  private _initColors(page: number, perPage: number) {
    this.colorsAPI.getColors(page, perPage).subscribe(res => {
      if (!!res) {
        this.dataSource = new MatTableDataSource(res.data);
      }
    });
  }

  private _onChangeCurrenScreenWidth() {
    this.displayedColumns = [
      'color_button',
      'color_name',
      'color_code',
      'year',
      'pantone'
    ];
    if (this.currentScreenWidth === 'xs' || this.currentScreenWidth === 'sm') {
      this.displayedColumns = this.displayedColumns.slice(0, -2);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onCopyAction(colorName: string, colorCode: string) {
    const message = 'Color ' + colorName.toUpperCase() + ' copied in clipboard!';
    copyToClipboard(colorCode.toLocaleUpperCase());
    this.snackBar.open(message, null, {
      duration: 2000
    });
  }

  getMessageTooltip(color: string) {
    return 'Click the circle to copy the ' + color.toUpperCase() + ' color code';
  }
}
