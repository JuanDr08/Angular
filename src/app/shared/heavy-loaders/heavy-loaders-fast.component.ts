import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-heavy-loaders-fast',
	standalone: true,
	imports: [CommonModule],
	template: `
    <section [ngClass]="['w-full', cssClass]">
		<ng-content /> <!-- ng-content es una propiedad ofrecida por angular que nos permite insertar cualquier contenido mandado por
		el componente padre y que sera puesto en la posicion de ng-content
		-->
	</section>
	`
})
export class HeavyLoadersFastComponent {

	@Input({required: true}) cssClass !: string;

}
