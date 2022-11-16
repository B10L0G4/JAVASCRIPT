// Define UI Vars 

const form =document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter= document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners

function loadEventListeners (){
    form.addEventListener('submit', addTask)
};
//Remove Tasks 
    taskList.addEventListener('click',removeTask);
// Add Task

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task')
    }
    // Create li element
    const li = document.createElement('li');
    //Add Class
    li.className = 'collection-item';
    //Create text mode and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create a new link element 
    const link = document.createElement('a');
    // Add Class 
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML ='<i class="fa fa-remove"></i>';
    // Append the link to li 
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);    
    // Clear input
    taskInput.value = '';
    e.preventDefault();
}

//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){

    }
}