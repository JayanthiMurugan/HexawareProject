import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {CustomerService} from './app.service.customers';
import {Customers} from './app.service.model';
import {SharedValue} from './app.service.SharedValue';

@Component({
	selector:'add',
	templateUrl:'./app.component.add.html',
	styleUrls: ['./app.component.css']
})
export class AddComponent{
	public showButton : boolean;
	
	public customerid : number;
	public name : string;
	public email : string;
	public phone : string;
	public address : string;
	public orders : string;
	public action : string;
	public createddate : string;
	public createdby : string;
	public modifieddate : string;
	public modifiedby : string;

	constructor(private customerService: CustomerService,private location:Location
		,private sharedValue:SharedValue,private router:Router) {
		console.log("inside add componenet constructor");
		if(this.sharedValue.getValue() === true){
			
			this.customerid = this.sharedValue.getCustomer().customerid;
			this.name = this.sharedValue.getCustomer().name;
			this.email = this.sharedValue.getCustomer().email;
			this.phone = this.sharedValue.getCustomer().phone;
			this.address = this.sharedValue.getCustomer().address;
			this.orders = this.sharedValue.getCustomer().orders;
			this.action = this.sharedValue.getCustomer().action;
			this.createddate = this.sharedValue.getCustomer().createddate;
			this.createdby = this.sharedValue.getCustomer().createdby;
			this.modifieddate = this.sharedValue.getCustomer().modifieddate;
			this.modifiedby = this.sharedValue.getCustomer().modifiedby;
			
		}else{
			
			this.customerid = null;
			this.name = '';
			this.email = '';
			this.phone = '';
			this.address = '';
			this.orders = '';
			this.action = '';
			this.createddate = '';
			this.createdby = '';
			this.modifieddate = '';
			this.modifiedby = '';
		}
		this.location = location;
		this.showButton = this.sharedValue.getValue();
	}

	

	add = function (){
		console.log("add method");
		let customerObj = new Customers(
		this.customerid,this.name,this.email,this.phone,this.address,this.orders,this.action,this.createddate,this.createdby,this.modifieddate,this.modifiedby);
		console.log("converting into customers obj");
		console.log(customerObj);
		this.insertCustomers(customerObj);
	}	

	update = function(){
		console.log("update method called");
		delete this.sharedValue.getCustomer()['delete'];
		let customerObj = new Customers(
		this.customerid,this.name,this.email,this.phone,this.address,this.orders,this.action,this.createddate,this.createdby,this.modifieddate,this.modifiedby);
		this.updateService(customerObj);
	}

	private insertCustomers = function(customerObj){
		this.customerService.saveCustomer(customerObj)
		.subscribe(data => this.saveSuccess(),
					error => error(),
					() => this.refreshFeed());
	}

	private saveSuccess(){
		console.log("datas inserted successfully")
	}

	private refreshFeed(){
		console.log("will refresh the page");
		this.router.navigate(['list']);
	}

	private updateService = function(customerObj){
		this.customerService.updateCustomer(customerObj)
		.subscribe(data => this.updateSuccess(),
					error => error(),
					() => this.goToHome());
	}

	private updateSuccess = function(){
		console.log("updated successfully");
	}

	private goToHome(){
		console.log("will refresh the page");
		this.router.navigateByUrl('/list');
	}

}
