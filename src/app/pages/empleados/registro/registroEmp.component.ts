import { EmpleadoModel } from './../../../models/empleado.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registroEmp',
  templateUrl: './registroEmp.component.html'
})
export class RegistroEmpleadoComponent implements OnInit {

  empleado:EmpleadoModel;

  constructor() { }

  ngOnInit() {
    this.empleado = new EmpleadoModel();
  }

  submit(form:NgForm)
  {

  }

}
