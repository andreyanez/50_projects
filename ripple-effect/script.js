const button = document.querySelector('.ripple');

button.addEventListener('click', e => {
	/* Finding the click's coordinates within the 
    window. */
	const x = e.pageX;
	const y = e.pageY;

	//Finding the button element's position in
	//relation to the window
	const buttonTop = e.target.offsetTop;
	const buttonLeft = e.target.offsetLeft;

	// Calculating the click position within the button
	// so it can be set in px
	const xInside = x - buttonLeft;
	const yInside = y - buttonTop;

	const circle = document.createElement('span');
	circle.classList.add('circle');
	circle.style.top = yInside + 'px';
	circle.style.left = xInside + 'px';

	button.appendChild(circle);

	setTimeout(() => circle.remove(), 400);
});
