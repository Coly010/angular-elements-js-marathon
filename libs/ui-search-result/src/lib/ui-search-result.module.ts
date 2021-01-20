import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-result/search-result.component';
import { FilmsComponent } from './search-result/films/films.component';
import { PeopleComponent } from './search-result/people/people.component';
import { PlanetsComponent } from './search-result/planets/planets.component';
import { SpeciesComponent } from './search-result/species/species.component';
import { StarshipsComponent } from './search-result/starships/starships.component';
import { VehiclesComponent } from './search-result/vehicles/vehicles.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SearchResultComponent,
    FilmsComponent,
    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
  ],
  exports: [SearchResultComponent],
})
export class UiSearchResultModule {}
