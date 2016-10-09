import {Component} from '@angular/core';

@Component({
	selector: 'home',
	template: `<h1>{{welcome}}</h1>`
})
export class HomeComponent {
	welcome : string;
	constructor() {
		this.welcome = "Welcome page";
	};
};