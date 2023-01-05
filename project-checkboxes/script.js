const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');
const container = document.querySelector('#toggleContainers');

toggles.forEach(toggle => toggle.addEventListener('change', e => doTheTrick(e.target)));

function doTheTrick(theClickedOne) {
	if (good.checked && cheap.checked && fast.checked) {
		const msg = document.createElement('p');
		msg.style.textAlign = 'center';
		msg.innerText = 'yeah right.';
		container.appendChild(msg);
		setTimeout(() => {
			msg.remove();
		}, 500);
		if (good === theClickedOne) {
			fast.checked = false;
		}

		if (cheap === theClickedOne) {
			good.checked = false;
		}

		if (fast === theClickedOne) {
			cheap.checked = false;
		}
	}
}
