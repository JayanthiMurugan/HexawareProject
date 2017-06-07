import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {Configuration} from './app.services.configration';
import {Products} from './app.service.model'

@Injectable()
export class ProductService{
	private actionUrl : string;
	private headers : Headers;
	private options : RequestOptions;

	constructor(private http:Http,private configuration:Configuration){
		this.headers = new Headers({ 'Content-Type': 'application/json'});
		this.options = new RequestOptions({headers:this.headers});
	}

	public getAllProducts() : Observable<Products[]>{
		this.actionUrl =this.configuration.ServerWithBaseUrl+
		'list/';
		return 	this.http.get(this.actionUrl)
		.map((res:Response) => res.json())
		.catch(this.handleError);
	}
	
	public deleteProducts(products:any) : Observable<Products[]>{
		let body =JSON.stringify(products);
		this.actionUrl =this.configuration.ServerWithBaseUrl+
		'delete/';
		return this.http.post(this.actionUrl,body,this.options)
		.map((res:Response) => res.text())
		.catch(this.handleError);
	}

	public saveProduct(product:any) : Observable<Products> {
		let body = JSON.stringify(product)	;
		this.actionUrl =this.configuration.ServerWithBaseUrl+
		'save/';
		return this.http.post(this.actionUrl,body,this.options)
		.map((res: Response) => res.text())
		.catch(this.handleError);
	}

	public updateProduct(product:any) :Observable<Products>{
		let body = JSON.stringify(product);
		this.actionUrl =this.configuration.ServerWithBaseUrl+
		'update/';
		return this.http.post(this.actionUrl,body,this.options)
		.map((res:Response) => res.text())
		.catch(this.handleError);
	}

	public searchProduct(searchtxt:String,searchField:String) : Observable<Products[]>{
		this.actionUrl =this.configuration.ServerWithBaseUrl+
		'search?searchValue=' + searchtxt + '&searchColumn=' + searchField;
		return this.http.get(this.actionUrl,this.options)
		.map((res:Response) => res.json())
		.catch(this.handleError);
	}

	private handleError(error: Response) {
        console.error(error);
        return Observable.throw('Server error');
    }
}
