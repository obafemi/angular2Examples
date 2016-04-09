import {Component} from 'angular2/core';
import {yapilmasigerekenlerClass} from './yapilmasigerekenler.component'

@Component({
	selector:"my-app",
	template:"<h1 style=' width:100%;text-align:center;'>Bugünkü İşlerin</h1><yapilmasigerekenler></yapilmasigerekenler>",
	directives:[yapilmasigerekenlerClass]
	
})


export class AppComponent{
	 
}

//templateUrl: "html_modules/app.component.html"