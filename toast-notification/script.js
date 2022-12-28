const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four'];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
	// creating the toast message
	const notif = document.createElement('div');
	notif.classList.add('toast');

	// optional randomness setting
	notif.classList.add(type ? type : getRandomValue(types));

	notif.innerText = message ? message : getRandomValue(messages);

	toasts.appendChild(notif);

	setTimeout(() => {
		notif.remove();
	}, 3000);
}

// get random value function
function getRandomValue(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
