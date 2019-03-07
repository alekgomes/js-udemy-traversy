class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{
  
  static addBook(book){
    // Criar tr
    const tableBody = document.getElementById('book-list');
    const tr = document.createElement('tr');

    // Adicionar os td na tr
    tr.innerHTML=`
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href='#' class='delete'>X</a></td>
    `;

    // Append da tr no tableBody
    tableBody.appendChild(tr);
  }

  static removeBook(target){    
    target.parentElement.parentElement.remove();
    UI.showAlert('Livro removido com sucesso', 'sucess');
  }

  static clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  static showAlert(mensagem, className){
    // Criando div
    const divMsg = document.createElement('div');
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    // Inserindo mensagem
    divMsg.textContent = mensagem;

    // adicionando classe error
    divMsg.classList.add(className);

    // append da div no lugar desejado
    container.insertBefore(divMsg, form);

    // Removendo mensagem depois de 3s
    setTimeout(function(){
      divMsg.style.display = 'none';
    }, 3000);
  }
}

class LocalStorage{
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    }else{
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book){
    let books = this.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBooks(){
    for(let book of this.getBooks()){
      UI.addBook(book);
    }
  }

  static removeBook(target){
    let books = this.getBooks();
    let isbnNum = target.parentElement.previousElementSibling.textContent;

    books.forEach(function(book, index){
      if (book.isbn === isbnNum){
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Adicionando eventListeners

document.addEventListener('DOMContentLoaded', LocalStorage.displayBooks());

const form = document.getElementById('book-form');
form.addEventListener('submit', function(e){
  e.preventDefault();
  
  // Capturando valores do formulário
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instanciando um novo livro
  const book = new Book(title, author, isbn);

  // Validação do form
  if(title === '' || author ==='' || isbn === ''){
    UI.showAlert('Preencha todos os campos', 'error');

  }else{
    // adicionando livro na tabela da UI
    UI.addBook(book);
    UI.clearFields();
    LocalStorage.addBook(book);

    LocalStorage.getBook();
    // Exibindo mensagem de sucesso
    UI.showAlert('Livro adicinado', 'sucess')
  }  
})

// Add eventListener para remoção de livro

document.getElementById('book-list').addEventListener('click', function(e){
  e.preventDefault();
  if(e.target.classList.contains('delete')){
    UI.removeBook(e.target);
    LocalStorage.removeBook(e.target);
  }  
});