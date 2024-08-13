let palavra;

function setup() {
  createCanvas(400, 400);
  let palavras =["AMOGUS", "AMONGUS", "AMOAMO", "GUSGUS", "SUS", "SUGOMA", "SUGUS"]
      palavra = random(palavras)
}


 function inicializarCores (){
  background("white")
  fill("red")
  stroke("black")
  textSize(64)
  textAlign(CENTER, CENTER)
}


function draw() {
  inicializarCores();

  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, mouseY, 1, palavra.length);
  let parcial = palavra.substring(0,quantidade);
  text(parcial,200,200);
}
