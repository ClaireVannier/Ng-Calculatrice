import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss'
})
export class CalculatriceComponent {

  randomInt1: number | null = null;
  randomInt2: number | null = null;
  result: number | null = null;

  constructor() {}

  getRandomInt(): void {
    const randomInt = Math.floor(Math.random() * 100) + 1;
    if (this.randomInt1 === null) {
      this.randomInt1 = randomInt;
    } else if (this.randomInt2 === null) {
      this.randomInt2 = randomInt;
    } else {
      this.randomInt1 = randomInt;
      this.randomInt2 = null;
      this.result = null;
    }
  }

  calculate(operation: string): void {
    if (this.randomInt1 !== null && this.randomInt2 !== null) {
      switch (operation) {
        case '+':
          this.result = this.randomInt1 + this.randomInt2;
          break;
        case '-':
          this.result = this.randomInt1 - this.randomInt2;
          break;
        case '/':
          this.result = this.randomInt1 / this.randomInt2;
          break;
        case '*':
          this.result = this.randomInt1 * this.randomInt2;
          break;
      }
    }
  }
}