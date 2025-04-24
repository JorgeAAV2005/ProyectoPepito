import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(private router: Router) {}

  Notas() {
    this.router.navigate(['/notas']);
  }
  Tareas() {
    this.router.navigate(['/tareas']);
  }

}
