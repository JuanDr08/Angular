import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes,
		// Se agrega al provider el servicio de transiciones suaves entre navegacion de vistas, esto hace mejor la sensasion de navegacion
			withViewTransitions(
				{ // Se le da una configuracion al servicio en donde le decimos que queremos que apenas se monte el componente no lo anime, de ahi en adelante si 
					skipInitialTransition: true
				}
			)
		),

		importProvidersFrom( // Aca se importan todos los modulos globales que vayamos a utilizar
			HttpClientModule
		)

	]
};


/* 
	Antiguamente en angular cuando se usaban modulos, las importaciones de modulos globales para poder usarlos en cualquier parte
	de la aplicacion se hacian en el app.module, en una zona llamada imports: [], dentro de el se metian todos los modulos globales
	que se querian usar, en estas nuevas versiones de angular, dichas importaciones de modulos globales se hacen en el app.config.ts,
	agregando una propidad al appConfig llamada importPovidersFrom(), dentro del cual agregamos los modulos que queremos utilizar de manera
	global en nuestro aplicativo
*/