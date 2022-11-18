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
    // Dom load Event
    document.addEventListener('DOMContentLoaded', getTasks) 
    //Add task events
    form.addEventListener('submit', addTask)
    //Remove Tasks events
    taskList.addEventListener('click',removeTask);
    // Clear task events 
    clearBtn.addEventListener('click', clearTasks);
    // Filter Tasks Events 
    filter.addEventListener('keyup',filterTasks);
};
// Get Tasks from Ls
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')=== null ){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        //Create li element
        const li = document.createElement('li');
        //Add Class
        li.className = 'collection-item';
        //Create text mode and append to li
        li.appendChild(document.createTextNode(task));
        // Create a new link element 
        const link = document.createElement('a');
        // Add Class 
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML ='<i class="fa fa-remove"></i>';
        // Append the link to li 
        li.appendChild(link);
        // Append li to Ul
        taskList.appendChild(li);
    });
}


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
    // Store in LS
    storeTaskInLocalStorage(taskInput.value);
    // Clear input
    taskInput.value = '';
    e.preventDefault();
}
// Store task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    }else{
        tasks =JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you Sure?')){
            e.target.parentElement.parentElement.remove();

            // Remove from Ls 
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}
//Remove From LS
function removeTaskFromLocalStorage(taskitem){
        let tasks;
        if(localStorage.getItem('tasks')=== null){
            tasks = [];
        }else{
            tasks =JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.forEach(function(task,index){
            if(taskitem.textContent === task){
                tasks.splice(index, 1);
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
// Clear tasks
function clearTasks(){
    //taskLists.innerHTML = '';
    // Faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    // Clear from LS
    clearTasksFromLocalStorage();
};
// Clear Tasks From LS
function clearTasksFromLocalStorage(){
    localStorage.clear();
}
// Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    console.log(text)
    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            }else {
                task.style.display = 'none';
            }
        });
}