const toggleList = document.querySelectorAll(".faq-toggle");

toggleList.forEach(toggle => {
	toggle.addEventListener("click", () => {
		toggle.parentNode.classList.toggle("active");
	});
});
