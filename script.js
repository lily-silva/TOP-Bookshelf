"use strict";

// variables
// a variable to store an array of objects added by the user
let myLibrary = [];

// methods

// function that removes bookcard on x click
function removeBookCard() {
	const delBtns = document.querySelectorAll(".bi-x");
	delBtns.forEach((button) => {
		button.addEventListener("click", (event) => {
			const bookCard = event.target.closest(".card");
			bookCard.remove();
		});
	});
}

// an object to store the book information
function Book(title, author, pages, read, tbr) {
	(this.title = title),
		(this.author = author),
		(this.pages = pages),
		(this.read = read),
		(this.tbr = tbr);
}

// function that will add a new book to the page when the form is submited
function addBookToLibrary(event) {
	// this prevents the default behaviour of the button to send the form content to the server
	event.preventDefault();

	// create a object to store the books added by the user from the form
	const book = new Book(
		document.getElementById("title").value,
		document.getElementById("author").value,
		document.getElementById("pages").value,
		document.getElementById("read").checked,
		document.getElementById("tbr").checked
	);

	// empty variables to hold the book data to be reused in the HTML
	let bookTitle = "";
	let bookAuthor = "";
	let bookPages = "";
	let bookRead = "";
	let bookTBR = "";

	// this pushes the new book the used added to the "library" array
	myLibrary.push(book);

	// interated through the array and adds the books to the variables to be reused
	myLibrary.forEach((el) => {
		bookTitle = el.title;
		bookAuthor = el.author;
		bookPages = el.pages;
		bookRead = el.read;
		bookTBR = el.tbr;
	});

	// Variable that holds the html to add the HTML of the new book card to the page, with the values pulled from the book object
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
						<input class="form-check-input" type="checkbox" name="read" id="read" ${
							bookRead ? "checked" : ""
						} />
						<label class="form-check-label" for="read">read</label>
					</div>
					<div class="form-check">
						<input class="form-check-input" type="checkbox" name="read" id="tbr" ${
							bookTBR ? "checked" : ""
						} /> <label class="form-check-label" for="tbr">to read</label>
					</div>
				</div>
			</div>
			<div class="right-col">
			<i class="bi bi-x fs-4"></i>
		</div>
		</div>

	</div>`;

	// Adds the new book to the page
	document
		.getElementById("book-container")
		.insertAdjacentHTML("beforeend", newBookCard);
	removeBookCard();

	// reset form inputs after submit
	document.getElementById("add-book-form").reset();
}

// inits & event listeners

// gets the form and adds a submit event listener to call the function that will add the new book to the page
document
	.getElementById("add-book-form")
	.addEventListener("submit", addBookToLibrary);
