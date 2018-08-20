import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePipe } from './pipes/theme.pipe';
import { ThemeService } from './services/theme.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ThemePipe],
  providers: [
    ThemeService
  ],
  exports: [ThemePipe]
})
export class SharedModule { }
