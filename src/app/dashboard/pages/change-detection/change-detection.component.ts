import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
/* 
Angular en estas versiones por defecto usa una libreria llamada zoneJs, la cual le permite a angular estar siempre pendiente a cualquier cambio
que se produzca en el componente, para de esa manera reflejar los cambios en tiempo real, sin embargo angular esta apuntando cada vez mas a ser zoneless, lo
que quiere decir a dejar de estar pendiente a cada rato de cambios del componente e impulsarnos mas a usar las signals, para que sea mas bien el ciclo
de vida de los componentes los que indiquen cuando cambiar o reflejar un cambio, de esta manera mejorar enormemente
el rendimiento de nuestro aplicacion, por el momento nosotros podemos configurar manualmente el componente para que use zoneless, de la manera como se ve
en el @component.

De esta manera, Angular solo reaccionara a seniales para reflejar cambios del componente, haciendo a angular incluso mas rapido que react
*/


@Component({
	standalone: true,
// Solo estara pendiente a cambios por medio de signals, el valor por defecto es ChangeDetectionStrategy.checkAlways, lo que quiere decir que siempre estara pediente
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule,TitleComponent],
	template: `

		<app-title title="Change Detection"/>

		<pre> {{ frameworkAsSignal() | json }} </pre>
		<pre> {{ frameworkAsProperty | json }} </pre>

	`,
})
export default class ChangeDetectionComponent {

	public frameworkAsSignal = signal({
		name : 'Angular',
		releaseDate: 2016
	})

	public frameworkAsProperty = {
		name : 'Angular',
		releaseDate: 2016
	}

	constructor() {

		setTimeout(() => {
			// Con la configuracion OnPush Angular no se reflejara el cambio de esta propiedad al momento de cambiar, pero si el de la signal
			this.frameworkAsProperty.name = 'React' 

			// signal

			this.frameworkAsSignal.update( value => ({...value, name: 'React'}) ) // Este cambio si se reflejara, ya que esta hecho mediante signals

			// Ambas se actualizaran ya que a pesar de tener el changedetectionStrategy en OnPush
			// el primer cambio de asProperty no disparara un nuevo 'renderizado' pero al segundo el cual es mediante una signal si disparara
			// una senial de render, lo que hara que se actualice el contenido y por lo tanto muestre tambien el cambio del asProperty

			console.log('Hecho')

		}, 3000)

	}

}
