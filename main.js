/*jshint loopfunc:true */
import "./style.css";

const mainHtml = document.querySelector("main");
const newBookForm = document.getElementById("input-form");
const modalToggle = document.getElementById("my-modal-6");
const modal = document.getElementById("modal");
const html = document.querySelector("html");
const toggleSiteTheme = document.getElementById("toggle-theme");

// Toggle site theme light/dark

toggleSiteTheme.addEventListener("click", () => {
  if (html.dataset.theme === "emerald") {
    html.dataset.theme = "dark";
  } else {
    html.dataset.theme = "emerald";
  }
});

// Function constructor, Book object

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Declare the array and populate it with one test book object

let myLibrary = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, read: false },
];

// Loop the library array, generate the book card and display the book cards

function loopAndDisplayBooks() {
  resetGridBooks();
  clearInputForm();
  for (let i = 0; i < myLibrary.length; i++) {
    const cardBook = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const textTitle = document.createTextNode(myLibrary[i].title);
    const bookInfo = document.createElement("p");
    const textInfo = document.createTextNode(
      `by ${myLibrary[i].author}, ${myLibrary[i].pages} pages`
    );
    const readContainer = document.createElement("div");
    const spanContainer = document.createElement("span");
    const textReadSpan = document.createTextNode("Did you read the book?");
    const toggleRead = document.createElement("input");
    const cardActions = document.createElement("div");
    const deleteButton = document.createElement("button");
    const textDeleteButton = document.createTextNode("Delete Book");

    cardBook.setAttribute("class", "card h-64 bg-base-100 shadow-xl m-3");
    cardBook.dataset.id = myLibrary.indexOf(myLibrary[i]);
    cardBody.setAttribute("class", "card-body justify-between");
    cardTitle.setAttribute("class", "card-title");
    readContainer.setAttribute("class", "flex");
    spanContainer.setAttribute("class", "label-text");
    toggleRead.setAttribute("type", "checkbox");
    toggleRead.setAttribute("class", "toggle toggle-success ml-3");
    cardActions.setAttribute("class", "card-actions justify-start mt-3");
    deleteButton.setAttribute("class", "btn btn-outline btn-accent w-full");

    toggleRead.addEventListener("click", () => {
      toggleReadInput(i);
    });

    deleteButton.addEventListener("click", () => {
      deleteBookFromArray(i);
    });

    if (myLibrary[i].read === true) {
      toggleRead.checked = true;
    } else {
      myLibrary[i].read = false;
      toggleRead.checked = false;
    }

    mainHtml.appendChild(cardBook);
    cardBook.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardTitle.appendChild(textTitle);
    cardBody.appendChild(bookInfo);
    bookInfo.appendChild(textInfo);
    cardBody.appendChild(readContainer);
    readContainer.appendChild(spanContainer);
    spanContainer.appendChild(textReadSpan);
    readContainer.appendChild(toggleRead);
    cardBody.appendChild(cardActions);
    cardActions.appendChild(deleteButton);
    deleteButton.appendChild(textDeleteButton);
  }
}

loopAndDisplayBooks();

// Reset/ delelte all book cards

function resetGridBooks() {
  mainHtml.innerHTML = "";
}

// Display toggle state if the book was read or not and refresh the site

function toggleReadInput(i) {
  if (myLibrary[i].read === true) {
    myLibrary[i].read = false;
  } else {
    myLibrary[i].read = true;
  }

  loopAndDisplayBooks();
  console.log(myLibrary);
}

// Delete book object from library array and refresh the site
function deleteBookFromArray(i) {
  myLibrary.splice(i, 1);
  loopAndDisplayBooks();
  console.log(myLibrary);
}

// Close modal when user clicks outside the modal

document.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal after user clicks the SUBMIT button of the form

function closeModal() {
  if (modalToggle.checked === true) {
    modalToggle.checked = false;
  } else {
    modalToggle.checked = true;
  }
}

// Capture and store user input from the form and return a new book

function addNewBookfromInputs() {
  const inputTitle = document.getElementById("input-title").value;
  const inputAuthor = document.getElementById("input-author").value;
  const inputPages = document.getElementById("input-pages").value;
  const inputReadCheck = document.getElementById("input-read").checked;

  return new Book(inputTitle, inputAuthor, inputPages, inputReadCheck);
}

// Add new book object to the library array

function addNewBookToArray() {
  myLibrary.push(addNewBookfromInputs());
}

// Clear input form after SUBMIT button was clicked
function clearInputForm() {
  document.getElementById("input-title").value = "";
  document.getElementById("input-author").value = "";
  document.getElementById("input-pages").value = "";
  document.getElementById("input-read").checked = false;
}

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewBookToArray();
  clearInputForm();
  loopAndDisplayBooks();
  closeModal();
});
