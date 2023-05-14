const inputNovaTarefa = document.getElementById('nova-tarefa');
const botaoAdicionarTarefa = document.getElementById('adicionar-tarefa');
const listaTarefasPendentes = document.getElementById('tarefas-pendentes');
const listaTarefasEmAndamento = document.getElementById('tarefas-em-andamento');
const listaTarefasConcluidas = document.getElementById('tarefas-concluidas');

botaoAdicionarTarefa.addEventListener('click', () => {
    const novaTarefa = inputNovaTarefa.value;
    if (novaTarefa !== '') {
        const novaTarefaLi = document.createElement('li');
        novaTarefaLi.textContent = novaTarefa;
        listaTarefasPendentes.appendChild(novaTarefaLi);

        novaTarefaLi.style.cursor = 'pointer';
        listaTarefasPendentes.style.backgroundColor = "green";
        listaTarefasPendentes.style.color = "white";
        listaTarefasPendentes.style.borderRadius = '6px';
        listaTarefasPendentes.style.borderRadius = '6px';
        novaTarefaLi.classList.add('mb-3');

        inputNovaTarefa.value = '';
    }
});

function moverTarefa(evento, origem, destino) {
    evento.preventDefault();
    if (evento.target.tagName === 'LI') {
        const tarefa = evento.target;
        origem.removeChild(tarefa);
        destino.appendChild(tarefa);
    }
}

listaTarefasPendentes.addEventListener('click', (evento) => {
    moverTarefa(evento, listaTarefasPendentes, listaTarefasEmAndamento);
    listaTarefasEmAndamento.style.backgroundColor = 'yellow';
    listaTarefasEmAndamento.style.borderRadius = '6px';
});

listaTarefasEmAndamento.addEventListener('click', (evento) => {
    moverTarefa(evento, listaTarefasEmAndamento, listaTarefasConcluidas);
    listaTarefasConcluidas.style.backgroundColor = 'red';
    listaTarefasConcluidas.style.color = 'white';
    listaTarefasConcluidas.style.borderRadius = '6px';
});

listaTarefasConcluidas.addEventListener('click', (evento) => {
    if(confirm("Deseja realmente excluir essa tarefa?") == true) {
        alert("Não pode excluir kkkkkkk");
    }
});
