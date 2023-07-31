import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup = new FormGroup({})

  adminData = 'dataFromHome';
  handleChildEvent(eventData: string){
    console.log('Event form Child:',eventData);
  }

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
    this.menuItem = [{ key: 1, value: 'Operator Menu', link: '/app-operator-menu' },
    { key: 2, value: 'Reports Menu ', link: 'www.facebook.com' },
    { key: 3, value: 'Manager Menu ', link: 'www.zoom.com' },
    { key: 4, value: 'Suport Menu', link: 'www.figma.com' },
    ]
  }
  cashier() {
    this.home = false;
    this.sideNav = true;
    this.menuItem = [{ key: 1, value: 'Sale and Cash', link: 'https://www.figma.com/file/aCpxeWfInHlJwEoSrMwJSe/Terminal?type=design&node-id=0-1&mode=design&t=GhxR1nRWDwVQmlJh-0' },
    { key: 2, value: 'Refund ', link: 'www.facebook.com' },
    { key: 3, value: 'Pre-Auth', link: 'www.zoom.com' },
    { key: 4, value: 'Pre-Auth Completion', link: 'www.figma.com' },
    { key: 5, value: 'Voice Override', link: 'www.food.com' }]
  }
  navigate(link: string){
    
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
