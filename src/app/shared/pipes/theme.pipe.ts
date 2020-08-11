import { Pipe, PipeTransform } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'theme'
})
export class ThemePipe implements PipeTransform {

  themeName: string;

  constructor(private themeService: ThemeService) { }

  transform(value: any, args?: any): string {
    this.themeService.getTheme(value).subscribe(t => {
      this.themeName = t.name;
    });

    return this.themeName;
  }

}
