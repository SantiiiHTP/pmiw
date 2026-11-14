class Piedra {
  constructor(x, y, tipo) {
    this.x = x;
    this.y = y;
    this.tipo = tipo;
  }

  actualizar() {
    this.y += velocidadbosque;
  }

  dibujar() {
    if (!imgpiedras[this.tipo]) return;

    image(imgpiedras[this.tipo], this.x, this.y, 75, 75);
  }
}
