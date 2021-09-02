import { AdmintareasService } from "./../../../servicies/admintareas.service";
import { EmpleadosService } from "./../../../servicies/empleados.service";
import { EmpleadoModel } from "./../../../models/empleado.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-lista-empleados",
  templateUrl: "./lista-empleados.component.html",
  styles: [``],
})
export class ListaEmpleadosComponent implements OnInit {
  _widthVentama         : string;
  _mostrarVentanaTareas : boolean;
  listaEmpleados        : EmpleadoModel[];

  constructor(
    private servicioEmpleados: EmpleadosService,
    public adminTareasService: AdmintareasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listaEmpleados = this.servicioEmpleados.obtenerTodos();
    this.adminTareasService._widthW="100%";
    //this._widthVentama = "100%";
  }

  eliminar(id: number) {
    const confirm = window.confirm(
      `Desea eliminar el Empleado con la clave ${id}`
    );
    if (confirm) {
      this.servicioEmpleados.eliminarEmpleado(id);
    }
  }

  mostrarVentanaTareas(id:number) {
    this.adminTareasService.mostrarTareas();
    console.log("desde el mostrar ventana de listaemp id:");
    console.log(id);
    this.router.navigate(["/home/listaEmp/tarea", id]);
  }
}
