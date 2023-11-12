import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonService } from '../persons/person.service';
import { Person } from '../interfaces/person.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'familly_id',
    'id',
    'first_name',
    'last_name',
    'events',
    'relations',
  ];
  dataSource: Person[] = [];
  currentPage: number = 1;
  isPersonsLoading: boolean = true;
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersons().subscribe((persons) => {
      console.log(persons);
      this.dataSource = persons.results;
      this.isPersonsLoading = false;
    });
  }

  handlePageEvent(pageEvent: PageEvent) {
    console.log('handlePageChange', pageEvent);
    this.currentPage = pageEvent.pageIndex;
  }

  openDetail() {
    console.log('openDetail');
  }
}
