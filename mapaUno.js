//Imágenes de las entradas
var entrada53;
var entrada45;
var entrada26;
//texto a usar en cada una de las fotos
var texto53;
var texto45;
var texto26;

var botonAtras;

var fondo;

//Estilo del texto que se va a usar
var estilo = { font: "30px Roboto-Regular", fill: "#02112e" }

var mapaUno = {
  preload : function() {
    mapa.load.image( 'fondo', 'imagenes/MapaInteractivo.png');
    mapa.load.image( 'E53', 'imagenes/Entrada53.jpg');
    mapa.load.image( 'E45', 'imagenes/Entrada45.jpg');
    mapa.load.image( 'E26', 'imagenes/Entrada26.jpg');
    mapa.load.spritesheet( 'lupa', 'imagenes/Lupa.png', 100, 100);
    mapa.load.spritesheet( 'apuntador', 'imagenes/ApuntadoresMapa.png', 66.6, 53);
  },
  create : function() {
    //Añadir el fondo
    fondo = mapa.add.tileSprite(0 , 0, 513, 500, 'fondo' );

    //Añadir los tres punteros para las tres entradas
    mapa.add.button(314, 2, 'apuntador', mostrar53, this, 1, 0, 2);
    mapa.add.button(426, 323, 'apuntador', mostrar45, this, 1, 0, 2);
    mapa.add.button(288, 418, 'apuntador', mostrar26, this, 1, 0, 2);
    //Añadir lupa para acercar la parte de la imagen en donde está el auditorio (Conducir a otro estado)
    mapa.add.button(321, 306, 'lupa', cambiarMapaDos, this, 0, 1);

    //Añadir texto
    texto53 = mapa.add.text(70, 20, "Entrada vehicular y peatonal\n                  calle 53", estilo);
    texto45 = mapa.add.text(150, 20, "Entrada peatonal\n        calle 45", estilo);
    texto26 = mapa.add.text(150, 20, "Entrada peatonal\n        calle 26", estilo);
    //Ocultar texto
    texto53.visible = false;
    texto45.visible = false;
    texto26.visible = false;

    //Añadir todas las imágenes a mostrar como información adicional
    entrada53 = mapa.add.button(56.5, 100, 'E53', ocultar53, this);
    entrada45 = mapa.add.button(56.5, 100, 'E45', ocultar45, this);
    entrada26 = mapa.add.button(56.5, 100, 'E26', ocultar26, this);
    //Ocultar todas las imagenes anteriores
    entrada53.visible = false;
    entrada45.visible = false;
    entrada26.visible = false;
  }
}

function funcion(){
  console.log ("Hola mundo");
}

function mostrar53() {
  entrada53.visible = true;
  texto53.visible = true;
}
function mostrar45() {
  entrada45.visible = true;
  texto45.visible = true;
}
function mostrar26() {
  entrada26.visible = true;
  texto26.visible = true;
}

function ocultar53() {
  entrada53.visible = false;
  texto53.visible = false;
}
function ocultar45() {
  entrada45.visible = false;
  texto45.visible = false;
}
function ocultar26() {
  entrada26.visible = false;
  texto26.visible = false;
}

function cambiarMapaDos(){
  mapa.state.start ( "MapaDos" );
}
