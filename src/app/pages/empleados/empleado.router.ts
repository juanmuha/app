import { TareasComponent } from './../tareas/tareas.component';
import { Component } from '@angular/core';
import { EmpleadoGuard } from "./../../servicies/empleado.guard";
import { CanDeactivate } from "@angular/router/src/utils/preactivation";
import { ListaEmpleadosComponent } from "./lista-empleados/lista-empleados.component";
import { RegistroEmpleadoComponent } from "./registro/registroEmp.component";

export const EMP_ROUTES = [
  {
    path: "registroEmp/:id",
    component: RegistroEmpleadoComponent,
    canDeactivate: [EmpleadoGuard],
  },
  {
    path: "listaEmp",
    component: ListaEmpleadosComponent,
    children: [{ path: "tarea/:id", component:TareasComponent }],
  },
  { path: "**", pathMatch: "full", redirectTo: "listaEmp" },
];
