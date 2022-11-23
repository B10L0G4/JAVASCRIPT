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
// Clear Fields 
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';


}

// Event Listener 
document.getElementById('book-form').addEventListener('submit',function(e){
// Get forms values 
    const title = document.getElementById('title').value
          author = document.getElementById('author').value
          isbn = document.getElementById('isbn').value 
// Instantiate Book
    const book = new Book(title, author, isbn);
    
    // Interative UI
    const ui = new UI();
    console.log(ui)
    //Add book to list 
    ui.addBookToList(book)

//Clear fields 
ui.clearFields();
e.preventDefault();
});