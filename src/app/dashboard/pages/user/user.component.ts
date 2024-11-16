import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '@interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
	standalone: true,
	imports: [CommonModule, TitleComponent],
	template: `
		<app-title [title]="titleLabel()"/>

		@if ( user() ) {
			<section>
				<img 
				[srcset]="user()!.avatar" 
				[alt]="user()!.first_name">
			</section>

			<div>
				<h3>{{titleLabel()}}</h3>
				<p>{{user()!.email}}</p>
			</div>
		} @else {
			<h3>Cargando info</h3>
		}

	`
})
export default class UserComponent {

	private route = inject( ActivatedRoute ) // De esta manera obtenemos acceso a todos los datos que vienen en la ruta como los params
	private userService = inject( UsersService )

	
	// En este caso, como vimos en el constructor que route.params es un observable, lo que quisimos hacer es convertir dicho observable
	// en una senial, con el operador toSignal que nos ofrece rxjs, dentro de ese operador hacemos la extraccion de los parametros
	// y hacemos la peticion http con dicho id extraido de la ruta
	
	public user = toSignal( // Mas informacion del toSignal en el README.MD
		this.route.params.pipe(
			switchMap( // Mas informacion del switchMap en el README.MD
				({ id }) => this.userService.getUserById( id )
			)
		)
	)

	public titleLabel = computed(() => this.user() ?
		`Informacion del usuario ${this.user()!.first_name} ${this.user()!.last_name}`
		: 'Informacion del usuario')
	
	constructor() {

		// el this.route.params es un observable por lo que nos tendriamos que subscribir a este para obtener la data
		/* this.route.params.subscribe( params => {
			console.log(params)
		} ) */

	}

}
