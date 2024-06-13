
const todoList=[
    { name:'make dinner',
        dueDate:'22-01-20'
    
    },   { name:'make dishes',
        dueDate:'28-11-20'
    
    },];
renderTodoList();
function renderTodoList(){
/* genrating HTML text*/
let todoListHTML='';
for (let i=0;i<todoList.length;i++){
    const todoObject=todoList[i];//each todo is no longer string it will changed to object
   // const name=todoObject.name;//variable name is same as property name // DESTRUCTING
   // const dueDate=todoObject.dueDate;
    const{name,dueDate}=todoObject;
    const html=`
    
    <div> ${name}</div>
    <div> ${dueDate}</div>
    <button onclick="
    todoList.splice(${i},1);
    renderTodoList();
      " class="detete-todo-button">Delete</button>
    `;
    todoListHTML+=html;
}
document.querySelector('.js-todo-list').innerHTML=todoListHTML;}

function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value;

    const dateInputElement=document.querySelector('.js-due-date-input');
    const dueDate=dateInputElement.value;

    todoList.push({
//name:name,
//dueDate:dueDate
name,
dueDate

    });
    console.log(todoList);
    inputElement.value='';
    renderTodoList();



}