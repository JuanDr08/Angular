import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { delay, map } from 'rxjs';

interface State {
	users: User[];
	loading: boolean;
}

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	// Como queremos usar el modulo de http tenemos que importarlo de manera global en el archivo de configuracion
	private http = inject(HttpClient);

	#state = signal<State>({
		loading: true,
		users: []
	})

	// seniales computadas de solo lectura, mas info sobre las seniales computadas en el README.MD
	public users = computed(() => this.#state().users); // cambia su valor cada que la senial de state cambie
	public loading = computed(() => this.#state().loading); // cambia su valor cada que la senial de state cambie

	constructor() { 
		
		// Tan pronto el servicio se inicializa vamos a querer cargar la data
		this.http.get<UsersResponse>('https://reqres.in/api/users') // Lanzamos la peticion http
		.pipe( // Mas informacion del pipe en el README.MD

			delay(1500) // en este caso hacer que intencionalmente la peticion se demore mas de lo que deberia
		)
		.subscribe( res => { // Nos subscribimos al observable de dicha peticion

			this.#state.set({
				loading: false,
				users: res.data
			})

		} )

	}

	getUserById( id: string ) {

		return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`) // retornamos otro observable
		.pipe(
			delay(1500),
			map( resp => resp.data ) // map es otro operador que viene de rxjs
		
		)

	}

}
