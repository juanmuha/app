import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistroEmpleadoComponent } from "./registro/registroEmp.component";

export const EMP_ROUTES=
[
    { path:"registroEmp:id", component:RegistroEmpleadoComponent },
    { path:"listaEmp", component:ListaEmpleadosComponent },
    { path:"**", pathMatch:"full", redirectTo:'registroEmp' }
]