const textList = document.querySelectorAll('.autotype');

textList.forEach(element => {
	writeText(element);
});

function writeText(element) {
	let idx = 1;
	const speed = element.dataset.speed;
	const text = element.dataset.text;

	counter();

	function counter() {
		element.innerText = text.slice(0, idx);
		idx++;

		if (idx > text.length) {
			idx = 1;
		} else {
			setTimeout(counter, speed);
		}
	}
}
