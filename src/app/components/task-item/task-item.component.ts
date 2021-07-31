import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;  // X icon

  constructor() { }

  ngOnInit(): void { }

  // emit an event called "onDeleteTask" when being clicked
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  // emit an event called "onToggleReminder" when being double-clicked
  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
