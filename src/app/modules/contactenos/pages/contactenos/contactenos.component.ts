import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from '../../components/mapa/mapa.component';

@Component({
  selector: 'app-contactenos',
  standalone: true,
  imports: [CommonModule, MapaComponent],
  templateUrl: './contactenos.component.html',
  styleUrl: './contactenos.component.css',
})
export class ContactenosComponent {}
