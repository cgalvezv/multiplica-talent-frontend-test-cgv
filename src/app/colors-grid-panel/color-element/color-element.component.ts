import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { copyToClipboard } from 'src/app/shared/functions/clipboard.functions';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MobileBottomSheetComponent } from 'src/app/shared/mobile-bottom-sheet/mobile-bottom-sheet.component';
import { Color } from 'src/app/shared/models/color.model';
import { MOBILE, TEXTS } from 'src/environments/environment';

@Component({
  selector: 'app-color-element',
  templateUrl: './color-element.component.html',
  styleUrls: ['./color-element.component.css']
})
/**
 * component that contains and displays the information of a color,
 * within the flex grid component
 * @author Camilo Gálvez Vidal
 */
export class ColorElementComponent implements OnInit {
  // Input: is the color information to be processed in this component
  @Input() color: Color;
  // Input: is the size of the screen to process the information to be displayed in the component (Mobile behavior)
  @Input() screenWidth: string;
  // Object that will keep the background color of the component
  backgroundColor = {};
  // Is the tooltip message
  tooltipMsg = TEXTS.TOOLTIP_MSG;

  constructor(
    private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet
  ) { }

  /**
   * Initialize the background color
   * @author Camilo Gálvez Vidal
   */
  ngOnInit(): void {
    this.backgroundColor = {
      'background-color': this.color.color
    };
  }

  /**
   * Method that generates the copy to clipboard behavior
   * @param colorName is the name of the color to copy
   * @param colorCode is the code of the color to copy
   * @author Camilo Gálvez Vidal
   */
  onCopyAction(color: Color) {
    // In mobile devices, show a mat bottom sheet with the entire information about the color, and then
    // if the user want, can do the copy of the color code in the clipboard
    if (this.screenWidth === MOBILE.XS_SCREEN || this.screenWidth === MOBILE.SM_SCREEN) {
      const refBottomSheet = this.bottomSheet.open(MobileBottomSheetComponent, {
        data: this.color
      });

      refBottomSheet.afterDismissed()
        .subscribe((colorSelected: Color) => {
          this._copyInClipboard(colorSelected.name, colorSelected.color);
        });
    } else { // In web devices, the color code is immediately copied into the clipboard
      this._copyInClipboard(color.name, color.color);
    }
  }

  /**
   * Method that generates the copy to clipboard action
   * @param colorName is the name of the color to copy
   * @param colorCode is the code of the color to copy
   * @author Camilo Gálvez Vidal
   */
  private _copyInClipboard(colorName: string, colorCode: string) {
    const message = TEXTS.SNACKBAR_MSG.replace(TEXTS.REPLACE_KEY, colorName.toUpperCase());
    copyToClipboard(colorCode.toLocaleUpperCase());
    this.snackBar.open(message, null, {
      duration: 2000
    });
  }
}
