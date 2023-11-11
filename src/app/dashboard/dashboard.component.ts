import { Component } from '@angular/core';

export interface PeriodicElement {
  familly_id: number;
  id: number;
  name: string;
  events: number;
  relations: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { familly_id: 1, id: 1, name: 'el hadji sarr', events: 1, relations: 2 },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  displayedColumns: string[] = ['familly_id', 'id', 'name', 'events', 'relations'];
  dataSource = ELEMENT_DATA;
}
