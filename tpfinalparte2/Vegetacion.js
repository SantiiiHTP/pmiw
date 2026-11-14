class Vegetacion {
  constructor(x, y, tipo) {
    this.x = x;
    this.y = y;
    this.tipo = tipo;
  }

  actualizar() {
    this.y += velocidadbosque;
  }

  dibujar() {
    if (!imgvegetacion[this.tipo]) return;

    image(imgvegetacion[this.tipo], this.x, this.y, 55, 55);
  }
}
