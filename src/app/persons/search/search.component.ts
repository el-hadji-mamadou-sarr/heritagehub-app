import { Component } from '@angular/core';
import { Person } from '../../interfaces/person.interface';
import { PersonService } from '../person.service';
import { PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchForm: FormGroup;
  search : string = '';

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
  constructor(private personService: PersonService,private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search_value: [''],
      
    });
  }
  onSubmit(){
    this.search= this.searchForm.value.search_value
    if(!this.search){
      return
    }
    console.log(this.search)
    this.loadPersons()
  }

  ngOnInit(): void {
    this.dataSource =[]
  }


  loadPersons() {
    this.personService.searchPersons(this.currentPage, 10, this.search).subscribe((persons) => {
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
