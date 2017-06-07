import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {ListComponent} from './app.component.list'
import {AddComponent} from './app.component.add'

const appRoutes: Routes = [
  {path :'list', component :ListComponent,data:{title:'DBLists'}},
  {path :'add' , component :AddComponent},
  {path :'', redirectTo :'/list',pathMatch :'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutes{
	
}