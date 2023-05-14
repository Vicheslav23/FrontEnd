const library = [];
let inputDate = prompt('Enter book data separate by:";"'); // eto strochka
console.log(inputDate);

while (inputDate) {
  //   let count = 0;
  //   for (let index = 0; index < inputDate.length; index++) {
  //     if (inputDate[index] === ";") {
  //       count++;
  //     }
  //     if (count > 3) {
  //       console.log("Date is not valid");
  //       return;
  //     }
  //   }
  //   if (count !== 3) {
  //     return;
  //     }

  const [isbn, title, author, year] = inputDate.split(";");
  // if (arr.length !== 4) {
  //     return;
  // }

  // ili mogno tak

  if (
    inputDate.split(";").length === 4 &&
    isbn &&
    title &&
    author &&
    year &&
    findBook(library, isbn) === -1
  ) {
    const book = new Book(isbn, title, author, year);
    library.push(book);
  }
  inputDate = prompt('Enter book data separate by:";"');
}

printLibrary(library);
//1; 2- title 'kolobok'; 3- author 'national'; 4

function printLibrary(library) {
  for (let index = 0; index < library.length; index++) {
    console.log(library[index].toString());
  }
}

function findBook(library, isbn) {
  // ischem khigy v biblioteke

  //TODO return index of book, if book not exists -1
  for (let index = 0; index < library.length; index++) {
    if (library[index].isbn === isbn) {
      return index;
    }
    return -1;
  }
}

function Book(isbn, title, author, year) {
  // konstruktor
  this.isbn = isbn;
  this.title = title;
  this.author = author;
  this.year = +year;
  this.toString = function () {
    return `ISBN,${this.isbn},Title: ${this.title},Author:${this.author},Year of publishing:${this.year}`;
  };
}
