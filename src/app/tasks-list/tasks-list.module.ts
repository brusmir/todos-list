import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TasksListComponent } from './tasks-list.component';
import { TasksService } from './service/tasks.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common'; // ovo je potrebno da bi radio *ngFor

@NgModule({
  declarations: [
    TasksListComponent
  ],
  imports: [    
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  exports: [
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    TasksListComponent,
    MatCheckboxModule
  ],
  providers: [ TasksService ],
})
export class TasksListModule { }
