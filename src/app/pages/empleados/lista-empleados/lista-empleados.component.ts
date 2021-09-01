import { EmpleadosService } from './../../../servicies/empleados.service';
import { EmpleadoModel } from './../../../models/empleado.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styles: [`
    
  `]
})
export class ListaEmpleadosComponent implements OnInit {

  listaEmpleados: EmpleadoModel[];
  constructor(
    private servicioEmpleados:EmpleadosService
  ) { }

  ngOnInit() {
    this.listaEmpleados = this.servicioEmpleados.obtenerTodos();
  }

  eliminar(id:number)
  {
    const confirm =window.confirm(`Desea eliminar el Empleado con la clave ${ id }`);
    if(confirm)
    {
      this.servicioEmpleados.eliminarEmpleado(id);
    }
  }
}
