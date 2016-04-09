import {Component} from 'angular2/core';

@Component({
	selector:"yapilmasigerekenler",
	template:"<ul style='color:blue;'><li *ngFor='#is of isler'>{{is}}</li></ul>"
})

export class yapilmasigerekenlerClass{
	public isler = [
		"Ekmek Al",
		"Arabayı Yıka",
		"Boya Yap",
		"Kızlarla Oyna",
		"Uyu Uyu ve Uyu"
	]
}