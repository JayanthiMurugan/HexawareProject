import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {ProductService} from './app.service.products';
import {Products} from './app.service.model';
import {SharedValue} from './app.service.SharedValue';

@Component({
	selector:'add',
	templateUrl:'./app.component.add.html',
	styleUrls: ['./app.component.css']
})
export class AddComponent{
	public showButton : boolean;
	
	public productid : number;
	public name : string;
	public categoryid : number;
	public description : string;
	public action : string;
	public price : number;
	public quantity : number;
	public createddate : string;
	public createdby : string;
	public modifieddate : string;
	public modifiedby : string;

	constructor(private productService: ProductService,private location:Location
		,private sharedValue:SharedValue,private router:Router) {
		console.log("inside add componenet constructor");
		if(this.sharedValue.getValue() === true){
			
			this.productid = this.sharedValue.getProduct().productid;
			this.name = this.sharedValue.getProduct().name;
			this.categoryid = this.sharedValue.getProduct().categoryid;
			this.description = this.sharedValue.getProduct().description;
			this.action = this.sharedValue.getProduct().action;
			this.price = this.sharedValue.getProduct().price;
			this.quantity = this.sharedValue.getProduct().quantity;
			this.createddate = this.sharedValue.getProduct().createddate;
			this.createdby = this.sharedValue.getProduct().createdby;
			this.modifieddate = this.sharedValue.getProduct().modifieddate;
			this.modifiedby = this.sharedValue.getProduct().modifiedby;
			
		}else{
			
			this.productid = null;
			this.name = '';
			this.categoryid = null;
			this.description = '';
			this.action = '';
			this.price = null;
			this.quantity = null;
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
		let productObj = new Products(
		this.productid,this.name,this.categoryid,this.description,this.action,this.price,this.quantity,this.createddate,this.createdby,this.modifieddate,this.modifiedby);
		console.log("converting into products obj");
		console.log(productObj);
		this.insertProducts(productObj);
	}	

	update = function(){
		console.log("update method called");
		delete this.sharedValue.getProduct()['delete'];
		let productObj = new Products(
		this.productid,this.name,this.categoryid,this.description,this.action,this.price,this.quantity,this.createddate,this.createdby,this.modifieddate,this.modifiedby);
		this.updateService(productObj);
	}

	private insertProducts = function(productObj){
		this.productService.saveProduct(productObj)
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

	private updateService = function(productObj){
		this.productService.updateProduct(productObj)
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
