// buscando dentro da Div app a UL
var listElement = document.querySelector('#app ul');

var inputElement = document.querySelector('#app input');

var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('lista_todos')) || [];

// var todos = ['Orar','Ler a Biblia','Estudar JS', 'Treinar'];

function renderTodos(){
// vai percorrer todo o "todos da lista" e vai armazenar cada item na variavel "todo"
    listElement.innerHTML = ''; //vai limpar tudo quando adicionar o elemento.
    for(todo of todos){
        console.log(todo);

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');

        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deletarTodo('+ posicao +')');

        var linkText = document.createTextNode(' Excluir');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    }
}

renderTodos();

function adicionarTodo(){
if(inputElement.value == ''){
    alert("Digite sua tarefa!");
    return false;
}else{
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    salvarDados();
}

}

buttonElement.onclick = adicionarTodo;

function deletarTodo(posicao){
    todos.splice(posicao, 1);
    renderTodos();
    salvarDados();

}

function salvarDados(){
    localStorage.setItem('lista_todos', JSON.stringify(todos));
}