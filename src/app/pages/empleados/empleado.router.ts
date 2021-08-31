import { EmpleadoGuard } from './../../servicies/empleado.guard';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistroEmpleadoComponent } from "./registro/registroEmp.component";

export const EMP_ROUTES=
[
    { 
        path:"registroEmp/:id", 
        component:RegistroEmpleadoComponent,        
        canDeactivate: [ EmpleadoGuard ]
    },
    { path:"listaEmp", component:ListaEmpleadosComponent },
    { path:"**", pathMatch:"full", redirectTo:'registroEmp' }
]