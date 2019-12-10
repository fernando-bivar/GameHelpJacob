function ReceberInf() {
    if (ValidarNick() == true && ValidarSenha() == true) {
        $.ajax('http://127.0.0.1:8080/apiUser/acessUser', {
            contentType: 'application/json',
            cache: false,
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify({
                nick: document.getElementById("nick").value,
                senha: document.getElementById("senha").value
            }),
            method: 'POST',
            success: function(result) {
                if (result == true) {
                    nick = document.getElementById("nick").value;
                    EntrarNoJogo();
                } else {
                    alert("LOGIN OU SENHA INCORRETO!");
                }
            }
        });

        return true;
    } else {
        return false;
    }
}

function ValidarNick() {
    if (document.getElementById("nick").value.length > 0) {
        document.getElementById("errNick").innerHTML = "";
        return true;
    } else {
        document.getElementById("errNick").innerHTML = "NICK VAZIO!";
        return false;
    }
}

function ValidarSenha() {
    if (document.getElementById("senha").value.length == 0) {
        document.getElementById("errSenha").innerHTML = "CAMPO SENHA VAZIO!";
        return false;
    }else if (document.getElementById("senha").value.length >= 4) {
        document.getElementById("errSenha").innerHTML = "";
        return true;
    } else {
        document.getElementById("errSenha").innerHTML = "CAMPO SENHA INVÁLIDA!";
        return false;
    }
}

function EntrarNoJogo() {
    window.location.href = "Jogo.html";
}