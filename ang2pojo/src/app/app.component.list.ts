import {Component} from '@angular/core';
import {Location} from '@angular/common';

import {CustomerService} from './app.service.customers'
import {Customers} from './app.service.model'
import {SharedValue} from './app.service.SharedValue'

@Component({
	moduleId: module.id,
	selector:'list',
	templateUrl:'./app.component.list.html',
	styleUrls: ['./app.component.css']
})
export class ListComponent {
	public currentPage:number;
	public totalItems:number ;
  	public itemsPerPage:number;
	public searchtxt : string;
	public searchField : string;
	public availableOptions :any;
	public filteredCustomers :Array<string>;
	public deleted :boolean;
	public deletedSuccessfully: string;

	constructor(private customerService : CustomerService,private location:Location,private sharedValue:SharedValue){
		console.log("calling list constructor");
		console.log("this.totalItems "+this.totalItems);
		this.itemsPerPage = 5;
		this.searchtxt = '';
	  	this.searchField = '--Select the Field--';
	  	this.availableOptions = ["customerid","name","email","phone","address","orders","action","createddate","createdby","modifieddate","modifiedby","--Select the Field--"];

	}

	ngOnInit(){
		console.log("inside onInit");
		this.getAllItems();
	}
	
	search	=	function(){
		console.log("inside search");
		console.log("searchtxt " +this.searchtxt);
		console.log("searchField "+this.searchField);
		this.searchService(this.searchtxt,this.searchField);
	}

	clear	=	function(){
		console.log("inside clear function");
		this.searchtxt = '';
		this.searchField = '--Select the Field--';
		this.getAllItems();
	}

	edit = function(editCustomer) {
		console.log("inside call edit service");
		this.sharedValue.setValue(true);
		this.sharedValue.setCustomer(editCustomer);
	}

	deleteCustomers = function(){
		console.log("inside delete customers");
		let CustomersToBeDeleted = [];
		let allCustomers = this.filteredCustomers;
		for(let i=0; i < allCustomers.length; i++){
			if(allCustomers[i].remove){
				delete allCustomers[i]['remove'];
				CustomersToBeDeleted.push(allCustomers[i]);
			}
		}

		this.deleteAll(CustomersToBeDeleted); 
	}

	showAddPage = function(){
		console.log("inside show add page");
		this.sharedValue.setValue(false);
	}

	private getAllItems = function(){
		this.customerService.getAllCustomers().subscribe(
			(data:Customers[]) => this.getAllSuccess(data),
			error => error(error),
			() => console.log("gets all the customers"));
	}

	private getAllSuccess = function(data){
		this.filteredCustomers = data;
		console.log("got all the datas from DB");
	}

	private deleteAll = function(CustomersToBeDeleted){
		this.customerService.deleteCustomers(CustomersToBeDeleted)
		.subscribe(data => this.deleteSuccess(),
					error => error(error),
					() => this.nextCallRefresh());
	}
	
	private deleteSuccess(){
		console.log("customers deleted successfully");
		this.deleted =  true;
		this.deletedSuccessfully = "Datas Deleted Successfully"
		this.removeText();
	}

	private removeText(){
		setTimeout(() => {
			this.deletedSuccessfully = '';
		},2000);
	}

	private error(error){
		console.log("error" + error);
	}

	private nextCallRefresh(){
		console.log("calling the refresh list");
		this.getAllItems();
	}
	
	private searchService = function(searchtxt,searchField){
		this.customerService.searchCustomer(searchtxt,searchField)
		.subscribe(
			(data:Customers[]) => this.searchSuccess(data),
			error => error(error),
			() => console.log("search returned successfully"));
	}	

	private searchSuccess = function(data){
		this.filteredCustomers = data;
	}
}
