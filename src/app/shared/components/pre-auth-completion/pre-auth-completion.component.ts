import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-pre-auth-completion',
  templateUrl: './pre-auth-completion.component.html',
  styleUrls: ['./pre-auth-completion.component.css']
})
export class PreAuthCompletionComponent {
  form: FormGroup = new FormGroup({});
  codes: any[] = ['142', '143', '587']
  showKeyboard: boolean = false;
  numericValue: number = 0;
  code: any;
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
  }
  ngOnInit(): void {
    this.formBinding();

  }
  formBinding() {
    this.form = this.formBuilder.group({
      amount: [''],
      code: ['']
    });
  }
  //===========================
  
  selectedCode(value: any) {
    this.code = value;
    // console.log(value);

   
  }
  // testing() {
  //   alert(this.code)
  // }
  //===========================
  submit() {
    this.selectedCode(this.code);
    this.form.value.amount = this.numericValue
    this.form.value.code = this.code
    alert(this.form.value.code);

    // const data: NavigationExtras = {
    //   state: {
    //     price: this.form.value.amount
    //   },
    // };
    // this.router.navigate(['pay'], data);
  }
}
