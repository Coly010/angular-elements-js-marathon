import { Component, Input } from '@angular/core';

export interface Species {
  name: string;
  classification: string;
  designation: string;
  language: string;
  average_lifespan: string;
}

@Component({
  selector: 'starwars-search-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],
})
export class SpeciesComponent {
  @Input() species: Species;
}
