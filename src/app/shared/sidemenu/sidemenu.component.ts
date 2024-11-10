import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
	selector: 'app-sidemenu',
	standalone: true,
	imports: [],
	templateUrl: './sidemenu.component.html',
	styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

	public menuItems= routes
	.map(route => route.children ?? [])
	.flat()
	.filter(route => route && route.path && !route.path?.includes(':'));

	constructor() {

		

	}


}