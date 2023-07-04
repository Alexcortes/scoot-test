import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { TodoItem } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TodoItem,
    private todoService: TodoService
  ) {}

  public get isValid() {
    return this.data.description !== '' && this.data.dueDate
  }

  ngOnInit(): void {
  }

  onSaveClick(): void {
    this.todoService.addItem(this.data);
    this.dialogRef.close(this.data);
  }
}
