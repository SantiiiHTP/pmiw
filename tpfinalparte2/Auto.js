class Auto {
  constructor(x, y, direccion, velocidad, desvio, tipo) {
    this.x = x;
    this.y = y;
    this.direccion = direccion;
    this.velocidad = velocidad;
    this.desvio = desvio;
    this.tipo = tipo;
  }

  actualizar() {
    this.y += this.velocidad * this.direccion;
    this.x += this.desvio * 0.02;
  }

  dibujar() {
    if (!imgautos[this.tipo]) return;

    push();
    translate(this.x, this.y);

    if (this.direccion == -1) {
      rotate(PI);
    }

    image(imgautos[this.tipo], 0, 0, 180, 180);
    pop();
  }
}
