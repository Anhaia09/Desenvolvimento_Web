
document.getElementById("Adicionar").addEventListener("click", function() {
    
    //recebe os valores de entrada "nome, e-mail, telefone"
    var nome = document.getElementById("nomeInput").value;
    var email = document.getElementById("emailInput").value;
    var telefone = document.getElementById("telefoneInput").value;
    var tabela = document.getElementById("dataTable");
  
    // Insere uma nova linha na tabela
    var newRow = tabela.insertRow();
  
    // Insere células na nova linha para cada dado e botões
    var nomeCell = newRow.insertCell(0);
    var emailCell = newRow.insertCell(1);
    var telefoneCell = newRow.insertCell(2);
    var editarCell = newRow.insertCell(3);//botão editar
    var excluirCell = newRow.insertCell(4);//botão excluir
  
    // Insere os valores capturados nas células da nova linha
    nomeCell.textContent = nome;
    emailCell.textContent = email;
    telefoneCell.textContent = telefone;
  
    // Cria o botão "Editar"
    var editarButton = document.createElement("button");
    editarButton.textContent = "Editar";
  
    // Adiciona um event listener para o botão "Editar"
    editarButton.addEventListener("click", function() {

        //editar a linha com a função prompt
        var novosDados = prompt("Digite os novos dados separados por vírgula (Nome, E-mail, Telefone):"); // Solicita ao usuário os novos dados
        var novosDadosArray = novosDados.split(",");
  
        // Atualiza os valores das células da linha com os novos dados
        nomeCell.textContent = novosDadosArray[0];
        emailCell.textContent = novosDadosArray[1];
        telefoneCell.textContent = novosDadosArray[2];
  
        console.log("Linha editada com sucesso!"); // Registra uma mensagem na área de console
    });
  
    // Adiciona o botão "Editar" à célula correspondente
    editarCell.appendChild(editarButton);
  
    // Cria um botão "Excluir"
    var excluirButton = document.createElement("button");
    excluirButton.textContent = "Excluir";
  
    // Adiciona um event listener para o botão "Excluir"
    excluirButton.addEventListener("click", function() {
        // Lógica para excluir a linha (neste caso, exclui a linha atual)
        tabela.deleteRow(newRow.rowIndex);
    });
  
    // Adiciona o botão "Excluir" à célula correspondente
    excluirCell.appendChild(excluirButton);
  });