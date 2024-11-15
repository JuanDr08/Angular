import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F'

@Component({
	standalone: true,
	imports: [TitleComponent], // Se importa el componente TitleComponent
	templateUrl: './control-flow.component.html',
	styles: ``
})
export default class ControlFlowComponent {
	
	/*
		Las signals son conceptualmente equivalentes a el hook useState de React, cambia en la implementacion respectiva de cada framework

		Las signals son como un wrapper que envuelven el valor que le asignamos dentro, en este caso un wrapper booleano, y el tipado es un writeableSignal<boolean> porque podemos cambiar su valor

		por lo tanto al ser un wrapper del valor dado, para acceder a su valor y todo lo demas deberemos estarnos refiriendo a su varible como si fuera un metodo o funcion, con ()

		Si quisieramos hacer que su valor sea solo de lectura se puede hacer con el metodo asReadonly() al iniciar la variable, este metodo nos devuelve un signal de solo lectura
		
		public showContent = signal(false).asReadonly()
	*/
	public showContent = signal(false)
	public grade = signal<Grade>('F')

	public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Qwik'])
	public frameworks2 = signal([]) // Usado para ejemplificar el uso de @empty

	public toggleContent() {
		this.showContent.update(value => !value)
	}

}
