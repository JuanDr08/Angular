# SOME CONCEPTS

Standalone component quiere decir que cada componente se va a comportar como una mini isla, en donde si queremos trabahar con algo en particular deberemos importarlo en la propiedad de imports de un componente

Cada modulo que usamos en un componente como por ejemeplo el HttpClientModule o el CommonModule se importa una vez, y si lo volvemos a importar en otro componente no se cargara dos veces, ya que angular usara el mismo que se cargo previamente y que quedo guardado en memoria, esto para ahorrar memoria y velocidad de carga

**Configuracion de typescript que nos permite definir algunas rutas globales para facilitar y mejorar el aspecto de las rutas a directorios a la hora de importar componentes**
```json
"paths": {
      "@shared/*": ["./src/app/shared/*"],
}
```

- Paths: atributo del archivo tsconfig.json que se ubica dentro del atributo 'compilerOptions' y nos permite definir un arreglo con distintas rutas para acortar las referencias a directorios
- @nombre: convencion para el nombre de los acortadores de rutas, seguido de /* para definir que despues del nombre puede ir cualquier ruta o nombre
  - El valor es un arreglo el cual contiene las rutas posibles a las que ese acortador va a apuntar cuando se haga un import
  - En la ruta del ejemplo estamos definiendo que el acortador va a apuntar a CUALQUIER carpeta dentro de src/app/shared

**@Input()**

- @Input() es un decorador proporcionado por angular conceptualmente parecido a las Props de React, nos permite definir un atributo que el componente espera se le sea pasado al momento de ser llamado, en el componente que lo llame se le debe pasar el atributo con el mismo nombre que el de la variable que contendra dicho atributo o el alias que se le de dentro de los parentesis del decorador, dentro de los parentesis podremos definir algunas propiedades que queremos que tenga dicha 'prop', como por ejemplo hacerlo requerido, darle un alias, etc...

**computed()**

- Las seniales computadas basicamente lo que hacen es cambiar sus valores cada que alguna de las seniales de las que dependen cambia es como que angular cambia automaticamente por nosotros el valor de las computadas cuando cambian sus dependencias

El valor de las computadas puede ser cualquier cosa, puede ser un valor que no contenga contenido de la senial pero que dicho valor dependa del contenido actual de la senial de la que depende

Basicamente mantien sus valores actualizados estanado pendientes de cambios en las seniales originales

**pipe()**

- Pipe es un método de los Observables de RxJS que te permite encadenar operadores

**delay()**

- Delay es un operador de rxjs que nos permite retrasar la respuesta de un observable o una peticion o hacer que algo demore mas de lo que deberia

**switchMap()**

- switchMap es un operador de RxJS que puede ser un poco complicado de entender al principio, pero es muy útil para manejar flujos de datos asíncronos en Angular, especialmente cuando se trabaja con peticiones HTTP.

Imagina que tienes un Observable que emite valores, y que para cada valor emitido necesitas hacer otra operación asíncrona, como una petición HTTP.  switchMap te permite hacer exactamente eso:  "cambiar" del primer Observable a un nuevo Observable que se crea en función del valor emitido.

¿Cómo funciona switchMap?

Observable inicial: Tienes un Observable que emite valores. En tu ejemplo, este es `this.route.params`, que emite los parámetros de la ruta.

Función de mapeo:  switchMap recibe una función como argumento. Esta función se ejecuta para cada valor emitido por el Observable inicial.  La función debe retornar un nuevo Observable. En tu ejemplo, la función es `({ id }) => this.userService.getUserById( id )`, que retorna un Observable que emite la información del usuario.

Suscripción al nuevo Observable: switchMap se suscribe al nuevo Observable que retornó la función de mapeo.  Esto significa que empezará a emitir los valores del nuevo Observable.

Cancelación del Observable anterior: Si el Observable inicial emite un nuevo valor antes de que el nuevo Observable haya completado, switchMap cancelará la suscripción al nuevo Observable anterior y se suscribirá al nuevo Observable creado con el nuevo valor.

**toSignal()**

- toSignal es una función de Angular que convierte un Observable en una señal. Esto significa que el valor emitido por el Observable se convertirá en el valor de la señal.