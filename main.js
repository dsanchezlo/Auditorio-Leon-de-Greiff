var mapa = new Phaser.Game(513, 500, Phaser.AUTO, "contenedor-mapa");

mapa.state.add ( "MapaUno", mapaUno );
mapa.state.add ( "MapaDos", mapaDos );
mapa.state.add ( "PrimeraPersona", primeraPersona );
mapa.state.add ( "Boton", botonInicio );

mapa.state.start ( "Boton" );
