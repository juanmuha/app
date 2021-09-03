import { AdmintareasService } from './../../servicies/admintareas.service';
import { TareaModel } from './../../models/tarea.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registro-tarea',
  templateUrl: './registro-tarea.component.html',
  styles: []
})
export class RegistroTareaComponent implements OnInit {

  script;
  tarea: TareaModel;
  @Output() eventOutPut = new EventEmitter<string>();  

  idempPrescedente: number;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private admintareasService: AdmintareasService
  ) { }

  ngOnInit() {    
    this.script = document.createElement("script");
    this.script.innerHTML = `
     $(function()
     {

      $('#datepicker').datepicker();         
      $('#new-tarea-nombre').focus();

     });       
     `;

    /** inicializa entidad */
    this.tarea = new TareaModel();
    // this.tarea.nombre = "juan";
    // this.tarea.descripcion = "descri";
    this.tarea.fechaAsignacion = new Date();
    this.tarea.concluida = false;

    let body = document.getElementsByTagName("body")[0];
    body.appendChild(this.script);

    this.activatedRoute.params.subscribe(param => {
      this.idempPrescedente = param["id"];
    });
  }

  guardar(f: NgForm) {
    document.getElementById("new-tarea-nombre").focus();
    
    if (!f.valid)
      return;

    this.tarea.idempleado = this.idempPrescedente;
    this.admintareasService.agregarTarea(this.tarea);

    console.log(this.eventOutPut);
    if (this.eventOutPut) {      
      this.eventOutPut.emit("1");
    }

    this.tarea = new TareaModel();
    this.tarea.fechaAsignacion=new Date();      
  }

  cerrar() {
    if (this.eventOutPut) {      
      this.eventOutPut.emit("0");
    }
    this.router.navigate(["/home/listaEmp/tarea", this.idempPrescedente]);
  }

}
