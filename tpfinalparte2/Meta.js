class Meta {
  constructor() {
    this.y = -20;
    this.velocidad = 0.817;
    this.grosor = 12;
  }

  actualizar() {
    this.y += this.velocidad;
  }

  dibujar() {
    push();

    stroke(255);
    strokeWeight(this.grosor);
    line(0, this.y, width, this.y);

    pop();
  }

  comprobarContacto(sonic) {
    const sonicAlto = 45;

    return abs(sonic.y - this.y) < (sonicAlto + this.grosor) / 2;
  }
}
