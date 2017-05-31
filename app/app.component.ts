import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <h3 (click)="doStuff(currentTask)" *ngFor="let currentTask of tasks">{{ currentTask.description }}</h3>
  </div>
  `
})

export class AppComponent {
  public tasks: Task[] = [
      new Task("Going out for swimming.", 0),
      new Task("practising how to code.", 1),
      new Task("being sarcastic on most of the things i do.", 2),
      new Task("doing what i do best.", 3)
  ];
  doStuff(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert("This task is done!");
    } else {
      alert("This task is not completed yet! Get to work!");
    }
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {   }
}
