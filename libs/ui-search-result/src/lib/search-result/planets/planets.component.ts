import { Component, Input } from '@angular/core';

export interface Planet {
  name: string;
  population: number;
  terrain: string;
  rotation_period: string;
  orbital_period: string;
}

@Component({
  selector: 'starwars-search-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent {
  @Input() planet: Planet;
}
