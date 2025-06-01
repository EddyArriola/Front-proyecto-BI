import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, NgFor, NgIf} from '@angular/common';
import { BarraPComponent } from '../../shared/barra-p/barra-p.component';
import { user } from '../../interfaces/user';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  imports: [NgFor, DatePipe, CurrencyPipe, BarraPComponent, NgIf],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent implements OnInit{
listaUser: user[] = [];
    loading: boolean = false;
    constructor(private _userService: UsuariosService){
    }

    ngOnInit(): void {
      this.getListaUser();
    }

    getListaUser(){
      this.loading =true;
      this. _userService.getAll().subscribe((data: user[]) => {
        this.listaUser = data;
        this.loading = false;
      })
    }

    deleteVenta(id: number){
      this.loading = true;
      this._userService.delete(id).subscribe(data => {
        this.getListaUser();
      })
    }
}
