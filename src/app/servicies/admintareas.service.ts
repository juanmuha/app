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
      nombre: "Corrección en Factura (moneda)",
      descripcion: "Debe validar que indique la moneda al capturar",
      concluida: false,
      fechaAsignacion: new Date(),
    });

    this.listaTareas.push({
      idempleado: 1,
      nombre: "Llamar a Misael para capacitación PUS",
      descripcion: "Comunicarse con Misael para programar la entrega del módulo.",
      concluida: false,
      fechaAsignacion: new Date(),
    });

    this.listaTareas.push({
      idempleado: 2,
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

  obtenerTareasEmpleado(idemp:number):TareaModel[]
  {
    return this.listaTareas.filter(e=>e.idempleado==idemp);
  }
}
