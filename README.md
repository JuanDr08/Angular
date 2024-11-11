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