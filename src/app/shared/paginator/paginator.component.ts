import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() length: number;
  @Input() pageSize: number;
  @Output() pageChangeEvent: EventEmitter<any> = new EventEmitter();
  
  pageSizeOptions: number[] = [3, 9, 12];


  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  ngOnInit(): void {
  }

  getData(event) {
    this.pageChangeEvent.emit(event);
  }

}
