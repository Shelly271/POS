import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Price } from 'src/app/utils';
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
  constructor(private formBuilder: FormBuilder, private router: Router) {
  }
  keyboard() {
    this.showKeyboard = true;
  }


  addValue(value: number) {
    if (value < 0) {
      this.showKeyboard = false;
    } else {
      this.numericValue = value;
    }

    // console.log('Numeric Value in Parent:', this.numericValue);
  }
  back() {
    this.home = true;
    this.sideNav = false;
  }



  ngOnInit(): void {
    this.formBinding();

  } admin() {
    this.home = false;
    this.sideNav = true;
    this.menuItem = [{ key: 1, value: 'Cash and Sale', link: 'cashAndSale' },
    { key: 2, value: 'Report ', link: 'report' },
    { key: 3, value: 'Manager', link: 'manager' },
    { key: 4, value: 'Suport', link: 'suport' },
    ]
  } cashier() {
    this.home = false;
    this.sideNav = true;
    this.menuItem = [{ key: 1, value: 'Operator', link: 'operator'},
    { key: 2, value: 'Refund ', link: 'refund' },
    { key: 3, value: 'Pre-Auth', link: 'pre-auth' },
    { key: 4, value: 'Pre-Auth Completion', link: 'completion' },
    { key: 5, value: 'Voice Override', link: 'override' }]
  }
  formBinding() {
    this.form = this.formBuilder.group({
      amount: []
    });
  }
  feedPaper() {
    alert('Pinting paper if its available');
  }

  submit() {
     
    console.log(Price(this.form.value.amount));
    const data: NavigationExtras = {
      state: {
        price: this.form.value.amount
      },
    };
    this.router.navigate(['pay'], data);
  }
}
