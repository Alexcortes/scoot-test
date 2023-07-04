import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }

  addItem(newItem: TodoItem){
    const current = JSON.parse(localStorage.getItem('todoList') || '[]') as TodoItem[];

    current.push(newItem);
    localStorage.setItem('todoList', JSON.stringify(current));
  }

  getAll(){
    const current = JSON.parse(localStorage.getItem('todoList') || '[]') as TodoItem[];

    return current;
  }

  delete(id: number) {
    const current = JSON.parse(localStorage.getItem('todoList') || '[]') as TodoItem[];
    const newArray = current.filter(item => item.id !== id);

    localStorage.setItem('todoList', JSON.stringify(newArray));

    return newArray;
  }

  update(updateItem: TodoItem) {
    this.delete(updateItem.id);
    this.addItem(updateItem);
  }
}

