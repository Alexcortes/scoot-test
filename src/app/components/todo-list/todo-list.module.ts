import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AddFormModule } from '../add-form/add-form.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTooltipModule, 
    MatIconModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule,
    AddFormModule,
    MatDialogModule
  ],
  exports: [TodoListComponent]
})
export class TodoListModule { }
