class Sonic {
  constructor(x, y, velocidad, spriteRun, spriteTurn, vidas, invulnerable, tiempoInvulnerable, duracionInvulnerable, retrocesoX, retrocesoY) {
    this.x = 400;
    this.y = 320;
    this.velocidad = 4

      this.spriteRun = gifsonicrun
      this.spriteTurn = gifsonicturn

      this.vidas = 3;
    this.invulnerable = false;
    this.tiempoInvulnerable = 0;
    this.duracionInvulnerable = 120;

    this.retrocesoX = 0;
    this.retrocesoY = 0;
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) this.x -= this.velocidad;
    if (keyIsDown(RIGHT_ARROW)) this.x += this.velocidad;
    if (keyIsDown(UP_ARROW)) this.y -= this.velocidad;
    if (keyIsDown(DOWN_ARROW)) this.y += this.velocidad;

    this.x = constrain(this.x, 35, 765);
    this.y = constrain(this.y, 45, 405);
  }

  dibujar() {
    if (this.invulnerable && frameCount % 8 < 4) return;

    let sprite = this.spriteRun;

    push();
    translate(this.x, this.y);

    if (keyIsDown(LEFT_ARROW)) {
      sprite = this.spriteTurn;
    } else if (keyIsDown(RIGHT_ARROW)) {
      scale(-1, 1);
      sprite = this.spriteTurn;
    }

    image(sprite, 0, 0, 85, 100);
    pop();
  }

  recibirDaño() {
    if (this.invulnerable) return;

    this.vidas--;

    this.invulnerable = true;
    this.tiempoInvulnerable = this.duracionInvulnerable;
    let retrocesoHorizontal = 0;

    if (keyIsDown(LEFT_ARROW)) retrocesoHorizontal = 8;
    else if (keyIsDown(RIGHT_ARROW)) retrocesoHorizontal = -8;
    else retrocesoHorizontal = (this.x < width / 2) ? 8 : -8;

    this.retrocesoX = retrocesoHorizontal;
    this.retrocesoY = 5;

    if (this.vidas <= 0) {
      pantallaActu = 5;
    }
  }

  comprobarColisiones(piedras, autos) {
    if (this.invulnerable) return;

    const sonicAncho = 30;
    const sonicAlto = 45;

    for (let p of piedras) {
      const piedraAncho = 75;
      const piedraAlto = 75;

      if (
        abs(this.x - p.x) < (sonicAncho + piedraAncho) / 2 &&
        abs(this.y - p.y) < (sonicAlto + piedraAlto) / 2
        ) {
        this.recibirDaño();
        return;
      }
    }

    for (let a of autos) {
      const autoAncho = 45;
      const autoAlto = 75;

      if (
        abs(this.x - a.x) < (sonicAncho + autoAncho) / 2 &&
        abs(this.y - a.y) < (sonicAlto + autoAlto) / 2
        ) {
        this.recibirDaño();
        return;
      }
    }
  }

  actualizarDaño() {
    if (this.invulnerable) {
      this.tiempoInvulnerable--;

      this.x += this.retrocesoX;
      this.y += this.retrocesoY;

      this.retrocesoX *= 0.85;
      this.retrocesoY *= 0.85;

      this.x = constrain(this.x, 35, 765);
      this.y = constrain(this.y, 45, 405);

      if (this.tiempoInvulnerable <= 0) {
        this.invulnerable = false;
        this.retrocesoX = 0;
        this.retrocesoY = 0;
      }
    }
  }

  dibujarVidas() {
    push();
    textAlign(LEFT, CENTER);
    textSize(18);
    fill(255);
    noStroke();

    text("Vidas: " + "♥ ".repeat(max(0, this.vidas)), 15, 65);

    pop();
  }

  reiniciar() {
    this.x = 400;
    this.y = 320;

    this.vidas = 3;

    this.invulnerable = false;
    this.tiempoInvulnerable = 0;

    this.retrocesoX = 0;
    this.retrocesoY = 0;
  }
}
