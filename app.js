let nomesDosAmigos = [];

function adicionarAmigo () {
    let nome = document.getElementById('amigo').value;
    if (nome == '') {
        alert ("Campo vazio!");
    } else 
        nomesDosAmigos.push(nome);
        console.log (nomesDosAmigos);
        document.getElementById ('amigo').value = '';
        mostrarListaAmigos ();
}

function mostrarListaAmigos () {
    let lista = document.getElementById ('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < nomesDosAmigos.length; i++) {
        lista.innerHTML += "<li>" + nomesDosAmigos[i] + "</li>";
    }
}

function sortearAmigo () {
    if (nomesDosAmigos.length == 0) {
        alert ("Nenhum nome adicionado!");
    } else {
        let numeroSorteado = parseInt(Math.random() * nomesDosAmigos.length);
        console.log (nomesDosAmigos [numeroSorteado]);
        let nomeSorteado = nomesDosAmigos[numeroSorteado];
        document.getElementById('resultado').innerHTML = "<li>" + "Nome Sorteado: " + nomeSorteado + "</li>";
        nomesDosAmigos.splice(nomesDosAmigos);

        mostrarListaAmigos ();
        
    }
}

