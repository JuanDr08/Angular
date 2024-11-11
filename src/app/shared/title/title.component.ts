import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
	selector: 'app-title',
	standalone: true,
	imports: [],
	template: '<h1 class="text-3xl mb-5">{{title}} - {{ boolExample }}</h1>',
})
export class TitleComponent {

	// '!:' en typescript nos permite decirle que el valor siempre estara presente, siempre lo pasaremos entonces ignore que no este iniciado
	@Input({required: true}) title !: string; 

	/* 
		para pasar valores booleanos como atributos en donde no nos toque definir el valor explicitamente como: booleanExample = true o false
		input nos ofrece una propiedad transform con valor booleanAttribute, que nos permite hacer que con que unicamente el nombre del atrivuto
		este presente entonces el valor sea true, si no esta presente entonces false
	*/
	@Input({transform: booleanAttribute}) boolExample : boolean = false; 

}
