import { Component, OnInit } from '@angular/core';
import { ColorApiService } from '../shared/services/color-api.service';
import { ResponseColorData, Color } from '../shared/models/color.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-colors-grid-panel',
  templateUrl: './colors-grid-panel.component.html',
  styleUrls: ['./colors-grid-panel.component.css']
})
export class ColorsGridPanelComponent implements OnInit {

  colorData: ResponseColorData = null;
  colors: Color[] = [];
  
  constructor(
    private _colorsAPI: ColorApiService
  ) { }

  ngOnInit(): void {
    this._initColors(1, 9);
  }

  private _initColors(page: number, perPage: number) {
    this._colorsAPI.getColors(page, perPage).subscribe(res => {
      if (!!res) {
        this.colorData = res;
        this.colors = res.data;
        console.log('this.colors', this.colors);
      }
    });
  }

  private _resetColors(page: number, perPage: number) {
    this.colors = [];
    this._initColors(page, perPage);
  }

  changePage(event: PageEvent) {
    this._resetColors(event.pageIndex + 1, event.pageSize);
  }

}
