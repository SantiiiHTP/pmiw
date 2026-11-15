class generadorObjetos {
  constructor() {

    this.tiempoveg = 0;
    this.tiempopied = 0;
    this.tiempoauto = 0;
  }

  generarVegetacion() {
    this.tiempoveg--;

    if (this.tiempoveg <= 0 && imgvegetacion.length > 0) {
      let lado = random() < 0.5;
      let x;

      if (lado) x = random(25, carreteraIzq - 10);
      else x = random(carreteraDer + 10, 775);

      vegetacion.push(new Vegetacion(
        x,
        -30,
        floor(random(imgvegetacion.length))
        ));

      this.tiempoveg = floor(random(6, 9));
    }
  }

  generarPiedra() {
    this.tiempopied--;

    if (this.tiempopied <= 0 && imgpiedras.length > 0) {
      let lado = random() < 0.5;
      let x;

      if (lado) x = random(35, carreteraIzq - 10);
      else x = random(carreteraDer + 10, 765);

      piedras.push(new Piedra(
        x,
        -30,
        floor(random(imgpiedras.length))
        ));

      this.tiempopied = floor(random(20, 50));
    }
  }

  generarAuto() {
    this.tiempoauto--;

    if (this.tiempoauto <= 0 && imgautos.length > 0) {
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

      this.tiempoauto = floor(random(45, 60));
    }
  }

  generar() {
    this.generarVegetacion();
    this.generarPiedra();
    this.generarAuto();
  }
}
