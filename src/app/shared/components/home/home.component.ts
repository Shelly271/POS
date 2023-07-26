import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
form: FormGroup= new FormGroup({})
  constructor(private formBuilder:FormBuilder){
  }
  formBinding(){
    this.form = this.formBuilder.group({
      amount:['']
    });
  }
  ngOnInit(): void {
    this.formBinding();
  }
  
submit(){
alert(this.form.value.amount)
}
}
