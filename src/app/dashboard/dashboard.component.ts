import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';

// El commonModule es muy comun que lo necesitemos, ya que este modulo es el encargado de directivas como el ngIf, ngFor, switch, etc.

// Con que lo usemos una vez importado en un componente, podemos usarlo en cualquier otro componente, ya que angular no generara uno nuevo por componente sino que usara el mismo que este creado en memoria.

@Component({
  standalone: true, // Se podria ver que cada standalone component es como un pequenio modulo
  /*
    Este modulo de nuestro dashboard Component no va a ocupar el CommonModule, lo que si ocupara
    sera el sistema de rutas, es decir, el RouterModule, en el cual viene por ejemplo el router-outlet
  */

  /*
    Como hasta el momento todos nuestros componentes son standalone components, si queremos usar algun componente dentro de este componente necesitaremos importarlo en la propiedad de imports
  */
  imports: [RouterModule, SidemenuComponent], // Modulo que provee todo el sistema de rutas
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

}
