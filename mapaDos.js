//Apuntadores que están en esas ubicaciones
var entradaTaquilla;
var entradaOma;
var entradaPrincipal;
var parqueadero1;
var parqueadero2;

//Imágenes a mostrar
var imgTaquilla;
var imgOma;
var imgPrincipal;
var imgP1;
var imgP2;

//Texto que aparecerá con las Imágenes
var textoTaquilla;
var textoOMA;
var textoPrincipal;
var textoP1;
var textoP2;

//Estilo del texto
var estiloTexto = { font: "30px Roboto-Regular", fill: "#0d1628" }
var estilo2Texto = { font: "30px Roboto-Regular", fill: "#fff" }

var mapaDos = {
  preload : function() {
    mapa.load.image ('zoom', 'imagenes/LupaZoom.png' );
    mapa.load.image ('P1', 'imagenes/Parqueadero1.jpg' );
    mapa.load.image ('P2', 'imagenes/Parqueadero2.jpg' );
    mapa.load.image ('Principal', 'imagenes/EntradaPrincipal.jpg' );
    mapa.load.image ('Taquilla', 'imagenes/EntradaTaquilla.jpg' );
    mapa.load.image ('OMA', 'imagenes/EntradaOMA.jpg' );
    mapa.load.spritesheet ( 'atras', 'imagenes/BotonAtras.png', 40, 40);
    mapa.load.spritesheet ( 'apuntadores2', 'imagenes/ApuntadoresMapa_opt.png', 50, 40);
    mapa.load.spritesheet ( 'cambiarVista', 'imagenes/Boton2.png', 150, 71);
  },
  create : function() {
    //El fondo se pone en blanco porque la imagen de fondo no alcanza a cubrir toda la ventana
    mapa.stage.backgroundColor = "#FFF";
    //Imagen de fondo
    mapa.add.tileSprite(61, 54.5, 391, 391, 'zoom' );
    //Botón atras
    mapa.add.button(10, 10, 'atras', volver, this, 1, 0, 2);
    mapa.add.button(300, 20, 'cambiarVista', cambiarPrimeraPersona, this, 2, 1, 0);
    //Apuntadores entradas del Auditorio
    entradaPrincipal = mapa.add.button( 164, 188, 'apuntadores2', mostrarPrincipal, this, 1, 0, 2);
    entradaOma = mapa.add.button( 166, 145, 'apuntadores2', mostrarOMA, this, 1, 0, 2);
    entradaTaquilla = mapa.add.button( 210, 175, 'apuntadores2', mostrarTaquilla, this, 1, 0, 2);
    //Apuntadores parqueaderos
    parqueadero1 = mapa.add.button( 215, 235, 'apuntadores2', mostrarP1, this, 1, 0, 2);
    parqueadero2 = mapa.add.button( 305, 170, 'apuntadores2', mostrarP2, this, 1, 0, 2);

    //Añadir imágenes
    imgPrincipal = mapa.add.button( 56.5, 100, 'Principal', ocultarPrincipal, this );
    imgTaquilla = mapa.add.button( 56.5, 100, 'Taquilla', ocultarTaquilla, this );
    imgOma = mapa.add.button( 56.5, 100, 'OMA', ocultarOMA, this );
    imgP1 = mapa.add.button( 56.5, 100, 'P1', ocultarP1, this );
    imgP2 = mapa.add.button( 56.5, 100, 'P2', ocultarP2, this );
    //Ocultar imágenes
    imgP1.visible = false;
    imgP2.visible = false;
    imgPrincipal.visible = false;
    imgTaquilla.visible = false;
    imgOma.visible = false;

    //Añadir texto
    textoTaquilla = mapa.add.text( 140, 330, "Entrada y taquilla\n      del auditorio.", estilo2Texto );
    textoOMA = mapa.add.text( 100, 110, "Entrada hacia el OMA.", estiloTexto );
    textoPrincipal = mapa.add.text( 150, 110, "Entrada principal", estiloTexto );
    textoParqueaderos = mapa.add.text( 170, 110, "Parqueadero", estiloTexto );
    //Ocultar texto
    textoTaquilla.visible = false;
    textoOMA.visible = false;
    textoPrincipal.visible = false;
    textoParqueaderos.visible = false;
  }
}

function mostrarP1(){
  imgP1.visible = true;
  textoParqueaderos.visible = true;
}

function mostrarP2(){
  imgP2.visible = true;
  textoParqueaderos.visible = true;
}

function mostrarPrincipal(){
  imgPrincipal.visible = true;
  textoPrincipal.visible = true;
}

function mostrarTaquilla(){
  imgTaquilla.visible = true;
  textoTaquilla.visible = true;
}

function mostrarOMA(){
  imgOma.visible = true;
  textoOMA.visible = true;
}

function ocultarP1(){
  imgP1.visible = false;
  textoParqueaderos.visible = false;
}

function ocultarP2(){
  imgP2.visible = false;
  textoParqueaderos.visible = false;
}

function ocultarPrincipal(){
  imgPrincipal.visible = false;
  textoPrincipal.visible = false;
}

function ocultarTaquilla(){
  imgTaquilla.visible = false;
  textoTaquilla.visible = false;
}

function ocultarOMA(){
  imgOma.visible = false;
  textoOMA.visible = false;
}

function volver(){
  mapa.state.start( "MapaUno" );
}

function cambiarPrimeraPersona(){
  mapa.state.start( "PrimeraPersona" );
}
