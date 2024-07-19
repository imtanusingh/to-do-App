let todoList = [
   // {item:'Hello' ,
   // dueDate : '4/10/2024'},
   // {item:'Hello-Ji' ,
   // dueDate : '5/10/2024'}
];
displayItems();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value ;
    let todoDate = dateElement.value;

    todoList.push({item:todoItem , dueDate:todoDate});

    inputElement.value = '';
    dateElement.value = '';

    displayItems();
    
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');

    let newHtml = '';

    for(let i  = 0 ; i< todoList.length ; i++){
            newHtml+=`
            <span>${todoList[i].item}</span>
            <span>${ todoList[i].dueDate}</span>
            <button onclick="todoList.splice(${i},1); displayItems();" class="btn-delete">Delete</button>`;
    }
    containerElement.innerHTML = newHtml;
}