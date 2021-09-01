import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, OnChanges {

  usuario: UsuarioModel;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("cambios");
  }

  ngOnInit() { 
    this.usuario =new UsuarioModel();

    console.log(this.usuario);  
  }

  

  onSubmit(form:NgForm)
  {
    console.log(form);
        
    if(!form.valid)
    {
      if(!form.controls["email"].valid)
      {
        console.log("correo invalido");
      }
      if(!form.controls["nombre"].valid)
      {
        console.log("nombre invalido");
      }
      if(!form.controls["pass"].valid)
      {
        console.log("password invalido");
      }
      return false;
    }    
    console.log(this.usuario);
  }
}
