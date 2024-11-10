# SOME CONCEPTS

Standalone component quiere decir que cada componente se va a comportar como una mini isla, en donde si queremos trabahar con algo en particular deberemos importarlo en la propiedad de imports de un componente

Cada modulo que usamos en un componente como por ejemeplo el HttpClientModule o el CommonModule se importa una vez, y si lo volvemos a importar en otro componente no se cargara dos veces, ya que angular usara el mismo que se cargo previamente y que quedo guardado en memoria, esto para ahorrar memoria y velocidad de carga