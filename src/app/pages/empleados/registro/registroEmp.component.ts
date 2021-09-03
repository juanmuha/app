import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { browser } from 'protractor';
import { EmpleadosService } from './../../../servicies/empleados.service';
import { EmpleadoModel } from './../../../models/empleado.model';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { CLIENT_RENEG_WINDOW } from 'tls';
import { CanComponentDeactivate } from 'src/app/servicies/empleado.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registroEmp',
  templateUrl: './registroEmp.component.html'
})
export class RegistroEmpleadoComponent implements OnInit, CanComponentDeactivate, OnChanges {

  empleado:EmpleadoModel;
  _nuevo:boolean;
  _guardo:boolean;

  constructor(
    private activatedroute:ActivatedRoute,
    private router:Router,
    private servicioEmpleado:EmpleadosService
  ) { 

    activatedroute.params.subscribe(param=>
      {
        console.log(param["id"]);
        if(param && param["id"] && param["id"]!="0")
        {
          console.log("modificar");
          this.empleado= this.servicioEmpleado.obtenerEmpleado(param["id"]);
          this._nuevo =false;
        }
        else 
        {
          console.log("registrar");
          this.empleado = new EmpleadoModel();
          this.empleado.edad=0;
          this.empleado.sueldo=0;
          this._nuevo =true;
        }
      });

      console.log("constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges registros emp");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("init");
  }

  puedeSalir(): boolean | Observable<boolean> | Promise<boolean>
  {
    if(!this._guardo) {
      const confirm = window.confirm('desea salir sin guardar cambios');      
      return confirm;   
    } 
    
    return this._guardo;
  }  

  submit(form:NgForm)
  {
    if(!form.valid)
    {
      return;
    }

    if(this._nuevo)
    {
      this.servicioEmpleado.agregarEmpleado(this.empleado);
    }else{
      this.servicioEmpleado.modificarEmpleado(this.empleado);
    }

    this._guardo =true;

    this.router.navigate(['/home/listaEmp']);
  }
}
