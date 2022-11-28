//Book Constructor
function Book(title, author,isbn){
    this.author = author;
    this.title = title;
    this.isbn = isbn;
}
//UI Constructor 
function UI(){

}
// Add book to list 
UI.prototype.addBookToList = function(book){
    const list =document.getElementById('book-list');
    // Create tr element 
    const row =document.createElement('tr');
// Insert cols

row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href= "#" class="delete">X<a></td>
`;
    list.appendChild(row);
}
// Show Alert 
UI.prototype.showALert = function(message, className){
// Create Div 
    const div = document.createElement('div');
// Add Class
    div.className = `alert ${className}`;
// add text
    div.appendChild(document.createTextNode(message));
// Get parent 
    const container = document.querySelector('.container');
// Get Form 
    const form = document.querySelector('#book-form');
// Insert Alert 
    container.insertBefore(div,form);
// Time out after 3 seconds 
    setTimeout(function(){
    document.querySelector('.alert').remove();
    }, 3000);
};
// Delete Book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}
// Clear Fields 
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listener 
document.getElementById('book-form').addEventListener('submit',function(e){
// Get forms values 
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value 
// Instantiate Book
const book = new Book(title, author, isbn);
// Instantiate UI
const ui = new UI();

// Validate 
if(title === ''|| author === ''|| isbn === ''){
    //Error Alert
    ui.showALert('Please fill in all fields', 'error');
}else {
//Add book to list 
    ui.addBookToList(book);
// Show sucess
    ui.showALert('Book Added', 'success');
//Clear fields 
    ui.clearFields();
}

e.preventDefault();
});

// Event Listener for delete 

document.getElementById('book-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteBook(e.target);

    // Show MEssage 
    ui.showALert('Book Removed', 'success');
    e.preventDefault();
})