// console.log('this is script.js');
//  constructor
function Book(name, author, type)
{
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constructor
function Display(){

}

// Add methods to display prototype
Display.prototype.add = function(book){
     let tableBody = document.getElementById('tableBody');
     let html = `<tr>
                       <td>${book.name}</td>
                       <td>${book.author}</td>
                       <td>${book.type}</td>
                 </tr>`;
    tableBody.innerHTML += html;

}
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}


// Add submit event Listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit)

function libraryFormSubmit(e){

    let bookName = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    // fiction, programming, cooking
    let fiction = document.getElementById('fiction');
    let cooking = document.getElementById('cooking');
    let programming = document.getElementById('programming');
    if(fiction.checked)
    {
        type = fiction.value;
    }
    else if(cooking.checked)
    {
        type = cooking.value;
    }
    else{
        type = programming.value;
    }
    let book =new Book(bookName, author, type);
    
    let display = new Display();
    display.add(book);
    display.clear();
    e.preventDefault();
}
    
    









