import { EmpleadoModel } from './../models/empleado.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private empleados:EmpleadoModel[];

  constructor() { 

    this.empleados = [
    {
      id:1,
      nombre:"Juan Alberto Murrieta Hadar",
      email:"juanmuha@gmail.com",
      rfc:"MUHJ850824A59",
      edad:35,
      sueldo:15000.50
    },
    {
      id:2,
      nombre:"Norma Alicia Quintero",
      email:"noralq@gmail.com",
      rfc:"QNGF850824A59",
      edad:15,
      sueldo:20520.50
    }
  ];

  }

  obtenerEmpleado(id:number)
  {
    return this.empleados.find( (e)=> e.id==id);
  }

  agregarEmpleado(empleado:EmpleadoModel)
  {
    let max=1;
    this.empleados.forEach(element => {
      if(max<element.id)   
      {
        max=element.id;
      }   
    });
    empleado.id=max+1;
    this.empleados.push(empleado);
  }

  eliminarEmpleado(id:number)
  {
    this.empleados.splice(
      this.empleados.findIndex((e)=>e.id==id),
      1
    );
  }

  obtenerTodos()
  {
    return this.empleados;
  }

  modificarEmpleado(empleado:EmpleadoModel)
  {
    this.empleados.forEach(element => {
      if(element.id == empleado.id)
      {
        element.nombre = empleado.nombre;
        element.email  = empleado.email;
        element.edad   = empleado.edad;
        element.sueldo = empleado.sueldo;
      }
    });
  }

}
