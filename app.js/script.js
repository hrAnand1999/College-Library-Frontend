// console.log('this is script.js');
//  constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constructor
function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (book) {
    let tableBody = document.getElementById('tableBody');
    let html = `<tr>
                       <td>${book.name}</td>
                       <td>${book.author}</td>
                       <td>${book.type}</td>
                 </tr>`;
    tableBody.innerHTML += html;

}

// Implementing the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Implementing the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 3 || book.author.length < 3) {
        return false;
    }
    else {
        return true;
    }
}

// Imlementing the show function
Display.prototype.show = function (type, msg) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                               <strong>Message :</strong> ${msg}
                               <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div>`
    setTimeout(function() {
        message.innerHTML = '';
    }, 2000);
}

// Add submit event Listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e) {

    let bookName = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    // fiction, programming, cooking
    let fiction = document.getElementById('fiction');
    let cooking = document.getElementById('cooking');
    let programming = document.getElementById('programming');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    else {
        type = programming.value;
    }
    let book = new Book(bookName, author, type);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added');
    }
    else {
        display.show('danger', `Sorry! You cann't add this book`);
    }

    e.preventDefault();
}












