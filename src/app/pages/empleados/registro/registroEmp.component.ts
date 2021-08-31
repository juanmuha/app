import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { browser } from 'protractor';
import { EmpleadosService } from './../../../servicies/empleados.service';
import { EmpleadoModel } from './../../../models/empleado.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { CLIENT_RENEG_WINDOW } from 'tls';
import { CanComponentDeactivate } from 'src/app/servicies/empleado.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registroEmp',
  templateUrl: './registroEmp.component.html'
})
export class RegistroEmpleadoComponent implements OnInit, CanComponentDeactivate {

  empleado:EmpleadoModel;
  _nuevo:boolean;

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
          this._nuevo =true;
        }
      });
  }

  ngOnInit(): void {
    
  }

  puedeSalir(): boolean | Observable<boolean> | Promise<boolean>
  {
    const confirm = window.confirm('desea salir sin guardar cambios');
    console.log("entro al deactivate");
    return confirm;    
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

    this.router.navigate(['/home/listaEmp']);
  }
}
