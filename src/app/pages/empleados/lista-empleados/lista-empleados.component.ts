import { EmpleadoModel } from './../../../models/empleado.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html'
})
export class ListaEmpleadosComponent implements OnInit {

  listaEmpleados: EmpleadoModel[]=[
    {
      id:1,
      nombre:"Juan Alberto Murrieta Hadar",
      email:"juanmuha@gmail.com",
      rfc:"MUHJ850824A59",
      edad:35,
      sueldo:15.50
    },
    {
      id:2,
      nombre:"Juan Alberto Murrieta Hadar",
      email:"juanmuha@gmail.com",
      rfc:"MUHJ850824A59",
      edad:35,
      sueldo:15.50
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
