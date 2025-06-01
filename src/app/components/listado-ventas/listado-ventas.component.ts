import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VentasService } from '../../services/ventas.service';
import { venta } from '../../interfaces/ventas';
import { CurrencyPipe, DatePipe, NgFor, NgIf} from '@angular/common';
import { BarraPComponent } from '../../shared/barra-p/barra-p.component';

@Component({
  selector: 'app-listado-ventas',
  standalone: true,
  imports: [RouterLink, NgFor, DatePipe, CurrencyPipe, BarraPComponent, NgIf],
  templateUrl: './listado-ventas.component.html',
  styleUrl: './listado-ventas.component.css'
})
export class ListadoVentasComponent implements OnInit{
    listaVentas: venta[] = [];
    loading: boolean = false;
    constructor(private _ventaService: VentasService){
    }

    ngOnInit(): void {
      this.getListaVentas();
    }

    getListaVentas(){
      this.loading =true;
      this._ventaService.getAllVentas().subscribe((data: venta[]) => {
        this.listaVentas = data;
        this.loading = false;
      })
    }

    deleteVenta(id: number){
      this.loading = true;
      this._ventaService.deleteVenta(id).subscribe(data => {
        this.getListaVentas();
      })
    }
}
