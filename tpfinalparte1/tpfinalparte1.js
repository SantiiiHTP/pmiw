/*
Nombre y Apellido: Martiniano Santarelli y Santiago Ramirez
Comisión 3
TPfinalparte2
2026

Video: https://www.youtube.com/watch?v=YgEeyL6fE30

*/

let pantalla = [];
let pantallaActual = 1;

let tituloM;
let islaM;
let palacio1M;
let peligroM;
let palacio2M;
let eggmanM;
let finalM;

let tituloS;
let flechaS;
let errorS;
let electroS;

let musicaAnt = 0;
let musicaNueva;

function preload(){
  //pantallas
  for (let i=0; i < 20; i++){
    pantalla[i + 1] = loadImage("data/Sonicpantallas_" + (i + 1) + ".png");
  }
  
  //musica
  tituloM = loadSound("data/titulo.mp3");
  islaM = loadSound("data/isla.mp3");
  palacio1M = loadSound("data/palacio1.mp3");
  peligroM = loadSound("data/peligro.mp3");
  palacio2M = loadSound("data/palacio2.mp3");
  eggmanM = loadSound("data/eggman.mp3");
  finalM = loadSound("data/fin.mp3");
  
  //sonidos
  tituloS = loadSound("data/empiezo.mp3");
  flechaS = loadSound("data/flecha.mp3");
  errorS = loadSound("data/mal.mp3");
  electroS = loadSound("data/electro.mp3");
}

function setup() {
createCanvas(800,450);
}

function draw() {
image(pantalla[pantallaActual], 0, 0, width, height);
}

function reproducirMusica() {

  if (pantallaActual == 1) {
    musicaNueva = tituloM;
  }
  else if (pantallaActual == 2 || pantallaActual == 3) {
    musicaNueva = islaM;
  }
  else if (pantallaActual == 4) {
    musicaNueva = palacio1M;
  }
  else if (pantallaActual >= 5 && pantallaActual <= 7) {
    musicaNueva = peligroM;
  }
  else if (pantallaActual >= 8 && pantallaActual <= 12) {
    musicaNueva = palacio2M;
  }
  else if (pantallaActual >= 13 && pantallaActual <= 18) {
    musicaNueva = eggmanM;
  }
  else if (pantallaActual >= 19 && pantallaActual <= 20) {
    musicaNueva = finalM;
  }

  // Si es la misma, no hace nada
  if (musicaNueva == musicaAnt) {
    return;
  }

  // Detener música anterior
  if (musicaAnt != 0) {
    musicaAnt.stop();
  }

  // Reproducir la música que sigue
  musicaNueva.play();

  musicaAnt = musicaNueva;
}

function cambiarPantalla(nuevaPantalla) {
  pantallaActual = nuevaPantalla;
  reproducirMusica();
}

function mousePressed() {
    userStartAudio();
    reproducirMusica();
    
    if (pantallaActual == 1) {
      if (mouseX >= 356 && mouseY >= 380 && mouseX <= 412 && mouseY <= 435) {
        cambiarPantalla(2);
        tituloS.play();
      }
    }
    else if (pantallaActual == 2) {
      if (mouseX >= 720 && mouseY >= 380 && mouseX <= 776 && mouseY <= 435) {
        cambiarPantalla(3);
        flechaS.play();
      }
    }
    else if (pantallaActual == 3) {
      if (mouseX >= 720 && mouseY >= 380 && mouseX <= 776 && mouseY <= 435) {
        cambiarPantalla(4);
        flechaS.play();
      }
    }
    else if (pantallaActual == 4) {
    if (mouseX >= 720 && mouseY >= 380 && mouseX <= 776 && mouseY <= 435) {
        cambiarPantalla(5);
        flechaS.play();
      }
    }
    else if (pantallaActual == 5) {
    if (mouseX >= 720 && mouseY >= 380 && mouseX <= 776 && mouseY <= 435) {
        cambiarPantalla(6);
        flechaS.play();
      }
    }
    else if (pantallaActual == 6) {
    if (mouseX >= 720 && mouseY >= 380 && mouseX <= 776 && mouseY <= 435) {
        cambiarPantalla(7);
        flechaS.play();
      }
    }
    else if (pantallaActual == 7) {
    if (mouseX >= 720 && mouseY >= 380 && mouseX <= 776 && mouseY <= 435) {
        cambiarPantalla(8);
        flechaS.play();
      }
    }
    else if (pantallaActual == 8) {
    if (mouseX >= 484 && mouseY >= 305 && mouseX <= 540 && mouseY <= 355) {
        cambiarPantalla(9);
        errorS.play();
      }
      if (mouseX >= 603 && mouseY >= 145 && mouseX <= 659 && mouseY <= 203) {
        cambiarPantalla(10);
        flechaS.play();
      }
      if (mouseX >= 512 && mouseY >= 34 && mouseX <= 559 && mouseY <= 84) {
        cambiarPantalla(13);
        flechaS.play();
      }
    }
    else if (pantallaActual == 9) {
      if (mouseX >= 24 && mouseY >= 380 && mouseX <= 80 && mouseY <= 435) {
        cambiarPantalla(8);
        flechaS.play();
      }
    }
    else if (pantallaActual == 10) {
    if (mouseX >= 720 && mouseY >= 380 && mouseX <= 776 && mouseY <= 435) {
        cambiarPantalla(11);
        flechaS.play();
      }
    }
    else if (pantallaActual == 11) {
    if (mouseX >= 484 && mouseY >= 305 && mouseX <= 540 && mouseY <= 355) {
        cambiarPantalla(12);
        errorS.play();
      }
      if (mouseX >= 512 && mouseY >= 34 && mouseX <= 559 && mouseY <= 84) {
        cambiarPantalla(15);
        flechaS.play();
      }
    }
    else if (pantallaActual == 12) {
    if (mouseX >= 24 && mouseY >= 380 && mouseX <= 80 && mouseY <= 435) {
        cambiarPantalla(11);
        flechaS.play();
      }
    }
    else if (pantallaActual == 13) {
    if (mouseX >= 720 && mouseY >= 380 && mouseX <= 776 && mouseY <= 435) {
        cambiarPantalla(14);
        errorS.play();
      }
    }
    else if (pantallaActual == 14) {
    if (mouseX >= 24 && mouseY >= 380 && mouseX <= 80 && mouseY <= 435) {
        cambiarPantalla(8);
        flechaS.play();
      }
    }
    else if (pantallaActual == 15) {
    if (mouseX >= 720 && mouseY >= 380 && mouseX <= 776 && mouseY <= 435) {
        cambiarPantalla(16);
        flechaS.play();
      }
    }
    else if (pantallaActual == 16) {
    if (mouseX >= 720 && mouseY >= 380 && mouseX <= 776 && mouseY <= 435) {
        cambiarPantalla(17);
        flechaS.play();
      }
    }
    else if (pantallaActual == 17) {
    if (mouseX >= 720 && mouseY >= 380 && mouseX <= 776 && mouseY <= 435) {
        cambiarPantalla(18);
        electroS.play();
      }
    }
    else if (pantallaActual == 18) {
    if (mouseX >= 720 && mouseY >= 380 && mouseX <= 776 && mouseY <= 435) {
        cambiarPantalla(19);
        flechaS.play();
      }
    }
    else if (pantallaActual == 19) {
    if (mouseX >= 720 && mouseY >= 380 && mouseX <= 776 && mouseY <= 435) {
        cambiarPantalla(20);
        flechaS.play();
      }
    }
    else if (pantallaActual == 20) {
    if (mouseX >= 24 && mouseY >= 380 && mouseX <= 80 && mouseY <= 435) {
        cambiarPantalla(1);
        flechaS.play();
      }
    }
}
