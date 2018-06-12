import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CLIENTLIST } from './clientlist';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

 //* create client array to hold data from server
 clientLists: Client[] = CLIENTLIST;

 //* create a new client array to hold search results
 clientResults: Client[] = [];

 //* create func to return client list
 getClients(clientName?: string): Observable< Client[] > {
   
   if(clientName === undefined) {
     return of(this.clientLists);
   }else{
     this.clientResults = []; //* empty array before making a new search request
      
      for(let client of this.clientLists) { //* loop through the data from server 
       if(clientName.toLowerCase() === client.firstName.toLowerCase() || clientName.toLowerCase() === client.lastName.toLowerCase()) { //* return clients if match
         this.clientResults.push(client); //* push search cars to array
       }
     }
     return of(this.clientResults); //* return result to customer component
   }
   
 }

  constructor() { }
}
