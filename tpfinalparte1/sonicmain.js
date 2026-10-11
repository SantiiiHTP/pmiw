function sonic() {

  movimiento = false;

  if (keyIsDown(LEFT_ARROW)) {
    sonicX -= velocidad;
    direccion = -1;
    movimiento = true;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    sonicX += velocidad;
    direccion = 1;
    movimiento = true;
  }
  let anchoSonic = 100;

  sonicX = constrain(sonicX, anchoSonic / 2, width - anchoSonic / 2);

  let spriteActu;

  if (movimiento) {

    if (millis() - UcambioR >= tiempoEF) {
      Frun++;

      if (Frun >= sonicrun.length) {
        Frun = 0;
      }

      UcambioR = millis();
    }

    spriteActu = sonicrun[Frun];
  } else {

    if (millis() - UcambioI >= tiempoEF) {
      Fidle++;

      if (Fidle >= sonicidle.length) {
        Fidle = 0;
      }

      UcambioI = millis();
    }

    spriteActu = sonicidle[Fidle];
  }


  push();

  translate(sonicX, sonicY);

  if (direccion == -1) {
    scale(-1, 1);
  }

  image(spriteActu, 0, 0, 200, 200);

  pop();
}

function dinero() {
  fill(255);
  textSize(12);
  stroke(0);
  strokeWeight(3);
  textAlign(LEFT);
  text("Dinero: $" + Dinero, 30, 50);
  text("Chili dogs comprados: " + ChilidogCom, 30, 75);
  text("Haz clic para comprar un chili dog ($20)", 30, 100);
}

function runner() {
  desplabosque += velocidadbosque;

  if (desplabosque >= altobosque) {
    desplabosque = 0;
  }

  image(fondobosque, width / 2, height / 2 + desplabosque);
  image(fondobosque, width / 2, height / 2 + desplabosque - altobosque);
}

function moverrunner() {
  if (keyIsDown(LEFT_ARROW)) {
    runersonicX -= velocidadsonic;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    runersonicX += velocidadsonic;
  }

  if (keyIsDown(UP_ARROW)) {
    runersonicY -= velocidadsonic;
  }

  if (keyIsDown(DOWN_ARROW)) {
    runersonicY += velocidadsonic;
  }

  runersonicX = constrain(runersonicX, 50, width - 50);
  runersonicY = constrain(runersonicY, 50, height - 50);
}

function dibujarsonic() {
  let spriterunner = gifsonicrun;

  if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)) {
    spriterunner = gifsonicturn;
  }

  push();
  translate(runersonicX, runersonicY);

  if (keyIsDown(RIGHT_ARROW)) {
    scale(-1, 1);
  }

  image(spriterunner, 0, 0, 100, 100);
  pop();
}
