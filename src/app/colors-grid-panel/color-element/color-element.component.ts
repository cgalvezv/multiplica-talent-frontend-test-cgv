import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = colorCode;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this._snackBar.open(message, null, {
      duration: 2000,
      panelClass: 'blue-snackbar'
    });
  }

}
