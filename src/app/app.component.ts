import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { Router, RouterOutlet } from '@angular/router';
import { AdminNadbarComponent } from './components/navbarAdmin/navbar-admin.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NgIf, AdminNadbarComponent],
  templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router){
  }
  isAdminRoute():boolean {
    return this.router.url.startsWith('/admin');
  }
  title = 'front_angular';
}