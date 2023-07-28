import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup = new FormGroup({})
  menuItem: any[] = [];
  home: boolean = true;
  sideNav: boolean = false
  showKeyboard: boolean = false;
  numericValue: number = 0.00;
  constructor(private formBuilder: FormBuilder) {
  }
  keyboard() {  
    this.showKeyboard = true;
  }
 

  addValue(value: number) {
   if (value < 0){
    this.showKeyboard = false;
   }else{
    this.numericValue = value;
   }
    
    // console.log('Numeric Value in Parent:', this.numericValue);
  }
  back() {
    this.home = true;
    this.sideNav = false;
  }
  admin() {
    this.home = false;
    this.sideNav = true;
    this.menuItem = [{ key: 1, value: 'Cash and Sale', link: 'https://www.figma.com/file/aCpxeWfInHlJwEoSrMwJSe/Terminal?type=design&node-id=0-1&mode=design&t=GhxR1nRWDwVQmlJh-0' },
    { key: 2, value: 'Report ', link: 'www.facebook.com' },
    { key: 3, value: 'Manager', link: 'www.zoom.com' },
    { key: 4, value: 'Suport', link: 'www.figma.com' },
    ]
  }
  cashier() {
    this.home = false;
    this.sideNav = true;
    this.menuItem = [{ key: 1, value: 'Operator', link: 'https://www.figma.com/file/aCpxeWfInHlJwEoSrMwJSe/Terminal?type=design&node-id=0-1&mode=design&t=GhxR1nRWDwVQmlJh-0' },
    { key: 2, value: 'Refund ', link: 'www.facebook.com' },
    { key: 3, value: 'Pre-Auth', link: 'www.zoom.com' },
    { key: 4, value: 'Pre-Auth Completion', link: 'www.figma.com' },
    { key: 5, value: 'Voice Override', link: 'www.food.com' }]
  }
  formBinding() {
    this.form = this.formBuilder.group({
      amount: []
    });
  }
  ngOnInit(): void {
    this.formBinding();
   
  }

  submit() {
    console.log(this.numericValue)
      this.form.value.amount = (this.numericValue)
    alert(this.form.value.amount)
  }
}
