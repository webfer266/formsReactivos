import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {
  public myForm: FormGroup= this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    favoriteGames:this.fb.array([],)
  });

  public newForm: FormControl= new FormControl('',Validators.required)
constructor(private fb: FormBuilder){}

get favoriteGames(){
  return this.myForm.get('favoriteGames') as FormArray;
}

onDelete(index:number):void{
  this.favoriteGames.removeAt(index)
}
onAdd():void{
  if (this.newForm.invalid) return;

  console.log(this.newForm.value);
  const newGame=this.newForm.value
  this.favoriteGames.push(
  this.fb.control({"nameOption":newGame},Validators.required));
  this.newForm.reset();

}
onSubmit():void{
  if (this.myForm.invalid) {
    this.myForm.markAllAsTouched();
    return;
  }
  console.log(this.myForm.value);
  this.myForm.reset();

}
}
