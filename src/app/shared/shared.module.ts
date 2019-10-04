import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePipe } from './pipes/theme.pipe';
import { ThemeService } from './services/theme.service';
import { CollapseModule, AccordionModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    AccordionModule.forRoot()
  ],
  declarations: [ThemePipe],
  providers: [
    ThemeService
  ],
  exports: [ThemePipe]
})
export class SharedModule { }
