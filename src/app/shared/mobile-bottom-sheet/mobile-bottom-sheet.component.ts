import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Color } from '../models/color.model';

@Component({
  selector: 'app-mobile-bottom-sheet',
  templateUrl: './mobile-bottom-sheet.component.html',
  styleUrls: ['./mobile-bottom-sheet.component.css']
})
export class MobileBottomSheetComponent {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public color: Color,
    private bottomSheetRef: MatBottomSheetRef<MobileBottomSheetComponent>
  ) {}

  close() {
    this.bottomSheetRef.dismiss(this.color);
  }
}
