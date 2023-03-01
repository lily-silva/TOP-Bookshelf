"use strict";

// variables
const form = document.getElementById("add-book")
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const btn = document.getElementById("submit");
const read = document.getElementById("read");
const tbr = document.getElementById("tbr");

const bookCont = document.getElementById("book-container");
const bookCard = document.querySelector(".card");



let myLibrary = [];


// methods

function Book(title, author, pages, read, tbr) {
	(this.title = title), (this.author = author), (this.pages = pages), (this.read = read), (this.tbr = tbr)
}

function addBookToLibrary(event) {

	event.preventDefault();

	let bookTitle = "";
	let bookAuthor = "";
	let bookPages = "";
	let bookRead = "";
	let bookTBR = "";

	const book = new Book(title.value, author.value, pages.value, read.checked, tbr.checked);

	myLibrary.push(book);

	myLibrary.forEach((el) => {
		bookTitle = el.title;
		bookAuthor = el.author;
		bookPages = el.pages;
		bookRead = el.read;
		bookTBR = el.tbr;
	});

	const newBookCard = `
	<div class="card">
		<div class="card-body d-flex">
			<div class="left-col flex-fill">
				<p class="mb-0 text-secondary fst-italic fw-light book-md">title</p>
				<p>${bookTitle}</p>
				<p class="mb-0 text-secondary fst-italic fw-light book-md">author</p>
				<p>${bookAuthor}</p>
				<p>${bookPages} <span class="text-secondary fst-italic fw-light book-md">pages</span></p>
				<div class="d-flex col-12 gap-3">
					<div class="form-check">
						<input class="form-check-input" type="checkbox" name="read" id="read" ${bookRead ? "checked" : ""} />
						<label class="form-check-label" for="read">read</label>
					</div>
					<div class="form-check">
						<input class="form-check-input" type="checkbox" name="read" id="tbr" ${bookTBR ? "checked" : ""} /> <label class="form-check-label" for="tbr">to read</label>
					</div>
				</div>
			</div>
			<div class="right-col">
			<i class="bi bi-x fs-4"></i>
		</div>
		</div>

	</div>	
	`
	bookCont.insertAdjacentHTML('beforeend', newBookCard);


}

// inits & event listeners
const removeBtn = document.querySelectorAll(".bah");
form.addEventListener("submit", addBookToLibrary)

const bah = document.getElementById("bah").addEventListener("click", () => {
	console.log(removeBtn)
})

function setup() {
	var els = document.getElementById("bah");
	for (var i = 0; i < els.length; i++) {
		els[i].addEventListener('click', function (e) {

			bookCard.remove();
			//e.target.closest('.image').remove();
			
			//this will not work on 2 last images cause parent div will be deleted 
			//leaving an empty <div class="image"></div> for each removed item
			
			//e.target.closest('div').remove();
		});
	}
}
setup();
