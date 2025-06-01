import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { VentasService } from '../../services/ventas.service';
import { venta } from '../../interfaces/ventas';
import { BarraPComponent } from '../../shared/barra-p/barra-p.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-agregar-editar-ventas',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, BarraPComponent, NgIf],
  templateUrl: './agregar-editar-ventas.component.html',
  styleUrl: './agregar-editar-ventas.component.css'
})
export class AgregarEditarVentasComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'venta nueva'
  constructor(private fb: FormBuilder, private _ventaService: VentasService, private router: Router, private aRoute: ActivatedRoute){
    this.form = this.fb.group({
      producto: ['', Validators.required],
      cantidad: ['', Validators.required],
      precio: ['', Validators.required],
      usuario: ['', Validators.required],
    })
    this.id = Number(aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if(this.id != 0){
      //editar
      this.operacion = 'Modificar venta';
      this.getVentas(this.id);
    }
  }

  addVentas(){
    const venta: venta = {
      product_name: this.form.value.producto,
      quantity: this.form.value.cantidad,
      unit_price: this.form.value.precio,
      created_by: this.form.value.usuario
    }
    if(this.id != 0){
      //editar
      this.loading = true;
      venta.id = this.id;
      this._ventaService.updateVenta(this.id, venta).subscribe(() => {
        this.loading = false;
        this.router.navigate(['/ventas']);
      })
    } else {
      //agregar
      this.loading = true;
      this._ventaService.saveVenta(venta).subscribe(() => {
        this.loading = false;
        this.router.navigate(['/ventas']);
      })
    }
    
  }

  getVentas(id:number){
    this.loading = true;
    this._ventaService.getVenta(id).subscribe((data:venta) => {
      console.log(data)
      this.loading = false;
      this.form.setValue({
        producto: data.product_name,
        cantidad: data.quantity,
        precio: data.unit_price,
        usuario: data.created_by
      })
    })
  }
}
