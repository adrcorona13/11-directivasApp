import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  form: FormGroup = this.fb.group({
    nombre: ['a',[Validators.required],[]]
  });

  constructor(private fb: FormBuilder){}

  tieneError(campo: string): boolean{
    return this.form.get(campo)?.invalid || false;
  }
}
