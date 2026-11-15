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
  desplabosque += velocidadbosque;
  if (desplabosque >= altobosque) {
    desplabosque -= altobosque;
  }

  image(fondobosque, 400, 225 + desplabosque, 1450, altobosque);
  image(fondobosque, 400, 225 + desplabosque - altobosque, 1450, altobosque);
}

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
