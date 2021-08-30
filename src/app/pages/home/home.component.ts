import { EmpleadoModel } from './../../models/empleado.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empleado:EmpleadoModel;

  constructor() { }

  ngOnInit() {
    this.empleado = new EmpleadoModel();
    this.empleado.nombre="Juan Alberto Murrieta";
    this.empleado.edad=0;
    this.empleado.sueldo=123.30;
  }

  submit(form:NgForm){
    console.log(form);
  }
}
