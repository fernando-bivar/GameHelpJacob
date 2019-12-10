function ReceberInf() {
    if (ValidarNick() == true && ValidarEmail() == true && ValidarSenha() == true && ValidarSenha2() == true) {
        $.ajax('http://127.0.0.1:8080/apiUser/insertUser', {
            contentType: 'application/json',
            cache: false,
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify({
                email: document.getElementById("email").value,
                nick: document.getElementById("nick").value,
                senha: document.getElementById("senha").value,
                tempo: 60
            }),
            method: 'POST',
            success: function(result) {
                if (result == true) {
                    alert("USUARIO CADASTRADO COM SUCESSO!");
                    window.location.href = "Index.html";
                } else {
                    alert("ALGO DEU ERRADO: USUARIO JA CADASTRADO!");
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
function ValidarEmail() {
    if (document.getElementById("email").value.length == 0) {
        document.getElementById("errEmail").innerHTML = "CAMPO EMAIL VAZIO!";
        return false;
    }else if (document.getElementById("email").value.indexOf("@") != -1) {
        document.getElementById("errEmail").innerHTML = "";
        return true;
    } else {
        document.getElementById("errEmail").innerHTML = "CAMPO EMAIL INVÁLIDO!";
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

function ValidarSenha2() {
    if (document.getElementById("senha").value == document.getElementById("senha2").value) {
        document.getElementById("errSenha2").innerHTML = "";
        return true;
    } else {
        document.getElementById("errSenha2").innerHTML = "SENHAS NÃO COINCIDEM!";
        return false;
    }
}

