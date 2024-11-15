import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-heavy-loaders-slow',
	standalone: true,
	imports: [CommonModule],
	template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
		Heavy Loader Slow
	</section>
	`
})
export class HeavyLoadersSlowComponent {

	// Simulacion de un proceso pesado que bloqua javascript para dar ejemplo a los defer
	@Input({required: true}) cssClass !: string;

	constructor() {
	
		const stat = Date.now()
		while ( Date.now() - stat < 3000 ) {} // Proceso bloqueante que bloquea javascript
		console.log('Loaded')

	}

}
