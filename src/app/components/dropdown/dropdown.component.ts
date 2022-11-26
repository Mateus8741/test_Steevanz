import { Component } from '@angular/core';
import { Countries } from 'src/app/models/countries.model';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  a: Countries[] = [];

  constructor(public listService: ListService) {}

  ngOnInit(): void {
    this.getCountriesName();
  }

  getCountriesName() {
    this.listService.getCountries().subscribe((data: any) => {
      data.forEach((country: any) => {
        const countries = country.name.common;
        console.log(countries);
      });
    });
  }
}
