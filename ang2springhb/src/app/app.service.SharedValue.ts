import{Injectable} from '@angular/core'
import {Products} from './app.service.model'

@Injectable()
export class SharedValue{
	public showAddButton :boolean;
	public product :Products;

	constructor(){

	}

	setProduct(products){
		this.product = products;
	}

	getProduct(){
		return this.product;
	}

	setValue(val){
		this.showAddButton = val;
	}

	getValue(){
		return this.showAddButton;
	}
}
