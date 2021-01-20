import { Component, Input } from '@angular/core';

export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
  birth_year: string;
}

@Component({
  selector: 'starwars-search-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() person: Person;
}
