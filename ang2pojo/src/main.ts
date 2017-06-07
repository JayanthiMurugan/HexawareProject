import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import {CustomerService} from './app/app.service.customers';
import {SharedValue} from './app/app.service.SharedValue';

environment.production = true;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule,[CustomerService,SharedValue]);
