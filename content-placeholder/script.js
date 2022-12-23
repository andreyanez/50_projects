const placeholder = document.getElementById('placeholder');

setTimeout(getData, 2500);

function getData() {
	//removing the active class would be the equivalent
	// of a Suspense component being swapped when
	// the async data finished being fetched
	placeholder.classList.remove('active');
}
