import {Component} from '@angular/core';
import {Location} from '@angular/common';

import {ProductService} from './app.service.products'
import {Products} from './app.service.model'
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
	public filteredProducts :Array<string>;
	public deleted :boolean;
	public deletedSuccessfully: string;

	constructor(private productService : ProductService,private location:Location,private sharedValue:SharedValue){
		console.log("calling list constructor");
		console.log("this.totalItems "+this.totalItems);
		this.itemsPerPage = 5;
		this.searchtxt = '';
	  	this.searchField = '--Select the Field--';
	  	this.availableOptions = ["productid","name","categoryid","description","action","price","quantity","createddate","createdby","modifieddate","modifiedby","--Select the Field--"];

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

	edit = function(editProduct) {
		console.log("inside call edit service");
		this.sharedValue.setValue(true);
		this.sharedValue.setProduct(editProduct);
	}

	deleteProducts = function(){
		console.log("inside delete products");
		let ProductsToBeDeleted = [];
		let allProducts = this.filteredProducts;
		for(let i=0; i < allProducts.length; i++){
			if(allProducts[i].remove){
				delete allProducts[i]['remove'];
				ProductsToBeDeleted.push(allProducts[i]);
			}
		}

		this.deleteAll(ProductsToBeDeleted); 
	}

	showAddPage = function(){
		console.log("inside show add page");
		this.sharedValue.setValue(false);
	}

	private getAllItems = function(){
		this.productService.getAllProducts().subscribe(
			(data:Products[]) => this.getAllSuccess(data),
			error => error(error),
			() => console.log("gets all the products"));
	}

	private getAllSuccess = function(data){
		this.filteredProducts = data;
		console.log("got all the datas from DB");
	}

	private deleteAll = function(ProductsToBeDeleted){
		this.productService.deleteProducts(ProductsToBeDeleted)
		.subscribe(data => this.deleteSuccess(),
					error => error(error),
					() => this.nextCallRefresh());
	}
	
	private deleteSuccess(){
		console.log("products deleted successfully");
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
		this.productService.searchProduct(searchtxt,searchField)
		.subscribe(
			(data:Products[]) => this.searchSuccess(data),
			error => error(error),
			() => console.log("search returned successfully"));
	}	

	private searchSuccess = function(data){
		this.filteredProducts = data;
	}
}
