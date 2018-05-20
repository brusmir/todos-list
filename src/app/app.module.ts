import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './toolbar/toolbar.module';
import { TasksListModule } from './tasks-list/tasks-list.module';

@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,   
    ToolbarModule,
    TasksListModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
