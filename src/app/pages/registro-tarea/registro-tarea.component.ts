import { AdmintareasService } from './../../servicies/admintareas.service';
import { TareaModel } from './../../models/tarea.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import "jquery"
import { NgForm } from '@angular/forms';
declare var $:JQueryStatic;

@Component({
  selector: 'app-registro-tarea',
  templateUrl: './registro-tarea.component.html',
  styles: []
})
export class RegistroTareaComponent implements OnInit {

  tarea:TareaModel;

  idempPrescedente:number;
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private admintareasService:AdmintareasService
  ) { }

  ngOnInit() {
     let script= document.createElement("script");
     script.innerHTML=`
     $(function()
     {

      $('#datepicker').datepicker();         
      $('#new-tarea-nombre').focus();

     });       
     `;

     /** inicializa entidad */
     this.tarea = new TareaModel();
     this.tarea.fechaAsignacion=new Date();
     this.tarea.concluida=false;

     let body = document.getElementsByTagName("body")[0];
     body.appendChild(script);
     
     
     this.activatedRoute.params.subscribe(param =>
      {
        this.idempPrescedente = param["id"];
      });
  }

  guardar(f:NgForm)
  { 
    console.log("entro a guardar");
    if(!f.valid)
      return ;

    this.tarea.idempleado=this.idempPrescedente;

    console.log(this.tarea);

    this.admintareasService.agregarTarea(this.tarea);

  }

  cerrar()
  {
    this.router.navigate(["/home/listaEmp/tarea", this.idempPrescedente]);
  }

}
