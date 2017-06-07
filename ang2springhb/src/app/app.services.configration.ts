import {Injectable} from '@angular/core';

@Injectable()
export class Configuration{
	public ServerIP : string = 'http://localhost:8080/';
	public RestFulBaseUrl :string = 'Ang2SpringHbService/rest/ws/';
	public ServerWithBaseUrl = this.ServerIP + this.RestFulBaseUrl;
}
