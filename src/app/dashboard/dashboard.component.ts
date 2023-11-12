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
  paginatorLength: number = 0;
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons() {
    this.personService.getPersons(this.currentPage, 10).subscribe((persons) => {
      this.dataSource = persons.results;
      this.isPersonsLoading = false;
      this.paginatorLength = persons.count;
    });
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex + 1;
    this.loadPersons();
  }

  openDetail() {
    console.log('openDetail');
  }
}
