var medicamentos = [];

function adicionarMedicamento(){
    event.preventDefault();
    let medicamento = {
        "nomeMed": document.getElementById("nomeMedicamento").value,
        "qtdMed": document.getElementById("quantidadeMedicamento").value,
        "classeMed": document.getElementById("classeMedicamento").value,
    }

    medicamentos.push(medicamento);
    mostrarTabela();
    resetarForm();
}

function resetarForm(){
    document.getElementById("nomeMedicamento") = "";
    document.getElementById("quantidadeMedicamento") = "";
    document.getElementById("classeMedicamento") = "";
}

function mostrarTabela(){
    let tabela = document.getElementById("tabelaMedicamentos");
    tabela.innerHTML =
    `
    <tr>
    <th>ID</th>
    <th>Medicamento</th>
    <th>Quantidade</th>
    <th>Classe</th>
    <th>Remover</th>
    </tr>
    `

    for(let i = 0; i < medicamentos.length; i++){
        tabela.innerHTML = tabela.innerHTML + 
        `
        <td>${i}</td>
        <td>${medicamentos[i].nomeMed}</td>
        <td>${medicamentos[i].qtdMed}</td>
        <td>${medicamentos[i].classeMed}</td>
        <td><img src="img/del.png" width="24" heigth="24" onclick="removerMedicamento(${i})"></td>
        `
    }
}

function removerMedicamento(index){
    medicamentos.splice(index,1);
    mostrarTabela();
}