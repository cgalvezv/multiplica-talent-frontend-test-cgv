import { Component, OnInit, ViewChild } from '@angular/core';
import { ColorApiService } from '../shared/services/color-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Color } from '../shared/models/color.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { copyToClipboard } from '../shared/functions/clipboard.functions';

@Component({
  selector: 'app-colors-list-panel',
  templateUrl: './colors-list-panel.component.html',
  styleUrls: ['./colors-list-panel.component.css']
})
export class ColorsListPanelComponent implements OnInit {
  dataSource: MatTableDataSource<Color> = null;
  displayedColumns: string[] = [
    'color_button',
    'color_name',
    'color_code',
    'year',
    'pantone'
  ];
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
    private _snackBar: MatSnackBar,
    private _colorsAPI: ColorApiService
  ) { 
    this._initColors(1, 100000000);
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  private _initColors(page: number, perPage: number) {
    this._colorsAPI.getColors(page, perPage).subscribe(res => {
      if (!!res) {
        this.dataSource = new MatTableDataSource(res.data);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onCopyAction(colorName: string, colorCode: string) {
    const message = 'Color ' + colorName + ' copied!';
    copyToClipboard(colorCode.toLocaleUpperCase());
    this._snackBar.open(message, null, {
      duration: 2000,
      panelClass: 'blue-snackbar'
    });
  }
}
