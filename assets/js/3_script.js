// REUTILIZAMOS CODIGO JS PARA SOLUCION #3 Y #4.

// Variable para dejar como defecto el color para la funcion Pintar.
const DEFAULT_COLOR = 'green';

//Se inicia la aplicacion con el color Amarillo para la Solucion #3.
let colorElejido = 'yellow';
parrafoColor(colorElejido);

// Funcion que recibe la id de los divs y el color elejido para pintar los divs.
const pintar = (id, color = DEFAULT_COLOR) => {
  document.getElementById(id).style.backgroundColor = color;
};

// Funcion que permite mostrar al usuario que color escogio, aplica solo para la Solucion #4 (index.html).
function parrafoColor(color) {
  if (document.getElementById('ele1')) { // Consulto si existe la id "ele1", para poder utilizar el mismo codigo en pintar.html.
    return;
  }

  if (color != '') {
    document.getElementById('key').style.fill = color;
    document.getElementById('elComentario').innerHTML =
      '← Seleccionar el siguiente Color.';
  } else {
    document.getElementById('key').style.fill = DEFAULT_COLOR;
    document.getElementById('elComentario').innerHTML =
      '← Sin Color, se aplica el color por Defecto.';
  }
}

document.addEventListener('click', (event) => {
  if (event.target.id != '' && colorElejido != '') {
    pintar(event.target.id, colorElejido);
  } else if (event.target.id != '') {
    pintar(event.target.id);
  }
});

document.addEventListener('keydown', (event) => {
  if (document.getElementById('ele1')) {  // Consultamos si existe la id "ele1", para poder utilizar el mismo codigo en pintar.html.
    return;
  }

  const minus = event.key.toLowerCase();

  minus === 'a'
    ? ((colorElejido = '#f47bac'), parrafoColor('#f47bac'))
    : minus === 's'
    ? ((colorElejido = '#fb7838'), parrafoColor('#fb7838'))
    : minus === 'd'
    ? ((colorElejido = '#05bbff'), parrafoColor('#05bbff'))
    : ((colorElejido = ''), parrafoColor(''));
});
