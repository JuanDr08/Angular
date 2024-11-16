import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UsersResponse } from '@interfaces/req-response';
import { delay } from 'rxjs';

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

	/* seniales computadas de solo lectura

	Las seniales computadas basicamente lo que hacen es cambiar sus valores cada que alguna de las seniales de las que dependen cambia
	es como que angular cambia automaticamente por nosotros el valor de las computadas cuando cambian sus dependencias

	El valor de las computadas puede ser cualquier cosa, puede ser un valor que no contenga contenido de la senial pero que dicho valor
	dependa del contenido actual de la senial de la que depende
	*/
	public users = computed(() => {
		console.log('se activa users', this.#state())
		return this.#state().users
	}); // cambia su valor cada que la senial de state cambie
	public loading = computed(() => {
		console.log('se activa loading')
		return this.#state().loading
	}); // cambia su valor cada que la senial de state cambie

	constructor() { 
		
		// Tan pronto el servicio se inicializa vamos a querer cargar la data
		this.http.get<UsersResponse>('https://reqres.in/api/users') // Lanzamos la peticion http
		.pipe(delay(1500)) // Delay es un operador de rxjs que nos permite retrasar la peticion en este caso
		// para hacer que intencionalmente la peticion se demore mas de lo que deberia
		.subscribe( res => { // Nos subscribimos a dicha peticion

			this.#state.set({
				loading: false,
				users: res.data
			})

		} )

	}
}
