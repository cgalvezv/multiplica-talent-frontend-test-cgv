import { Component, OnInit } from '@angular/core';
import { ColorApiService } from '../shared/services/color-api.service';
import { ResponseColorData, Color } from '../shared/models/color.model';
import { PageEvent } from '@angular/material/paginator';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-colors-grid-panel',
  templateUrl: './colors-grid-panel.component.html',
  styleUrls: ['./colors-grid-panel.component.css']
})
export class ColorsGridPanelComponent implements OnInit {

  colorData: ResponseColorData = null;
  colors: Color[] = [];
  currentScreenWidth = '';
  filterValue = '';
  
  constructor(
    private mediaObs: MediaObserver,
    private colorsAPI: ColorApiService
  ) {
    this.mediaObs.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias !== this.currentScreenWidth) {
          this.currentScreenWidth = change.mqAlias;
      }
    });
  }

  ngOnInit(): void {
    this._initColors(1, 9);
  }

  private _initColors(page: number, perPage: number) {
    this.colorsAPI.getColors(page, perPage).subscribe(res => {
      if (!!res) {
        this.colorData = res;
        this.colors = res.data;
      }
    });
  }

  private _resetColors(page: number, perPage: number) {
    this.colors = [];
    this._initColors(page, perPage);
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
  }

  changePage(event: PageEvent) {
    this._resetColors(event.pageIndex + 1, event.pageSize);
  }

}
