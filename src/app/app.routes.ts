import { Routes } from '@angular/router';
import { ListadoVentasComponent } from './components/listado-ventas/listado-ventas.component';
import { AgregarEditarVentasComponent } from './components/agregar-editar-ventas/agregar-editar-ventas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { PowerbiComponent } from './components/powerbi/powerbi.component';

export const routes: Routes = [
    { path: '', component: InicioComponent},
    { path: 'ventas', component: ListadoVentasComponent},
    { path: 'agregarVentas', component: AgregarEditarVentasComponent},
    { path: 'editar/:id', component: AgregarEditarVentasComponent},
    { path: 'perfil', component: PerfilComponent},
    { path: 'admin/inicioAdmin', component: InicioAdminComponent},
    { path: 'admin/usuarios', component: ListadoUsuariosComponent},
    { path: 'admin/ventas', component: ListadoVentasComponent},
    { path: 'admin/powerbi', component: PowerbiComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
