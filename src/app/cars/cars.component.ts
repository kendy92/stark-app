import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  //* create array to hold data from service
  carInventory: Car[] = [];

  //* create func to retrieve data from service
  getCars() {
    this.carService.getCars().subscribe(data => this.carInventory = data);
  }

  constructor(private carService: CarsService) { }

  ngOnInit() {
    this.getCars();
  }

}
