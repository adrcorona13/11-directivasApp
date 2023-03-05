import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  color: string = 'red'
  textDirective: string = 'Custom text'

  form: FormGroup = this.fb.group({
    nombre: ['',[Validators.required],[]]
  });

  constructor(private fb: FormBuilder){
    console.log(this.textDirective);
  }

  tieneError(campo: string): boolean{
    return this.form.get(campo)?.invalid || false;
  }

  guardar(){
    this.textDirective = Math.random().toString();
  }

  cambiarColor(){
    this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
