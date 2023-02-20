import "./style.css";

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not yet read");
const theMartian = new Book("The Martian", "Andy Weir", 369, "not yet read");

console.log(theHobbit.info());
console.log(theMartian.info());
