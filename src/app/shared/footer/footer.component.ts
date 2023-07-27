import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  version: any = "V:13.8.6.5N";
  merchantID: any = "M:1234567";
  terminalID: any = "T:14253654";
  constructor() { }
}
