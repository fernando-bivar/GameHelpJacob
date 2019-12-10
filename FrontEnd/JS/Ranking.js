function CarregarTabela(data) {
    var tabela = "";
    for (let index = 0; index < data.length; index++) {
        tabela += "<tr><td>"+(index+1)+"</td><td>"+data[index]["nick"]+"</td><td>"+data[index]["tempo"]+"</td></tr>";
    }
    document.getElementById("tabela").innerHTML = tabela;
}

window.onload = function () {
    $.ajax({
        url: 'http://localhost:8080/apiUser/selectUser',
        contentType: 'application/json',
        method: 'GET',
        success: function(data){
            CarregarTabela(data);
        }
    }); 
}