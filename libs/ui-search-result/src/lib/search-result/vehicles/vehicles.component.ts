import { Component, Input } from '@angular/core';

export interface Vehicle {
  name: string;
  model: string;
  vehicle_class: string;
  crew: string;
  cost_in_credits: string;
}

@Component({
  selector: 'starwars-search-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent {
  @Input() vehicle: Vehicle;
}
