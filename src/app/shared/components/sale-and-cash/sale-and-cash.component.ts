import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-and-cash',
  templateUrl: './sale-and-cash.component.html',
  styleUrls: ['./sale-and-cash.component.css']
})
export class SaleAndCashComponent implements OnInit {
  @ViewChild('saleInput', { static: false }) saleInputRef!: ElementRef;
  @ViewChild('cashInput', { static: false }) cashInputRef!: ElementRef;

  form: FormGroup = new FormGroup({});
  saleAmount: any = "";
  cashAmount: any = "";
  showKeyboard: boolean = false;
  constructor(private formBuilder: FormBuilder,private router:Router) {
  }
  ngOnInit(): void {
    this.formBinding()
  }
  formBinding() {
    this.form = this.formBuilder.group({
      cashAmount: [''],
      saleAmount: ['']
    });
  }
  keyboard() {
    this.showKeyboard = true;
  }
  submit() {
  this.router.navigate(['home']);
    // alert(this.form.value.saleAmount);
  }

  addValue(value: number) {
    if (value < 0) {
      this.showKeyboard = false;
    } else {
      this.saleAmount = value
      this.cashAmount = value;
    }
    // }
    // addValue(value: number) {
    //   const activeElement = document.activeElement;

    //   if (activeElement === this.saleInputRef.nativeElement) {
    //     // Update the saleAmount value or perform any other logic
    //     console.log('Sale Amount:', value);
    //   } else if (activeElement === this.cashInputRef.nativeElement) {
    //     // Update the cashAmount value or perform any other logic
    //     console.log('Cash Amount:', value);
    //   }

    //   this.showKeyboard = false;
    // }
  }
}
