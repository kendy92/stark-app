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

  //* create func to return car stock 
  getCars(): Observable< Car[] > {
    
    return of(this.carInventory);
  }

  constructor() { }
}
