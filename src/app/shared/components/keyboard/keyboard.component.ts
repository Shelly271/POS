import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {
  screenValue: string = "";
  numericValue: number = 0
  onButtonClick(value: number) {
    this.screenValue = this.screenValue + value.toString();
    this.numericValue = parseFloat(this.screenValue);
  }

}
