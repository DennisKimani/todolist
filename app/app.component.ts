import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <h3 (click)="showDetails(currentTask)" *ngFor="let currentTask of tasks">{{ currentTask.description }}</h3>
    <h1>Edit Task</h1>
    <div>
      <label>Enter Task Description:</label>
      <input [(ngModel)]="selectedTask.description">
    </div>
    <div>
      <label>Enter Task ID:</label>
      <input [(ngModel)]="selectedTask.id">
    </div>
  </div>
  `
})
