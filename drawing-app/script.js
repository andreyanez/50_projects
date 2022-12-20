const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

// instance of canvas
const ctx = canvas.getContext('2d');

//setting initial brush size
let size = 10;
//boolean to check if mouse is clicked
let isPressed = false;

colorEl.value = 'black';
let color = colorEl.value;
let x;
let y;

increaseBtn.addEventListener('click', () => {
	//increase brush size and sets size
	size++;
	//sets the size display number to new value
	sizeEL.innerText = size;
});

decreaseBtn.addEventListener('click', () => {
	size--;
	//sets the size display number to new value
	sizeEL.innerText = size;
});

canvas.addEventListener('mousedown', e => {
	isPressed = true;
	//sets both x and y to the mouse event position
	x = e.offsetX;
	y = e.offsetY;
});

//resets the values
document.addEventListener('mouseup', e => {
	isPressed = false;

	x = undefined;
	y = undefined;
});

canvas.addEventListener('mousemove', e => {
	//if mouse is pressed
	// it will set two new positions and
	// start drawing circles based on those positions
	// the drawLine function is needed because too
	// much movement creates gaps between circles
	if (isPressed) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;

		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);

		x = x2;
		y = y2;
	}
});

//drawCircle creates a circular shape and fills the set color
function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
}

//drawLine draws a line using from an to coordinates
function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size * 2;
	ctx.stroke();
}

// this sets the color based on the color input type
colorEl.addEventListener('change', e => (color = e.target.value));

// this clears the whole canvas
clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
