const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

//simple func to check if window position matches the height
//of the header to add the active class
function fixNav() {
	if (window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add('active');
	} else {
		nav.classList.remove('active');
	}
}
