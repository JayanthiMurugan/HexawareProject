import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {Configuration} from './app.services.configration';
import {Customers} from './app.service.model'

@Injectable()
export class CustomerService{
	private actionUrl : string;
	private headers : Headers;
	private options : RequestOptions;

	constructor(private http:Http,private configuration:Configuration){
		this.headers = new Headers({ 'Content-Type': 'application/json'});
		this.options = new RequestOptions({headers:this.headers});
	}

	public getAllCustomers() : Observable<Customers[]>{
		this.actionUrl =this.configuration.ServerWithBaseUrl+
		'list/';
		return 	this.http.get(this.actionUrl)
		.map((res:Response) => res.json())
		.catch(this.handleError);
	}
	
	public deleteCustomers(customers:any) : Observable<Customers[]>{
		let body =JSON.stringify(customers);
		this.actionUrl =this.configuration.ServerWithBaseUrl+
		'delete/';
		return this.http.post(this.actionUrl,body,this.options)
		.map((res:Response) => res.text())
		.catch(this.handleError);
	}

	public saveCustomer(customer:any) : Observable<Customers> {
		let body = JSON.stringify(customer)	;
		this.actionUrl =this.configuration.ServerWithBaseUrl+
		'save/';
		return this.http.post(this.actionUrl,body,this.options)
		.map((res: Response) => res.text())
		.catch(this.handleError);
	}

	public updateCustomer(customer:any) :Observable<Customers>{
		let body = JSON.stringify(customer);
		this.actionUrl =this.configuration.ServerWithBaseUrl+
		'update/';
		return this.http.post(this.actionUrl,body,this.options)
		.map((res:Response) => res.text())
		.catch(this.handleError);
	}

	public searchCustomer(searchtxt:String,searchField:String) : Observable<Customers[]>{
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
