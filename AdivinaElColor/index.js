function generarRandom255(num){
    return (Math.random()*num).toFixed(0);
}

function generarRGB(){
	var color = "("+generarRandom255(255)+", " + generarRandom255(255) + ", " + generarRandom255(255) +")";
	return "rgb" + color;
}


function shuffle(array) {
	let currentIndex = array.length,  randomIndex;
	while (currentIndex > 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
  		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
	return array;
}

var colorGanador = generarRGB();
document.getElementById('rgb').innerHTML = colorGanador;

function pintarDeFondo(e){

	const td = e.target;
		if(td.style.backgroundColor == colorGanador){
			console.log("Has ganado");
		}
		else{
			td.style.backgroundColor = "white";
		}
	
}

function colorAlasCasillasHard(){
	ArrayColores = [colorGanador, generarRGB(),generarRGB(),generarRGB(),generarRGB(),generarRGB()];
	shuffle(ArrayColores);
	document.getElementById("casilla1").style.backgroundColor = ArrayColores[0];
	document.getElementById("casilla2").style.backgroundColor = ArrayColores[1];
	document.getElementById("casilla3").style.backgroundColor = ArrayColores[2];
	document.getElementById("casilla4").style.backgroundColor = ArrayColores[3];
	document.getElementById("casilla5").style.backgroundColor = ArrayColores[4];
	document.getElementById("casilla6").style.backgroundColor = ArrayColores[5];
}

function colorAlasCasillasEasy(){
	ArrayColoresEasy = [colorGanador, generarRGB(),generarRGB()];
	shuffle(ArrayColoresEasy);
	document.getElementById("casilla1").style.backgroundColor = ArrayColoresEasy[0];
	document.getElementById("casilla2").style.backgroundColor = ArrayColoresEasy[1];
	document.getElementById("casilla3").style.backgroundColor = ArrayColoresEasy[2];
	document.getElementById("casilla4").style.backgroundColor = "white";
	document.getElementById("casilla5").style.backgroundColor = "white";
	document.getElementById("casilla6").style.backgroundColor = "white";

}


function JugarHard() {

	colorAlasCasillasHard();
}

JugarHard();
const newcolors = document.getElementById("newcolors");
newcolors.addEventListener("click",JugarHard);

const tds = document.querySelectorAll("td");
tds.forEach(td => {
  td.addEventListener("click", pintarDeFondo);
});

const hard = document.getElementById("hard");
hard.addEventListener("click",JugarHard);
const easy = document.getElementById("easy");
easy.addEventListener("click",colorAlasCasillasEasy);