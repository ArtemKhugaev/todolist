// если не работает - сделать document.getElementByid('add') и убрать onclick в html
let todolist=[]; // хранит список дел
if(localStorage.getItem('todo')!=undefined){
    todolist = JSON.parse(localStorage.getItem('todo'));
    out();
}

function add(){
    let input = document.getElementById('input').value;
    let temp = {};
    temp.todo = input;
    temp.check = false;
    let i = todolist.length;
    todolist[i] = temp;
    out();
    document.getElementById('input').value = ''
    localStorage.setItem('todo', JSON.stringify(todolist));
}

saveCheckboxes()

function saveCheckboxes() {
    let checkboxes = document.querySelectorAll('input[type = "checkbox" ]')
    for(let i = 0;i <checkboxes.length;i++){
        checkboxes[i].onchange = function(){
            todolist= JSON.parse(localStorage.getItem('todo'))
            todolist[i].check = this.checked
            localStorage.setItem('todo',JSON.stringify(todolist))
        }
    }
}

function out() {
    let out = ' ';
    for (let key in todolist){
        if (todolist[key].check === true){
            out += '<input type = "checkbox" checked>';
        }
        else {
            out += '<input type = "checkbox">';
        }
        out += todolist[key].todo + '<br>'
    }
    document.getElementById('out').innerHTML = out;

}

function clean(){
    localStorage.clear();
    out = 0;
    document.getElementById('out').innerHTML = out;
    todolist=0;
    return
}