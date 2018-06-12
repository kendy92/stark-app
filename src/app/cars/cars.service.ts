import { Injectable } from '@angular/core';

import { Car } from '../cars/car';
import { CARLIST } from '../cars/carlist';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  //* create car stock array to hold data from server
  carInventory: Car[] = CARLIST;

  //* create a new car array to hold search cars
  carResults: Car[] = [];

  //* create func to return car stock 
  getCars(favouriteCar?: string): Observable< Car[] > {
    
    if(favouriteCar === undefined) {
      return of(this.carInventory);
    }else{
      this.carResults = []; //* empty array before making a new search request
       
       for(let car of this.carInventory) { //* loop through the data from server 
        if(favouriteCar.toLowerCase() === car.make.toLowerCase()) { //* return fav car if match
          this.carResults.push(car); //* push search cars to array
        }
      }
      return of(this.carResults); //* return result to comp
    }
    
  }

  constructor() { }
}
