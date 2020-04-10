// Primero selecciono todas las etiquetas button que hay dentro del id generadores
var generadores = document.querySelectorAll('#generadores button');

// El bucle for recorre y selecciona todos los id que hemos seleccionado anteriormente y les pasa el evento onclick para que 
// se vayan generando los campos según los vayamos seleccionando

for(i=0; i<generadores.length; i++) {
    generadores[i].onclick = function(e) {
        seleccionarCampoACrear(e.target.id);
    }
}

// Creo una función que determina a partir del id del button el tipo de campo a crear, y cada tipo de campo tiene su propia función abajo.

function seleccionarCampoACrear(id) {
    switch(id) {
        case 'texto':
            generarCampoTexto();
            break;
        case 'numero':
            generarCampoNumero();
            break;
        case 'email':
            generarCampoEmail();
            break;
        case 'lista-seleccion':
            generarListaSeleccion();
            break;
        case 'opciones-no-exclusivas':
            generarCampoNoExclusivas();
            break;
        case 'opciones-exclusivas':
            generarCampoExclusivas();
            break;
        case 'enviar':
            generarBotonEnvio();
            break;
    }
}

// Funciones para crear los generadores para cuando se seleccionen los campos a crear de tipo text, number o email, ya que solo
// cambia el valor que le metemos por el prompt de la etiqueta

function generarCampoTexto() {
    crearCampoTipo('text');
}

function generarCampoNumero() {
    crearCampoTipo('number');
}

function generarCampoEmail() {
    crearCampoTipo('email');
}

// Funcion para inputs y labels, crear un section para agruparlos e introducirlos al formulario.

function crearCampoTipo(tipo) {
    var nombreLabel = prompt('Escribe el nombre de la etiqueta');
    var crearLabel = document.createElement('label');
    crearLabel.textContent = nombreLabel + ' ';
    crearLabel.htmlFor = nombreLabel;
    var crearInput = document.createElement('input');
    crearInput.id = nombreLabel;
    crearInput.type = tipo;
    var crearSection = document.createElement('section');
    crearSection.appendChild(crearLabel);
    crearSection.appendChild(crearInput);
    var insertarEnForm = document.querySelector('#formulario');
    insertarEnForm.appendChild(crearSection);
}

// Función para generar lista de selección con sus selects y sus labels, generar el prompt para que el usuario introduzca las opciones y
// aplicarles un split para pasarlas a un array dividido por comas

function generarListaSeleccion() {
    var nombreLabel = prompt('Escribe el nombre de la etiqueta');
    var crearLabel = document.createElement('label');
    crearLabel.textContent = nombreLabel + ' ';
    crearLabel.htmlFor = crearLabel;
    var crearSelect = document.createElement('select');
    crearSelect.id = nombreLabel;

    var crearOptions = prompt('Escribe las opciones para las etiquetas separadas por comas');
    crearOptions = crearOptions.split(',');
    console.log(crearOptions)

// Creo bucle para que mientras que el usuario meta opciones se vayan creando selects

    for(i=0; i<crearOptions.length; i++) {
        var crearOption = document.createElement('option');
        crearOption.value = crearOptions[i];
        crearOption.textContent = crearOptions[i];
        crearSelect.appendChild(crearOption); 
    };

    var crearSection = document.createElement('section');
    crearSection.appendChild(crearLabel);
    crearSection.appendChild(crearSelect);
    var insertarEnForm = document.querySelector('#formulario');
    insertarEnForm.appendChild(crearSection);
}

// Creo otra función para generar los campos de opciones no exclusivas

function generarCampoNoExclusivas() {
    var crearSection = document.createElement('section');
    var nombreLabel = prompt('Escribe el nombre de la etiqueta');
    var crearP = document.createElement('p');
    crearP.textContent = nombreLabel + ' ';
    crearSection.appendChild(crearP);
    var crearOptions = prompt('Escribe las opciones para las etiquetas separadas por comas');
    crearOptions = crearOptions.split(',');

    // Igual que al generar la lista de selección, creo un bucle for para que itere sobre todas las opciones que vayan introduciendo en el prompt
    
    for(i=0; i<crearOptions.length; i++) {
        var crearInput = document.createElement('input');
        crearInput.value = crearOptions[i];
        crearInput.id = crearOptions[i];
        crearInput.name = nombreLabel + i;
        crearInput.type = 'checkbox';
        var crearLabel = document.createElement('label');
        crearLabel.htmlFor = crearOptions[i];
        crearLabel.textContent = crearOptions[i];
        crearSection.appendChild(crearInput);
        crearSection.appendChild(crearLabel);
    };
    var insertarEnForm = document.querySelector('#formulario');
    insertarEnForm.appendChild(crearSection);
}

// Creo una función para generar los campos de las opciones exclusivas que es igual que la anterior, solo que los elementos a crear no son checkbox,
// sino que son inputs radio 

function generarCampoExclusivas() {
    var crearSection = document.createElement('section');
    var nombreLabel = prompt('Escribe el nombre de la etiqueta');
    var crearP = document.createElement('p');
    crearP.textContent = nombreLabel;
    crearSection.appendChild(crearP);
    var crearOptions = prompt('Escribe las opciones para las etiquetas separadas por comas');
    crearOptions = crearOptions.split(',');
    
    for(i=0; i<crearOptions.length; i++) {
        var crearInput = document.createElement('input');
        crearInput.value = crearOptions[i];
        crearInput.id = crearOptions[i];
        crearInput.name = nombreLabel;
        crearInput.type = 'radio';
        var crearLabel = document.createElement('label');
        crearLabel.htmlFor = crearOptions[i];
        crearLabel.textContent = crearOptions[i];
        crearSection.appendChild(crearInput);
        crearSection.appendChild(crearLabel);
    }
    var insertarEnForm = document.querySelector('#formulario');
    insertarEnForm.appendChild(crearSection);
}

// Y por último creo la función que pedirá mediante un prompt también el nombre del botón de envío y lo generará

function generarBotonEnvio() {
    var nombreBoton = prompt('Escribe el nombrel  botón');
    var crearBoton = document.createElement('button');
    crearBoton.textContent = nombreBoton;
    crearBoton.htmlFor = nombreBoton;
    var insertarEnForm = document.querySelector('#formulario');
    insertarEnForm.appendChild(crearBoton);
}