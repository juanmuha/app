import { TareaModel } from "./../models/tarea.model";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AdmintareasService {
  _widthW: string;
  _showTareas: boolean;

  listaTareas: TareaModel[] = [];

  constructor(private router: Router) {
    this._widthW = "100%";

    this.listaTareas.push({
      idempleado: 1,
      id: 1,
      nombre: "Corrección en Factura (moneda)",
      descripcion: "Debe validar que indique la moneda al capturar",
      concluida: false,
      fechaAsignacion: new Date(),
    });

    this.listaTareas.push({
      idempleado: 1,
      id: 2,
      nombre: "Llamar a Misael para capacitación PUS",
      descripcion: "Comunicarse con Misael para programar la entrega del módulo.",
      concluida: false,
      fechaAsignacion: new Date(),
    });

    this.listaTareas.push({
      idempleado: 2,
      id: 1,
      nombre: "Capacitación personal nuevo ingreso",
      descripcion: ".",
      concluida: false,
      fechaAsignacion: new Date(),
    });
  }

  mostrarTareas() {
    this._widthW = "60%";
    this._showTareas = true;
  }

  ocultarTareas() {
    this._widthW = "100%";
    this._showTareas = false;
  }

  agregarTarea(tarea:TareaModel)
  {
    let max=1;
    this.listaTareas.filter(e => e.idempleado==tarea.idempleado).forEach(element => {
      if(element.id>max)
      {
        max=element.id;
      }
    });
    tarea.id=max+1;
    this.listaTareas.push(tarea);
  }

  obtenerTareasEmpleado(idemp: number): TareaModel[] {
    return this.listaTareas.filter(e => e.idempleado == idemp);
  }

  marcarConcluida(tarea: TareaModel) {
    let i = this.listaTareas.findIndex(
      e => {
        return e.idempleado == tarea.idempleado && e.id == tarea.id
      });    
    
    this.listaTareas[i].concluida = !this.listaTareas[i].concluida;    
  }
}
