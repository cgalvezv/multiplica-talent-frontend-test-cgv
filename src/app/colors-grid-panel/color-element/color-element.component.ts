import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { copyToClipboard } from 'src/app/shared/functions/clipboard.functions';

@Component({
  selector: 'app-color-element',
  templateUrl: './color-element.component.html',
  styleUrls: ['./color-element.component.css']
})
export class ColorElementComponent implements OnInit {
  @Input() year: number;
  @Input() pantone: string;
  @Input() colorName: string;
  @Input() colorCode: string;

  backgroundColor = {};

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.backgroundColor = {
      'background-color': this.colorCode
    };
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
