import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notas',
  imports: [],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  constructor(private router: Router) {}

  Notas() {
    this.router.navigate(['/notas']);
  }
  Inicio() {
    this.router.navigate(['/']);
  }

}
