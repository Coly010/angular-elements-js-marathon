import { Component, Input } from '@angular/core';

export interface Film {
  title: string;
  episode_id: number;
  release_date: string;
  director: string;
  producer: string;
}

@Component({
  selector: 'starwars-search-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent {
  @Input() film: Film;
}
