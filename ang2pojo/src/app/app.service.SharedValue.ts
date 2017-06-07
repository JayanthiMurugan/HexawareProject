import{Injectable} from '@angular/core'
import {Customers} from './app.service.model'

@Injectable()
export class SharedValue{
	public showAddButton :boolean;
	public customer :Customers;

	constructor(){

	}

	setCustomer(customers){
		this.customer = customers;
	}

	getCustomer(){
		return this.customer;
	}

	setValue(val){
		this.showAddButton = val;
	}

	getValue(){
		return this.showAddButton;
	}
}
