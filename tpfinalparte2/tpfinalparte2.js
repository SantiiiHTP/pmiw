let Dinero = 120;
let ChilidogCom = 0;
let PrecioChili = 20;

let fondo;
let fondo2;
let fondobosque;

let Fidle = 0;
let UcambioI = 0;
let tiempoEF = 200;
let Frun = 0;
let UcambioR = 0;

let sonicidle = [];
let sonicrun = [];

let sonicX = 400;
let sonicY = 310;
let velocidad = 15;
let direccion = 1;
let movimiento = false;

let pantallaActu = 1;

let puertaXatico = 750;
let puertaXpasillo = 70;
let rangoInteraccion = 60;
let puertaCerca = false;
let textosonic;

//let runersonicX = 400;
//let runersonicY = 320;
//let velocidadsonic = 4;
let velocidadbosque = 9;
let gifsonicrun;
let gifsonicturn;
let desplabosque = 0;
let altobosque = 950;

let carreteraIzq = 200;
let carreteraDer = 600;

let imgvegetacion = [];
let imgpiedras = [];
let imgprops = [];
let imgautos = [];

//let tiempoveg = 0;
//let tiempopied = 0;
//let tiempoauto = 0;
let velautobajo = 8;
let velautoariba = 3;

let botonX = 300;
let botonY = 280;
let botonAncho = 200;
let botonAlto = 50;

let vegetacion = [];
let piedras = [];
let autos = [];

// Sistema de vidas, daño e invulnerabilidad
//let vidas = 3;
//let invulner = false;
//let tiempinvulner = 0;
//let decoinvulbe = 120;
//let retroceX = 0;
//let retroceY = 0;

let sonRunne;
let genera;
let meta;

let tiempoInicioRunner = 0;
let duracionRunner = 30000;

let Final;
let Inicio;
let PreStart;
let Boton;

let FragmentoHistoria = 0;

function preload() {
  textosonic = loadFont("data/SonicAdvanceRegular-o66V.ttf");
  fondo = loadImage("data/fondo1ati.jpeg");
  fondo2 = loadImage("data/fondo2.jpeg");
  fondobosque = loadImage("data/fondobosque.jpeg");
  gifsonicrun = loadImage("data/runsonicfromback(1).gif");
  gifsonicturn = loadImage("data/runsonicfromleft(2).gif");
  sonicidle[0] = loadImage("data/idlesonic(1).png");
  sonicidle[1] = loadImage("data/idlesonic(2).png");
  sonicidle[2] = loadImage("data/idlesonic(3).png");
  sonicidle[3] = loadImage("data/idlesonic(4).png");
  sonicidle[4] = loadImage("data/idlesonic(5).png");
  sonicidle[5] = loadImage("data/idlesonic(6).png");
  sonicidle[6] = loadImage("data/idlesonic(7).png");
  sonicrun[0] = loadImage("data/runsonic(1).png");
  sonicrun[1] = loadImage("data/runsonic(2).png");
  sonicrun[2] = loadImage("data/runsonic(3).png");
  sonicrun[3] = loadImage("data/runsonic(4).png");
  sonicrun[4] = loadImage("data/runsonic(5).png");
  sonicrun[5] = loadImage("data/runsonic(6).png");
  sonicrun[6] = loadImage("data/runsonic(7).png");
  sonicrun[7] = loadImage("data/runsonic(8).png");
  imgvegetacion[0] = loadImage("data/vegetation_01.png");
  imgvegetacion[1] = loadImage("data/vegetation_02.png");
  imgvegetacion[2] = loadImage("data/vegetation_03.png");
  imgvegetacion[3] = loadImage("data/vegetation_04.png");
  imgvegetacion[4] = loadImage("data/vegetation_05.png");
  imgvegetacion[5] = loadImage("data/vegetation_06.png");
  imgvegetacion[6] = loadImage("data/vegetation_07.png");
  imgvegetacion[7] = loadImage("data/vegetation_08.png");
  imgvegetacion[8] = loadImage("data/vegetation_09.png");
  imgvegetacion[9] = loadImage("data/vegetation_10.png");
  imgpiedras[0] = loadImage("data/rock_01.png");
  imgpiedras[1] = loadImage("data/rock_02.png");
  imgpiedras[2] = loadImage("data/rock_03.png");
  imgpiedras[3] = loadImage("data/rock_04.png");
  imgpiedras[4] = loadImage("data/rock_05.png");
  imgprops[0] = loadImage("data/prop_01.png");
  imgprops[1] = loadImage("data/prop_02.png");
  imgprops[2] = loadImage("data/prop_03.png");
  imgprops[3] = loadImage("data/prop_04.png");
  imgprops[4] = loadImage("data/prop_05.png");
  imgprops[5] = loadImage("data/prop_06.png");
  imgprops[6] = loadImage("data/prop_07.png");
  imgprops[7] = loadImage("data/prop_08.png");
  imgautos[0] = loadImage("data/enemy_car1.png");
  imgautos[1] = loadImage("data/enemy_car2.png");
  imgautos[2] = loadImage("data/enemy_car3.png");
  Final = loadImage("data/final.jpg");
  Inicio = loadImage("data/Inicio.jpg");
  PreStart = loadImage("data/PreStart.jpg");
  Boton = loadImage("data/boton.png");
}

function setup() {
  createCanvas(800, 450);
  imageMode(CENTER);
  textFont(textosonic);
  textAlign(CENTER, CENTER);

  sonRunne = new Sonic();
  genera = new generadorObjetos();
  meta = new Meta();

  pantallaActu = 1;
  tiempoInicioRunner = millis();
}

function draw() {
  background(25);
  if (pantallaActu == 1) {
    image(Inicio, 400, 225, 800, 450);
    image(Boton, 400, 390, 300, 160);
    fill(255);
    textSize(20);
    stroke(0);
    text("Preciona Enter para Iniciar", 400, 300);
  } else if (pantallaActu == 2) {
    textAlign(CENTER);
    textSize(20);
    fill(255);
    if (fragmentoHistoria == 0) {
      image(PreStart, 795, 437, 1600, 900);
      fill(155);
      text("Preciona espcaio para pasar de viñeta", 70, 300, 700, 70);
      fill(255);
      text("Sonic salió de compras para conseguir unos deliciosos chilidogs.", 70, 350, 700, 70);
    } else if (fragmentoHistoria == 1) {
      image(PreStart, 0, 437, 1600, 900);
      fill(155);
      text("Preciona espcaio para pasar de viñeta", 70, 300, 700, 70);
      fill(255);
      text("Se entretuvo dando vueltas por las tiendas y perdió bastante tiempo.", 70, 350, 700, 70);
    } else if (fragmentoHistoria == 2) {
      image(PreStart, 795, 0, 1600, 900);
      fill(155);
      text("Preciona espcaio para pasar de viñeta", 70, 250, 700, 70);
      textSize(15);
      fill(255);
      text("Ahora debe regresar a casa, pero la carretera está llena de vehículos. ¡Tendrá que esquivarlos!", 70, 300, 700, 70);
      textSize(20);
    } else if (fragmentoHistoria == 3) {
      fill(0, 0, 155);
      image(PreStart, 0, 0, 1600, 900);
      text("Preciona Espacio para iniciar el Juego", 70, 300, 700, 70);
      fill(255);
      text("Y ahora Sonic tandra que arreglaselas para legar a su hogar.", 70, 350, 700, 70);
    }
  } else if (pantallaActu == 4) {
    let tiempoTranscurrido = millis() - tiempoInicioRunner;

    runner();
    sonRunne.mover();
    sonRunne.actualizarDaño();
    genera.generar();
    actuobjet();
    dibuobjet();

    if (tiempoTranscurrido >= 25000) {
      meta.actualizar();
      meta.dibujar();
    }

    sonRunne.dibujar();
    sonRunne.comprobarColisiones(piedras, autos);
    sonRunne.dibujarVidas();
    dinero();

    if (millis() - tiempoInicioRunner < 5000) {
      push();

      textAlign(CENTER, CENTER);
      textSize(18);
      fill(255);
      stroke(0);
      strokeWeight(3);

      text("¡Esquiva los vehículos y las Piedras y llega a casa en 30 segundos!", 70, 370, 700, 70);

      pop();
    }

    if (tiempoTranscurrido >= 25000 && meta.comprobarContacto(sonRunne)) {
      pantallaActu = 6;
    } else if (tiempoTranscurrido >= duracionRunner) {
      pantallaActu = 5;
    }
  } else if (pantallaActu == 5) {
    runner();
    dibuobjet();
    dibugameover();
  } else if (pantallaActu == 6) {
    background(20);
    image(Final, 400, 225, 800, 450);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(36);
    text("¡Llegaste a tu Hogar!", width / 2, 180);

    textSize(20);
    text("¡Sonic podra comer sus Chilidogs!", width / 2, 240);

    text("Presiona I para volver al inicio", width / 2, 340);
    text("Presiona R para volver a jugar", width / 2, 370);
  }
}

function mousePressed() {
  if (pantallaActu == 5) {
    if (
      mouseX >= botonX &&
      mouseX <= botonX + botonAncho &&
      mouseY >= botonY &&
      mouseY <= botonY + botonAlto
      ) {
      reinrunner();
      velocidadbosque = 9;
    }
    return;
  }

  if (pantallaActu == 6) {
    pantallaActu = 1;
    sonicX = 400;
    sonicY = 310;
    return;
  }

  // Compra de chili-dog de prueba: solo en la pantalla del porche/tienda.
  if (pantallaActu == 3 && Dinero >= PrecioChili) {
    Dinero -= PrecioChili;
    ChilidogCom++;
  }
}

function keyPressed() {
  if (pantallaActu == 1 && keyCode == ENTER) {
    pantallaActu = 2;
    fragmentoHistoria = 0;
  } else if (pantallaActu == 2 && key == " ") {
    if (fragmentoHistoria < 3) {
      fragmentoHistoria++;
    } else {
      pantallaActu = 4;
      reinrunner(false);
    }
  } else if (pantallaActu == 4 && (key == "r" || key == "R")) {
    reinrunner(false);
  } else if (pantallaActu == 6 && (key == "i" || key == "I")) {
    pantallaActu = 1;
  } else if (pantallaActu == 6 && (key == "r" || key == "R")) {
    reinrunner(false);
  }
}
