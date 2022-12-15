const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
	if (activeSlide < slides.length - 1) {
		leftBtn.removeAttribute('disabled');

		activeSlide++;
		setBgToBody();
		setActiveSlide();
	} else {
		rightBtn.setAttribute('disabled', true);
	}
});

leftBtn.addEventListener('click', () => {
	if (activeSlide > 0) {
		rightBtn.removeAttribute('disabled');

		activeSlide--;
		setBgToBody();
		setActiveSlide();
	} else {
		leftBtn.setAttribute('disabled', true);
	}
});

setBgToBody();

function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
	slides.forEach(slide => slide.classList.remove('active'));

	slides[activeSlide].classList.add('active');
}
