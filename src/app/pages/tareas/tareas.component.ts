import { TareaModel } from './../../models/tarea.model';
import { ActivatedRoute } from '@angular/router';
import { AdmintareasService } from './../../servicies/admintareas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styles: []
})
export class TareasComponent implements OnInit {

  listaTareas:TareaModel[]=[];

  constructor(
    private admiTareaService:AdmintareasService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param =>
      {
        console.log(param["id"]);        
        this.listaTareas = this.admiTareaService.obtenerTareasEmpleado(param["id"]);
        console.log(this.listaTareas);
        // this.listaTareas = this.admiTareaService.listaTareas;
        // console.log(this.listaTareas);
      });
  }

  cerrar()
  {
    this.admiTareaService.ocultarTareas();
  }

  marcarConcluida(tarea:TareaModel)
  {
    this.admiTareaService.marcarConcluida(tarea);
  }
}
