import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [        
    MatToolbarModule,
    MatChipsModule
  ],
  exports: [
    MatToolbarModule,
    MatChipsModule,
    ToolbarComponent
  ],
  providers: [],
})
export class ToolbarModule { }
