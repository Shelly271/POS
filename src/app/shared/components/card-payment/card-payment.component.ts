import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent {
  form: FormGroup = new FormGroup({})
  showKeyboard: boolean = false;
  price: number | undefined;
  amount:any = 'R1200'
  pin:number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private route: ActivatedRoute) {
      
        // Access the 'price' value passed via state
        
      
  }
  keyboard() {
    this.showKeyboard = true;
  }
   addValue(value: number) {
    if (value < 0) {
      this.showKeyboard = false;
    } else {
      this.pin = value;
    }
  }
 
  ngOnInit(): void {
    // const value = this.router.getCurrentNavigation()?.extras.state?.price;
    // console.log(value);
    this.formBinding();
    this.price = this.route.snapshot?.data?.['state']?.price;
        console.log("yilena-1 " + this.price);

  } 
  formBinding() {
    this.form = this.formBuilder.group({
      pin: []
    });
  }
  
  submit() {
    this.router.navigate(['']);
    alert(this.pin)
    this.form.value.pin = (this.pin)
  }
}
