import { Component } from '@angular/core';
import { Countries } from 'src/app/models/countries.model';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  countries: Countries[] = [];

  selectedCountry!: Countries;

  constructor(public listService: ListService) {}

  ngOnInit(): void {
    this.getCountriesName();
  }

  getCountriesName() {
    this.listService.getCountries().subscribe((data: any) => {
      this.countries = data;
    });
  }
}
