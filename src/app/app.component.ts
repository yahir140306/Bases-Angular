import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title: string = 'Mi Primera App en Angular';
  public counter: number = 10;

  increaseBy(value: number): void {
    // if (value === 0) { this.counter = 10; }
    this.counter += value;
  }
  // decreaseBy(): void {
  //   this.counter -= 1;
  // }
  resetCounter() {
    this.counter = 10;
  }
}
