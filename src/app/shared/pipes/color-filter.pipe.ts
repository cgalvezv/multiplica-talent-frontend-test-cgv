import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color.model';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(colors: Color[], value: string): Color[] {
    return colors.filter((color: Color) => {
      return (color.name.includes(value.toLowerCase()) ||
            color.color.toLowerCase().includes(value.toLowerCase()) ||
            String(color.year).includes(value) ||
            color.pantone_value.includes(value.toLowerCase()));
    });
  }

}
