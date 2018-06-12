import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  //* create array to hold data from service
  clientList: Client[] = [];

  //* create a search term 
  searchClientFirstName: string;


  //* create func to retrieve data from service
  getClients() {
      this.customerService.getClients(this.searchClientFirstName).subscribe(data => this.clientList = data);
  }
  constructor(private customerService: CustomersService) { }

  ngOnInit() {
    this.searchClientFirstName = undefined;
    this.getClients();
  }

}
