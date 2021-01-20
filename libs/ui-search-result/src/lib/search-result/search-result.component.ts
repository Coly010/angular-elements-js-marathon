import { Component, Input, OnInit } from '@angular/core';
import { Film } from './films/films.component';
import { Person } from './people/people.component';
import { Planet } from './planets/planets.component';
import { Species } from './species/species.component';
import { Starship } from './starships/starships.component';
import { Vehicle } from './vehicles/vehicles.component';

@Component({
  selector: 'starwars-search-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  @Input() searchData: Film & Person & Planet & Species & Starship & Vehicle;

  isPerson = false;
  isFilm = false;
  isPlanet = false;
  isSpecies = false;
  isStarship = false;
  isVehicle = false;

  ngOnInit(): void {
    this.isPerson = this.searchData && this.searchData.height !== undefined;
    this.isFilm = this.searchData && this.searchData.episode_id !== undefined;
    this.isPlanet =
      this.searchData && this.searchData.rotation_period !== undefined;
    this.isSpecies =
      this.searchData && this.searchData.classification !== undefined;
    this.isStarship =
      this.searchData && this.searchData.starship_class !== undefined;
    this.isVehicle =
      this.searchData && this.searchData.vehicle_class !== undefined;
  }
}
