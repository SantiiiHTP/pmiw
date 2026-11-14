function sonic() {
  movimiento = keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW);

  if (keyIsDown(LEFT_ARROW)) {
    sonicX -= velocidad;
    direccion = -1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    sonicX += velocidad;
    direccion = 1;
  }

  sonicX = constrain(sonicX, 30, 770);

  if (movimiento) {
    UcambioR++;
    if (UcambioR >= 5) {
      Frun = (Frun + 1) % sonicrun.length;
      UcambioR = 0;
    }
    push();
    translate(sonicX, sonicY);
    scale(direccion, 1);
    image(sonicrun[Frun], 0, 0, 250, 250);
    pop();
  } else {
    UcambioI++;
    if (UcambioI >= 10) {
      Fidle = (Fidle + 1) % sonicidle.length;
      UcambioI = 0;
    }
    push();
    translate(sonicX, sonicY);
    scale(direccion, 1);
    image(sonicidle[Fidle], 0, 0, 250, 250);
    pop();
  }
}

function dinero() {
  push();
  rectMode(CORNER);
  noStroke();
  fill(0, 0, 0, 150);
  rect(12, 12, 165, 38, 8);
  fill(255);
  textAlign(LEFT, CENTER);
  textSize(17);
  text("$ " + Dinero, 25, 31);
  pop();
}

function textoInteraccion(mensaje, x, y) {
  push();
  rectMode(CENTER);
  noStroke();
  fill(0, 0, 0, 175);
  rect(x, y, 360, 32, 6);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(mensaje, x, y);
  pop();
}

function runner() {
  // Fondo vertical infinito. Para que no se note el empalme,
  // el borde superior e inferior de fondobosque deben coincidir visualmente.
  desplabosque += velocidadbosque;
  if (desplabosque >= altobosque) {
    desplabosque -= altobosque;
  }

  image(fondobosque, 400, 225 + desplabosque, 1450, altobosque);
  image(fondobosque, 400, 225 + desplabosque - altobosque, 1450, altobosque);
}
/*
function moverrunner() {
 if (keyIsDown(LEFT_ARROW)) runersonicX -= velocidadsonic;
 if (keyIsDown(RIGHT_ARROW)) runersonicX += velocidadsonic;
 if (keyIsDown(UP_ARROW)) runersonicY -= velocidadsonic;
 if (keyIsDown(DOWN_ARROW)) runersonicY += velocidadsonic;
 
 runersonicX = constrain(runersonicX, 35, 765);
 runersonicY = constrain(runersonicY, 45, 405);
 }
 
 function dibujarsonic() {
 // Parpadeo: dibuja a Sonic solo en algunos fotogramas durante invulnerabilidad.
 if (invulner && frameCount % 8 < 4) return;
 
 let sprite = gifsonicrun;
 
 push();
 translate(runersonicX, runersonicY);
 
 // Si se mueve hacia la izquierda, voltea el sprite horizontalmente.
 if (keyIsDown(LEFT_ARROW)) {
 sprite = gifsonicturn;
 } else if (keyIsDown(RIGHT_ARROW)) {
 scale(-1, 1);
 sprite = gifsonicturn;
 }
 
 image(sprite, 0, 0, 85, 100);
 pop();
 }
 
 function genobjet() {
 tiempoveg--;
 if (tiempoveg <= 0 && imgvegetacion.length > 0) {
 let lado = random() < 0.5;
 let x;
 if (lado) x = random(25, carreteraIzq - 10);
 else x = random(carreteraDer + 10, 775);
 
 vegetacion.push(new Vegetacion(
 x,
 -30,
 floor(random(imgvegetacion.length))
 ));
 tiempoveg = floor(random(6, 9));
 }
 
 tiempopied--;
 if (tiempopied <= 0 && imgpiedras.length > 0) {
 let lado = random() < 0.5;
 let x;
 if (lado) x = random(35, carreteraIzq - 10);
 else x = random(carreteraDer + 10, 765);
 
 piedras.push(new Piedra(
 x,
 -30,
 floor(random(imgpiedras.length))
 ));
 tiempopied = floor(random(20, 50));
 }
 
 tiempoauto--;
 if (tiempoauto <= 0 && imgautos.length > 0) {
 let vieneDeArriba = random() < 0.5;
 let x;
 
 if (vieneDeArriba) {
 x = random(carreteraIzq + 20, carreteraDer - 20);
 autos.push(new Auto(
 x,
 -70,
 1,
 velautobajo,
 random(-15, 15),
 floor(random(imgautos.length))
 ));
 } else {
 x = random(carreteraIzq + 20, carreteraDer - 20);
 autos.push(new Auto(
 x,
 height + 70,
 -1,
 velautoariba,
 random(-15, 15),
 floor(random(imgautos.length))
 ));
 }
 tiempoauto = floor(random(45, 60));
 }
 }
 */
function actuobjet() {
  for (let i = vegetacion.length - 1; i >= 0; i--) {
    vegetacion[i].actualizar();

    if (vegetacion[i].y > height + 50) vegetacion.splice(i, 1);
  }

  for (let i = piedras.length - 1; i >= 0; i--) {
    piedras[i].actualizar();

    if (piedras[i].y > height + 50) piedras.splice(i, 1);
  }

  for (let i = autos.length - 1; i >= 0; i--) {
    autos[i].actualizar();

    if (autos[i].y > height + 90 || autos[i].y < -90) {
      autos.splice(i, 1);
    }
  }
}

function dibuobjet() {
  for (let v of vegetacion) {
    v.dibujar();
  }

  for (let p of piedras) {
    p.dibujar();
  }

  for (let a of autos) {
    a.dibujar();
  }
}
/*
function comprchoques() {
 if (sonRunne.invulnerable) return;
 
 const sonicAncho = 30;
 const sonicAlto = 45;
 
 for (let p of piedras) {
 const piedraAncho = 75;
 const piedraAlto = 75;
 
 if (
 abs(sonRunne.x - p.x) < (sonicAncho + piedraAncho) / 2 &&
 abs(sonRunne.y - p.y) < (sonicAlto + piedraAlto) / 2
 ) {
 sonRunne.recibirDaño();
 return;
 }
 }
 
 for (let a of autos) {
 const autoAncho = 45;
 const autoAlto = 75;
 
 if (
 abs(sonRunne.x - a.x) < (sonicAncho + autoAncho) / 2 &&
 abs(sonRunne.y - a.y) < (sonicAlto + autoAlto) / 2
 ) {
 sonRunne.recibirDaño();
 return;
 }
 }
 }
 
 function damage() {
 if (invulner) return;
 
 vidas--;
 
 invulner = true;
 tiempinvulner = decoinvulbe;
 
 // Retroceso contrario a la dirección horizontal del movimiento.
 let retrocesoHorizontal = 0;
 if (keyIsDown(LEFT_ARROW)) retrocesoHorizontal = 8;
 else if (keyIsDown(RIGHT_ARROW)) retrocesoHorizontal = -8;
 else retrocesoHorizontal = (runersonicX < width / 2) ? 8 : -8;
 
 retroceX = retrocesoHorizontal;
 retroceY = 5;
 
 if (vidas <= 0) {
 pantallaActu = 5;
 }
 }
 
 function actuDaño() {
 if (invulner) {
 tiempinvulner--;
 
 runersonicX += retroceX;
 runersonicY += retroceY;
 
 retroceX *= 0.85;
 retroceY *= 0.85;
 
 runersonicX = constrain(runersonicX, 35, 765);
 runersonicY = constrain(runersonicY, 45, 405);
 
 if (tiempinvulner <= 0) {
 invulner = false;
 retroceX = 0;
 retroceY = 0;
 }
 }
 }
 
 function dibujarVidas() {
 push();
 textAlign(LEFT, CENTER);
 textSize(18);
 fill(255);
 noStroke();
 text("Vidas: " + "♥ ".repeat(max(0, vidas)), 15, 65);
 pop();
 }
 */
function dibugameover() {
  push();
  noStroke();
  fill(0, 0, 0, 175);
  rectMode(CORNER);
  rect(0, 0, width, height);

  fill(255, 55, 55);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("GAME OVER", width / 2, 150);

  fill(255);
  textSize(19);
  text("Sonic se quedó sin vidas", width / 2, 220);

  fill(35, 100, 220);
  rectMode(CORNER);
  rect(botonX, botonY, botonAncho, botonAlto, 10);

  fill(255);
  textSize(12);
  text("Volver a intentar", botonX + botonAncho / 2, botonY - 5 + botonAlto / 2);
  pop();

  velocidadbosque = 0;
}

function reinrunner(cambiarPantalla = true) {
  sonRunne.reiniciar();

  desplabosque = 0;

  vegetacion = [];
  piedras = [];
  autos = [];

  tiempoveg = 0;
  tiempopied = 0;
  tiempoauto = 0;

  meta = new Meta();
  tiempoInicioRunner = millis();

  if (cambiarPantalla) pantallaActu = 4;
}
