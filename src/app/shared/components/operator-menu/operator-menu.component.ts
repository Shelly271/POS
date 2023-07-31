import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operator-menu',
  templateUrl: './operator-menu.component.html',
  styleUrls: ['./operator-menu.component.css']
})
export class OperatorMenuComponent {
  imageUrl: string='assets/Nedbank_logo_cube.png';
  @Input() dataFromHome: string;
}
