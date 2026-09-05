//el trabajo esta incompleto por que probe de todo y las imagenes
//no cargan ademas de que no encontraba los sprites en png y tuve
//que hacerlos yo en png por eso queria mandalo para que m diga si
//usted puede ver las imagenes por qe por lo menos a mi no me carga 
//disculpe pero la computadora que tengo es muy mala asi que es probable
//que sea yo soy Santiago Ramirez 

let Fondo;
let sprite = [14];

function preload(){
 Fondo = loadImage("fondo.png");
}

function setup() {
  createCanvas(800,600);
}


function draw() {
  background(155);
  image(Fondo, 0,0,800,600);
}
