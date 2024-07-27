import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {
  // public myForm:FormGroup = new FormGroup({
  //   name: new FormControl('',[],[]),
  //   price: new FormControl(0,[],[]),
  //   inSrorage: new FormControl(0,[],[]),

  // })

  public myForm: FormGroup = this.fb.group({
    name:["",[Validators.required,Validators.minLength(3)]],
    price:[0,[Validators.required, Validators.min(0)]],
    inStorage:[0,[Validators.required,Validators.min(0)]]
  })
  constructor(private fb:FormBuilder){}
  onSave():void{
    if (this.myForm.invalid) return;
    console.log(this.myForm.value);
    this.myForm.reset({price:10,inStorage:3})
  }
}
