import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
  
    <app-title title="View Transition"/>

    <section class="flex justify-start">

      <img srcset="https://picsum.photos/id/237/200/300" width="200" height="300" alt="Picsum">

      <div class="bg-blue-500 w-56 h-56"></div>

    </section>
  
  `
})
export default class ViewTransitionComponent {

}

/* ME DIO PEREZA HACER EL EJERCICIO JUNTO CON FERNANDO ENTONCES SI SE QUIERE SABER MAS ACERCA DE LAS ANIMACIONES ENTRE PAGINAS VER EL VIDEO
20 DEL CURSO BASICO DE ANGULAR DE YOUTUBE */