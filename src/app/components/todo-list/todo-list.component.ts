import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TodoItem, priority } from 'src/app/interfaces/todo.interface';
import { AddFormComponent } from '../add-form/add-form.component';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements AfterViewInit {
  descriptionFilter = '';
  priorityFilter: string[] = [];
  displayFilter = false;

  displayedColumns: string[] = ['description', 'priority', 'dueDate', 'actions'];
  dataSource = new MatTableDataSource<TodoItem>([]);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private todoService: TodoService) {}

  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.todoService.getAll();
  }

  updateFilter(){
    let data = this.todoService.getAll();

    if(this.descriptionFilter){
      data = data.filter(item => item.description.toLocaleLowerCase().includes(this.descriptionFilter.toLocaleLowerCase()));
    }

    if(this.priorityFilter.length){
      data = data.filter(item => this.priorityFilter.includes(item.priority));
    }

    this.dataSource.data = data;
  }

  toggleFilterContainer(){
    this.displayFilter = !this.displayFilter;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddFormComponent, {data: {
      id: Number(new Date()),
      description: '',
      priority: priority.low,
      dueDate: new Date()
    }});

    dialogRef.afterClosed().subscribe(result => {
      this.updateFilter();
    });
  }

  
  editItem(item: TodoItem): void {
    const dialogRef = this.dialog.open(AddFormComponent, {data: {...item} });

    dialogRef.afterClosed().subscribe(result => {
      this.todoService.update(result);
      this.updateFilter();
    });
  }

  deleteItem(element: TodoItem){
    this.todoService.delete(element.id);
    this.updateFilter();
  }
}
