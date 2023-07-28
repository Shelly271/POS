import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {

  @Output() onKeyboardInput: EventEmitter<number> = new EventEmitter<number>();

  screenValue: string = "";
  numericValue: number = 0;
 close: boolean = false;
  OnButtonClick(value: number) {
    this.screenValue = this.screenValue + value.toString();
    this.numericValue = parseFloat(this.screenValue);
    this.onKeyboardInput.emit(this.numericValue);
  }

  Cancel() {
    this.screenValue = this.screenValue.slice(0, -1);
    this.numericValue = parseFloat(this.screenValue);
    this.onKeyboardInput.emit(this.numericValue);
  }
  
  Close() {
    this.close = true;
  }
  
}
