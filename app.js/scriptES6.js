// This is same as script.js but instead of prototypes here we used ES6 classes

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display {
    add() {
        let tableBody = document.getElementById('tableBody');
        let notes = localStorage.getItem('notes');
        let notesObj;
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        let html = '';
        /*notesObj.forEach(function (element, idx) {
            html += `<tr>
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.type}</td>
            <td><button type="submit" class="btn btn-primary">Delete</button></td>
      </tr>`;
        });*/
        let element = notesObj[notesObj.length - 1];
        html += `<tr>
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.type}</td>
            <td><button type="submit" class="btn btn-primary">Delete</button></td>
      </tr>`;

        tableBody.innerHTML += html;

    }
    showPrevious(){
        let tableBody = document.getElementById('tableBody');
        let notes = localStorage.getItem('notes');
        let notesObj;
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        let html = '';
        notesObj.forEach(function (element, idx) {
            html += `<tr>
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.type}</td>
            <td><button type="submit" class="btn btn-primary">Delete</button></td>
      </tr>`;
        });
        tableBody.innerHTML += html;
    }
    updateBook(book) {
        let notes = localStorage.getItem('notes');
        let notesObj;
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(book);
        console.log(notesObj);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        // preventDefault();
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 3 || book.author.length < 3) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, msg) {
        let message = document.getElementById('message');
        let boldText;
        if (type == 'success') {
            boldText = 'Success';
        }
        else {
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                   <strong>${boldText} :</strong> ${msg}
                                   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                              </div>`
        setTimeout(function () {
            message.innerHTML = '';
        }, 2000);
    }
}

// Showing before adding all the books which are already added
let display = new Display();
display.showPrevious();
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
        display.updateBook(book);
        display.add();
        display.clear();
        display.show('success', 'Your book has been successfully added');
    }
    else {
        display.show('danger', `Sorry! You cann't add this book`);
    }

    e.preventDefault();
}