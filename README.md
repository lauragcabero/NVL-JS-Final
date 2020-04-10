Tras buscar bastante por internet he encontrado la manera más óptima y limpia para hacerlo y lo explico:

En primer lugar, he separado (como siempre vengo haciendo) el trabajo en dos archivos: uno html y otro js.

En el primero he hecho lo primero que se pedía que eran 7 etiquetas button con sus id cada una tipo texto, numero, etc, que son hijas de main que tiene un id llamado generadores y que a su vez main tiene un hermano también que se llama form a donde se le va a ir metiendo todos los campos que el usuario vaya generando dinamicamente.

Una vez le he creado el link del script (fuera del body), empezamos con el código.

Lo primero ha sido crear una variable llamada generadores que va a guardar todas las etiquetas button que hay dentro del id generadores.

Después mediante un bucle for vamos a recorrer y seleccionar todos los id que hemos seleccionado anteriormente y les va pasando el evento onclick para que se vayan generando los campos según los vaya seleccionando el usuario. Esto lleva una función seleccionaCAmpoACrear que más abajo determina a partir del id del button el tipo de campo a crear y cada tipo de campo tiene su propia función más abajo donde se van construyendo las órdenes del usuario.

Esta función seleccionarCampoACrear almacena con un switch al que le entran una serie de id's varios casos, tantos como id's hayan en main; y a su vez cada caso tiene asociada una función que más abajo crea lo que el usuario le va indicando por el prompt.

La primera función englobaría a los 3 primeros id's que serían text, number e email, ya que su formato va a ser el mismo: input y label, y solo va a cambiar el 'type' de input que le va a entrar a la función al invocarla más arriba.

Lo siguiente sería la función para generar la lista de selección con sus selects y sus labels, generar el prompt para que el usuario introduzca las opciones y aplicarles un split para pasarlas a un array dividido por comas, así de esta manera con el bucle for que creo después recorre todo el array que le llega y a cada etiqueta option que creamos le vamos añadiendo el value y el contenido del texto a aparecer en pantalla.

Después fuera ya del bucle se crea un contenedor section (como con todas las funciones excepto la última), donde se introducen estos input y label con lo que le hemos introducido del bucle, con lo que a su vez le ha introducido el usuario y todo esto se mete al formulario, como siempre.

Seguidamente creo otra función para generar los campos de opciones no exclusivas que funciona igual que la anterior, solo que en este caso también creo una etiqueta p para guardar el nombre que se le da al título del apartado, ya que en este caso igual que en el anterior, el array que nos entre lo vamos a meter en input de tipo checkbox y label. Y todo ello a un sectior y al form a su vez.

Después creo una función para generar los campos de las opciones exclusivas que es igual que la anterior, solo que los elementos a crear no son checkbox, sino input radio y que en este caso sí que solo se puede elegir una opción, y esto se consigue con la linea 149 donde no se le suma el contador al nombre de la etiqueta por lo que siempre va a ser el mismo valor para los 3 input obligando al usuario a escoger solo una opción, a diferencia de la linea 121 donde si que se le suma el contador al nombre, por lo que cada iteración del bucle le asigna un valor diferente al name haciendo que se puedan escoger varias o todas a la vez.

Y por último creo la función que pedirá al usuario mediante un promp, como vengo haciendo todo el trabajo, el nombre que le quiere poner al botón de envío y lo generará y lo introducirá del tirón dentro de la etiqueta form.
