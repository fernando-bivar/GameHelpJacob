var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");
var btnStart = document.getElementById("btnStart");
var btnRestart = document.getElementById("btnRestart");

var nx = 0, ny = 0;
var px = 1, py = 1;

var cx = 1, cy = 10;
var ax = 1, ay = 5;
var sx = 9, sy = 11;
var ax1 = 18, ay1 = 11;
var rx = 20, ry = 6;
var acutiox = 10, acutioy = 1;
var ox = 18, oy = 1;

var parede = new Image();
parede.src = "IMAGE/Parede.png";
var piso = new Image();
piso.src = "IMAGE/Piso.png";
var estante = new Image();
estante.src = "IMAGE/Estante.png";
var porta = new Image();
porta.src = "IMAGE/Porta.png";
var boneco = new Image();
boneco.src = "IMAGE/Boneco.png";
var buraco = new Image();
buraco.src = "IMAGE/Buraco.png";

var c = new Image();
c.src = "IMAGE/C.png";
var a = new Image();
a.src = "IMAGE/A.png";
var s = new Image();
s.src = "IMAGE/S.png";
var r = new Image();
r.src = "IMAGE/R.png";
var acutio = new Image();
acutio.src = "IMAGE/Acutio.png";
var o = new Image();
o.src = "IMAGE/O.png";

var win = new Image();
win.src = "IMAGE/Congratulations.png";
var lose = new Image();
lose.src = "IMAGE/GameOver.png"; 
var init = new Image();
init.src = "IMAGE/Welcome.png";
init.onload = function () {
	Cenario.mapa = new Array();
	
	for (i = 0; i < mapaCriado1.length; i++) {
		Cenario.mapa.push(mapaCriado1[i].slice(0));
	}
	nx = Cenario.mapa[0].length;
	ny = Cenario.mapa.length;
	canvas.width = nx * largura;
	canvas.height = ny * largura;

	ctx.drawImage(init,0,0,canvas.width,canvas.height);
}
var music = new Audio();

var cont = 60;
var tempo;
var time;

btnRestart.disabled = true;
btnRestart.style.display = "none";

function NewGame() {
	Cenario.mapa = new Array();
	
	for (i = 0; i < mapaCriado1.length; i++) {
		Cenario.mapa.push(mapaCriado1[i].slice(0));
	}
	nx = Cenario.mapa[0].length;
	ny = Cenario.mapa.length;
	canvas.width = nx * largura;
	canvas.height = ny * largura;
	
	DesenharMapa();
	window.addEventListener("keydown", KeyController);
	tempo = setTimeout('Contador()',1000);
}

function DesenharMapa() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = "#000000";

	for (y = 0; y < ny; y++) {
		for (x = 0; x < nx; x++) {
			if (Cenario.mapa[y][x] == Cenario.parede) {
				ctx.drawImage(parede,x*largura,y*largura,largura,largura);
			}else if (Cenario.mapa[y][x] == Cenario.vazio) {
				ctx.drawImage(piso,x*largura,y*largura,largura,largura);
			}else if(Cenario.mapa[y][x] == Cenario.estante){
				ctx.drawImage(estante,x*largura,y*largura,largura,largura);
			}else if (Cenario.mapa[y][x] == Cenario.proximoStage){
				ctx.drawImage(porta,x*largura,y*largura,largura,largura);
			}else if (Cenario.mapa[y][x] == Cenario.buracos) {
				ctx.drawImage(buraco,x*largura,y*largura,largura,largura);
			}
		}
	}

	ctx.drawImage(boneco,px*largura,py*largura,largura,largura);
	
	
	ctx.drawImage(c,cx*largura,cy*largura,largura,largura);
	ctx.drawImage(a,ax*largura,ay*largura,largura,largura);
	ctx.drawImage(s,sx*largura,sy*largura,largura,largura);
	ctx.drawImage(a,ax1*largura,ay1*largura,largura,largura);
	ctx.drawImage(r,rx*largura,ry*largura,largura,largura);
	ctx.drawImage(acutio,acutiox*largura,acutioy*largura,largura,largura);
	ctx.drawImage(o,ox*largura,oy*largura,largura,largura);
}

function PauseAndPlay() {
	if (document.getElementById("btnStart").innerHTML == "START") {
		NewGame();
		music.src = "MUSIC/Game.mp3";
		music.play();
		btnStart.innerHTML = "PAUSE";
		btnRestart.disabled = false;
		btnRestart.style.display = "";
	}else if (document.getElementById("btnStart").innerHTML == "PAUSE") {
		clearTimeout(tempo);
		music.pause();
		window.removeEventListener("keydown",KeyController);
		btnStart.innerHTML = "PLAY";
	}else {
		tempo = setTimeout("Contador()",1000)
		music.play();
		window.addEventListener("keydown",KeyController);
		btnStart.innerHTML = "PAUSE";
	}	
}

function Restart() {
	music.pause();
	document.getElementById("tempo").innerHTML = "TEMPO:";
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(init,0,0,canvas.width,canvas.height);
	window.removeEventListener("keydown",KeyController);
	InicarConfig();
	btnStart.innerHTML = "START";
	clearTimeout(tempo);

	btnStart.disabled = false;
	btnStart.style.display = "";
	btnRestart.disabled = true;
	btnRestart.style.display = "none";
}

function InicarConfig() {
	nx = 0; 
	ny = 0;

	px = 1; 
	py = 1;

	cx = 1; 
	cy = 10;
	ax = 1; 
	ay = 5;
	sx = 9;
	sy = 11;
	ax1 = 18; 
	ay1 = 11;
	rx = 20; 
	ry = 6;
	acutiox = 10; 
	acutioy = 1;
	ox = 18; 
	oy = 1;

	porta.src = "IMAGE/Porta.png";
	
	primeira = false;
	segunda = false;
	terceira = false;
	quarta = false;
	quinta = false;
	sexta = false;
	setima = false;

	document.getElementById("C").style.color = "#FF0000";
	document.getElementById("A").style.color = "#FF0000";
	document.getElementById("S").style.color = "#FF0000";
	document.getElementById("A1").style.color = "#FF0000";
	document.getElementById("R").style.color = "#FF0000";
	document.getElementById("Acutio").style.color = "#FF0000";
	document.getElementById("O").style.color = "#FF0000";

	cont = 60;
}

function Contador() {
	cont--;
	document.getElementById("tempo").innerHTML = "TEMPO: "+cont;
	
	if (cont == 0) {
		clearTimeout(tempo);
		alert("SEU TEMPO ACABOU!")
	} else {
		tempo = setTimeout("Contador()",1000);
	}
}

function WinGame() {
    if ((Cenario.mapa[py][px] == Cenario.proximoStage)&&(porta.src.substr(-10,porta.src.length) == "Porta2.png")&&(cont > 0)){
		music.pause();
		music.src = "MUSIC/Win.mp3";
		music.play();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(win, 0, 0,canvas.width,canvas.height);
		clearTimeout(tempo);
		window.removeEventListener("keydown",KeyController);

		time = 60 - cont;
		AtualizarScore(time);

		btnStart.disabled = true;
		btnStart.style.display = "none";
    }
}

function LoseGame() {
    if ((Cenario.mapa[py][px] == Cenario.buracos)||(cont <= 0)) {
		music.pause();
		music.src = "MUSIC/Lose.mp3";
		music.play();
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(lose,0,0,canvas.width,canvas.height);
		clearTimeout(tempo);
		window.removeEventListener("keydown",KeyController);

		btnStart.disabled = true;
		btnStart.style.display = "none";
    }
}

function AtualizarScore(tempoGame) {
	$.ajax('http://127.0.0.1:8080/apiUser/scoreUser', {
            contentType: 'application/json',
            cache: false,
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify({
                tempo: tempoGame
            }),
            method: 'POST',
            success: function(result) {
                if (result == true) {
                    alert("VOCÊ ATINGIU UM NOVO RECORD");
                }
            }
        });
}