import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { copyToClipboard } from 'src/app/shared/functions/clipboard.functions';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MobileBottomSheetComponent } from 'src/app/shared/mobile-bottom-sheet/mobile-bottom-sheet.component';
import { Color } from 'src/app/shared/models/color.model';

@Component({
  selector: 'app-color-element',
  templateUrl: './color-element.component.html',
  styleUrls: ['./color-element.component.css']
})
export class ColorElementComponent implements OnInit {
  @Input() color: Color;
  @Input() screenWidth: string;

  backgroundColor = {};

  constructor(
    private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
    this.backgroundColor = {
      'background-color': this.color.color
    };
  }

  onCopyAction(color: Color) {
    if (this.screenWidth === 'xs' || this.screenWidth === 'sm') {
      const refBottomSheet = this.bottomSheet.open(MobileBottomSheetComponent, {
        data: this.color
      });

      refBottomSheet.afterDismissed()
        .subscribe((colorSelected: Color) => {
          this._copyInClipboard(colorSelected.name, colorSelected.color);
        });
    } else {
      this._copyInClipboard(color.name, color.color);
    }
  }

  private _copyInClipboard(colorName: string, colorCode: string) {
    const message = 'Color ' + colorName.toUpperCase() + ' copied in clipboard!';
    copyToClipboard(colorCode.toLocaleUpperCase());
    this.snackBar.open(message, null, {
      duration: 2000
    });
  }
}
