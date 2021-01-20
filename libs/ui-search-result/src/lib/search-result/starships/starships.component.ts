import { Component, Input } from '@angular/core';

export interface Starship {
  name: string;
  model: string;
  starship_class: string;
  crew: string;
  cost_in_credits: string;
}

@Component({
  selector: 'starwars-search-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent {
  @Input() starship: Starship;
}
