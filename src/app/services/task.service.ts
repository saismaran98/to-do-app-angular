import { Injectable } from '@angular/core';
import {Task} from '../Tasks';
import {TASKS} from '../mock-tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[]=[];
  constructor() { }
  getTasks() : Task[]{
    return TASKS;
  }
}
