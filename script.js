"use strict";

// variables
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const btn = document.getElementById("submit");

const bookdiv = document.getElementById("book");
const bookTitle = document.createElement("p");
const bookAuthor = document.createElement("p");
const bookPages = document.createElement("p");

let myLibrary = [];

// methods

function Book(title, author, pages) {
	(this.title = title), (this.author = author), (this.pages = pages);
}

function addBookToLibrary(event) {
	const book = new Book(title.value, author.value, pages.value);
	myLibrary.push(book);
	myLibrary.forEach((el) => {
		bookTitle.textContent = el.title;
		bookAuthor.textContent = el.author;
		bookPages.textContent = el.pages;
	});
	bookdiv.appendChild(bookTitle);
}

// inits & event listeners

btn.addEventListener("click", addBookToLibrary);
