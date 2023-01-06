const addBtn = document.getElementById('add');

// Fetching the notes from localstorage
const notes = JSON.parse(localStorage.getItem('notes'));

// If notes are found, add them with the addNewNote
if (notes) {
	notes.forEach(noteText => addNewNote(noteText));
}

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
	// Creating the note and adding the class
	const note = document.createElement('div');
	note.classList.add('note');
	//If the note being added already has text
	// it will show the "uneditable" text first
	note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
    `;

	const editBtn = note.querySelector('.edit');
	const deleteBtn = note.querySelector('.delete');
	const main = note.querySelector('.main');
	const textArea = note.querySelector('textarea');

	// here we assign the text to the textarea
	// and to the markdown supported div
	textArea.value = text;
	main.innerHTML = marked(text);

	deleteBtn.addEventListener('click', () => {
		note.remove();
		// We update the notes list to localstorage
		updateLS();
	});

	// here we just toggle the editable version
	editBtn.addEventListener('click', () => {
		main.classList.toggle('hidden');
		textArea.classList.toggle('hidden');
	});

	//Here any change done on the editable input
	// will update on the markdown div
	textArea.addEventListener('input', e => {
		main.innerHTML = marked(e.target.value);
		// We update the notes list to localstorage
		updateLS();
	});

	//appending the new note to the body
	document.body.appendChild(note);
}

function updateLS() {
	const notesText = document.querySelectorAll('textarea');

	const notes = [];

	notesText.forEach(note => notes.push(note.value));

	localStorage.setItem('notes', JSON.stringify(notes));
}
