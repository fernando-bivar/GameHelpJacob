var Cenario = function () {}
Cenario.vazio = 1;
Cenario.parede = 0;
Cenario.proximoStage = 2;
Cenario.estante = 3
Cenario.joaozinho = 4
Cenario.buracos = 5

Cenario.mapa = null;

var largura = 60;
var intervalo = 200;

var Direcao = function() {
}
Direcao.naoDefinida = -1;
Direcao.cima = 0;
Direcao.baixo = 1;
Direcao.esquerda = 2;
Direcao.direita = 3;


var Teclas = function(){
}
Teclas.cima = 38;
Teclas.baixo = 40;
Teclas.esquerda = 37;
Teclas.direita = 39;

function KeyController(e) {
    var key = e.keyCode;

    if (key === Teclas.cima) {
        if (Cenario.mapa[py-1][px] != Cenario.parede) {
            if (Cenario.mapa[py-1][px] != Cenario.estante) {
                py--;
            }   
        }  
    }
    if (key === Teclas.baixo) {
        if (Cenario.mapa[py+1][px] != Cenario.parede) {
            if (Cenario.mapa[py+1][px] != Cenario.estante) {
                py++;
            }
        }
    }
    if (key === Teclas.esquerda) {
        if (Cenario.mapa[py][px-1] != Cenario.parede) {
            if (Cenario.mapa[py][px-1] != Cenario.estante) {
                px--;
            }
        }        
    }
    if (key === Teclas.direita) {
        if (Cenario.mapa[py][px+1] != Cenario.parede) {
            if (Cenario.mapa[py][px+1] != Cenario.estante) {
                px++;
            }
        } 
    }

    if (primeira == false) {
        PrimeiraLetra();
    }
    if (segunda == false) {
        SegundaLetra();
    }
    if (terceira == false) {
        TerceiraLetra();
    }
    if (quarta == false) {
        QuartaLetra();
    }
    if (quinta == false) {
        QuintaLetra();
    }
    if (sexta == false) {
        SextaLetra();
    }
    if (setima == false) {
        SetimaLetra();
    }

    DesenharMapa();

    if ((primeira==true)&&(segunda==true)&&
    (terceira==true)&&(quarta==true)&&(quinta==true)&&(sexta==true)&&(setima == true)) {
        porta.src = "IMAGE/Porta2.png";
    }
    WinGame();
    LoseGame();
}

var primeira = false,segunda = false,terceira = false,quarta = false,quinta = false,sexta = false,setima = false;

function PrimeiraLetra() {
    if ((cy == py)&&(cx == px)&&(segunda==false)&&(terceira==false)&&
    (quarta==false)&&(quinta==false)&&(sexta==false)&&(setima==false)) {
        document.getElementById("C").style.color = "#008000";
        cx = -1;
        cy = -1;
        primeira = true;
    }
}

function SegundaLetra() {
    if ((((ay == py)&&(ax == px))||((ay1 == py)&&(ax1 == px)))&&(primeira==true)&&(terceira==false)&&
    (quarta==false)&&(quinta==false)&&(sexta==false)&&(setima==false)) {
       document.getElementById("A").style.color = "#008000";
       if (ay == py) {
            ax = -1;
            ay = -1;
        } else {
            ax1 = -1;
            ay1 = -1; 
        }
       segunda = true;
    }
}

function TerceiraLetra() {
    if ((sy == py)&&(sx == px)&&(primeira==true)&&(segunda==true)&&
    (quarta==false)&&(quinta==false)&&(sexta==false)&&(setima==false)) {
       document.getElementById("S").style.color = "#008000";
       sx = -1;
       sy = -1;
       terceira = true;
    }
}

function QuartaLetra() {
    if ((((ay1 == py)&&(ax1 == px))||((ay == py)&&(ax == px)))&&(primeira==true)&&(segunda==true)&&
    (terceira==true)&&(quinta==false)&&(sexta==false)&&(setima==false)) {
       document.getElementById("A1").style.color = "#008000";
       if (ay == py) {
           ax = -1;
           ay = -1;
       } else {
           ax1 = -1;
           ay1 = -1; 
       }
       
       quarta = true;
    }
}

function QuintaLetra() {
    if ((ry == py)&&(rx == px)&&(primeira==true)&&(segunda==true)&&
    (terceira==true)&&(quarta==true)&&(sexta==false)&&(setima==false)) {
       document.getElementById("R").style.color = "#008000";
       rx = -1;
       ry = -1;
       quinta = true;
    }
}

function SextaLetra() {
    if ((acutioy == py)&&(acutiox == px)&&(primeira==true)&&(segunda==true)&&
    (terceira==true)&&(quarta==true)&&(quinta==true)&&(setima==false)) {
       document.getElementById("Acutio").style.color = "#008000";
       acutiox = -1;
       acutioy = -1;
       sexta = true;
    }
}

function SetimaLetra() {
    if ((oy == py)&&(ox == px)&&(primeira==true)&&(segunda==true)&&
    (terceira==true)&&(quarta==true)&&(quinta==true)&&(sexta==true)) {
       document.getElementById("O").style.color = "#008000";
       ox = -1;
       oy = -1;
       setima = true;
    }
}