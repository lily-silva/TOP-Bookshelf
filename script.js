// open and close add new book form modal

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const addBook = document.getElementById("add-book-btn");
const subBook = document.getElementById("sub-btn");

const closeModal = () => {
	modal.style.display = "none";
};

const openModal = () => {
	modal.style.display = "block";
};

addBook.onclick = openModal;
closeBtn.onclick = closeModal;

// Toggle read/not read button

const readBtn = document.getElementById("read-btn");
const toggleRead = () => {
	const btnLabel = readBtn.textContent;
	if (btnLabel === "Read") {
		readBtn.style["background-color"] = "red";
		readBtn.textContent = "Not read";
	} else {
		readBtn.style["background-color"] = "#17c3b2";
		readBtn.textContent = "Read";
	}
};

readBtn.onclick = toggleRead;

// Form validation
const title = document.getElementById("title");

const subBtn = document.getElementById("sub-btn");

const check = () => {
	if (title.value.length < 1) {
		return "error error error";
	} else {
		return title.value;
	}
};

subBtn.addEventListener("click", function (e) {
	console.log(check());
});
