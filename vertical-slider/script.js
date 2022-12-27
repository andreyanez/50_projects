const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

// Here, as each right slide's height is 100vh
// we set the position of the left slide based on the length
// of right slides. Ex: if there are 4 slides, this
// code will put the left slide 300vh up the window position
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = direction => {
	// calculates the height in px of the slider container
	const sliderHeight = sliderContainer.clientHeight;

	//here we validate which direction is the slide moving,
	// updates the active index and if the end has been reached
	//  resets the active index
	if (direction === 'up') {
		activeSlideIndex++;
		if (activeSlideIndex > slidesLength - 1) {
			activeSlideIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesLength - 1;
		}
	}

	// here css is applied to move the slides according to the slide index
	slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
	slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
