import { Component } from '@angular/core';

@Component({
  selector: 'pies',
  template: `
  <div class="container">
      <h1>My First Angular 2 App</h1>
      <pies></pies>
})

export class PiesListComponent {
  favoritePies: string[] = ["Apple", "Banana Cream", "Blackberry"];
}
