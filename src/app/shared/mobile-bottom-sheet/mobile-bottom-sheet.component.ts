import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Color } from '../models/color.model';

@Component({
  selector: 'app-mobile-bottom-sheet',
  templateUrl: './mobile-bottom-sheet.component.html',
  styleUrls: ['./mobile-bottom-sheet.component.css']
})
/**
 * Component that displays color information, within the grid panel, for mobile devices
 * @author Camilo Gálvez Vidal
 */
export class MobileBottomSheetComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public color: Color,
    private bottomSheetRef: MatBottomSheetRef<MobileBottomSheetComponent>
  ) {}

  /**
   * Method that closes the component BottomSheet and sends the color info to be copied to the clipboard
   * @author Camilo Gálvez Vidal
   */
  close() {
    this.bottomSheetRef.dismiss(this.color);
  }
}
