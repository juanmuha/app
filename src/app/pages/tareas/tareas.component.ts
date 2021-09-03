import { TareaModel } from './../../models/tarea.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmintareasService } from './../../servicies/admintareas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styles: []
})
export class TareasComponent implements OnInit {

  listaTareas: TareaModel[] = [];
  _esNuevaTareaActivado: boolean;
  idEmp: number;

  constructor(
    private admiTareaService: AdmintareasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.idEmp = param["id"];
      this.listaTareas = this.admiTareaService.obtenerTareasEmpleado(this.idEmp);
      this._esNuevaTareaActivado = false;
    });
  }

  cerrar() {
    this.admiTareaService.ocultarTareas();
  }

  marcarConcluida(tarea: TareaModel) {
    this.admiTareaService.marcarConcluida(tarea);
  }

  nuevaTarea() {
    this._esNuevaTareaActivado = true;
    this.router.navigate([`/home/listaEmp/tarea/${this.idEmp}/nuevaTarea/`, this.idEmp])
  }

  refrescarTareas(item: string) {
    if (item == "1") {
      this.listaTareas = this.admiTareaService.obtenerTareasEmpleado(this.idEmp);
    } else {
      this._esNuevaTareaActivado = false;
    }
  }
}
