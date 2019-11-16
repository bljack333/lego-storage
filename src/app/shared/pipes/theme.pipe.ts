import { Pipe, PipeTransform } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Pipe({
  name: 'theme'
})
export class ThemePipe implements PipeTransform {

  themeName: string;

  constructor(private themeService: ThemeService) { }

  transform(value: any, args?: any): string {
    this.themeService.getTheme(value).subscribe(t => {
      return t.name;
    });
  }

}
