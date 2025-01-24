// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validar a entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar o nome ao array
    amigos.push(nome);

    // Atualizar a exibição da lista
    atualizarListaAmigos();

    // Limpar o campo de entrada
    input.value = "";
}

// Função para exibir a lista de amigos
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpar a lista atual

    amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Atualizar o conteúdo do elemento de resultado
    const resultado = document.getElementById("resultadoSorteio");
    resultado.innerHTML = `O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong>`;
}

