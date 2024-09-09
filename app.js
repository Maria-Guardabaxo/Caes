//console.log(racasCachorros);
// Acessando informações de uma raça específica
//console.log(racasCachorros[0].raca); // Imprime: Labrador Retriever
//console.log(racasCachorros[2].principaisCaracteristicas); // Imprime as características do Pastor Alemão

// Iterando sobre todas as raças
//for (let i = 0; i < racasCachorros.length; i++) {
//    console.log(racasCachorros[i].raca + " é um cachorro " + racasCachorros[i].porte + ".");
//}

// Função para realizar a pesquisa nas raças de cachorros
function pesquisar() {
    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas para tornar a pesquisa case-insensitive
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Verifica se o usuário digitou algum termo de pesquisa
    if (campoPesquisa === "") {
      // Se o campo estiver vazio, exibe uma mensagem informando que não foram encontrados resultados
      section.innerHTML = "<p>Digite sua busca</p>";
      // Interrompe a execução da função, pois não há necessidade de continuar a pesquisa
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada raça de cachorro no array 'racasCachorros'
    for (let dado of racasCachorros) {
      // Desestrutura o objeto 'dado' para facilitar o acesso às propriedades
      const { raca, porte, descricao, origem, tags } = dado;
      // Converte o termo de pesquisa para minúsculas para comparar com as propriedades do objeto
      const pesquisaMinuscula = campoPesquisa.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente em alguma das propriedades da raça
      if (raca.toLowerCase().includes(pesquisaMinuscula) ||
          porte.toLowerCase().includes(pesquisaMinuscula) ||
          descricao.toLowerCase().includes(pesquisaMinuscula) ||
          origem.toLowerCase().includes(pesquisaMinuscula)|| tags.toLocaleLowerCase().includes(pesquisaMinuscula) ) {
        // Se a raça corresponder à pesquisa, cria um elemento HTML para exibir os detalhes da raça
        resultados += `
            <div class="item-resultado">
              <img src=${dado.foto} height="300" width="400">
                <div class="texto">
                    <h2><a href=${dado.link} target="_blank">${dado.raca}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="descricao-meta"><b>Principais Caracteristicas:</b> ${dado.principaisCaracteristicas}</p>
                <div class="container">
                    <div class="topic">
                        <img src="Fotos/Porte.png" alt="Icone Porte">
                        <p>Porte ${dado.porte}</p>
                    </div>
                    <div class="topic">
                        <img src="Fotos/cao.png" alt="Icone Temperamento">
                            <p>${dado.temperamento}</p>
                </div>
                <div class="topic">
                        <img src="Fotos/mapa.png" alt="Icone Origem">
                            <p>${dado.origem}</p>
            </div>
        </div>
        </div>
        </div>
        `;
        }
if (!resultados){
    resultados = "<p>Nada foi encontrado. Tente outras palavras</p>"
}
       // Atribui o HTML gerado para a seção de resultados, atualizando a página com os resultados da pesquisa
  section.innerHTML = resultados;
    }
}