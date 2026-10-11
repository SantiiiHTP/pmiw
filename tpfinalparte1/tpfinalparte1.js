let Dinero = 120;
let ChilidogCom = 0;

let PrecioChili = 20;

let fondo;
let fondo2;

let Fidle = 0;
let UcambioI = 0;
let tiempoEF = 200;

let Frun = 0;
let UcambioR = 0;

let sonicidle = [];
let sonicrun = [];

let sonicX = 400;
let sonicY = 310;
let velocidad = 8;
let direccion = 1;
let movimiento = false;

let pantallaActu = 4;

let puertaXatico = 400;
let puertaXpasillo = 70;
let rangoInteraccion = 60;

let puertaCerca = false;

let textosonic;

let runersonicX = 400;
let runersonicY = 320;

let velocidadsonic = 4;
let velocidadbosque = 9;

let gifsonicrun;
let gifsonicturn;

let fondobosque;
let desplabosque = 0;

let altobosque = 950;

function preload() {
  textosonic = loadFont("data/SonicAdvanceRegular-o66V.ttf");
  fondo = loadImage("data/fondo1ati.jpg");
  fondo2 = loadImage("data/fondo2.jpg");
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
}

function setup() {
  createCanvas(800, 450);
  imageMode(CENTER);
}

function draw() {
  background(155);
  textFont(textosonic);
  if (pantallaActu == 1) {
    image(fondo, 400, 225, 800, 450);
    sonic();
    dinero();
    puertaCerca = abs(sonicX - puertaXatico) < rangoInteraccion;
    if (puertaCerca) {
      fill(255);
      stroke(0);
      strokeWeight(3);
      textAlign(CENTER);
      textSize(12);

      text("[ E ] para interactuar", sonicX, sonicY - 100);

      noStroke();
      textAlign(LEFT);
    }
  } else if (pantallaActu == 2) {
    image(fondo2, 400, 225, 800, 450);
    sonic();
    dinero();
    puertaCerca = abs(sonicX - puertaXpasillo) < rangoInteraccion;
    if (puertaCerca) {
      fill(255);
      stroke(0);
      strokeWeight(3);
      textAlign(CENTER);
      textSize(12);

      text("[ E ] para interactuar", sonicX, sonicY - 100);

      noStroke();
      textAlign(LEFT);
    }
  } else if (pantallaActu == 3) {
    sonic();
    dinero();
  } else if (pantallaActu == 4) {
    runner();
    moverrunner();
    dibujarsonic();
  }
}

function mousePressed() {
  if (Dinero >= PrecioChili) {
    Dinero -= PrecioChili;
    ChilidogCom++;

    print("Compraste un chili dog");
  } else {
    print("No tienes suficiente dinero");
  }

  print("Dinero:", Dinero, "Chili dogs:", ChilidogCom);
}

function keyPressed() {
  if (key === 'e' || key === 'E') {
    if (pantallaActu == 1  && puertaCerca) {
      pantallaActu = 2;
      puertaCerca = false;
      sonicX = 750;
      sonicY = 360;
    } else if (pantallaActu == 2  && puertaCerca) {
      pantallaActu = 3;
      puertaCerca = false;
      sonicX = 400;
      sonicY = 360;
    }
  }
}
