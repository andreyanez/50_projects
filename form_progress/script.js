const inputs = document.querySelectorAll('.form-group');
const line = document.querySelector('.complete-line');
const percentage = document.querySelector('.check-mark');
const visaInput = document.getElementById('visaType');
const countryInput = document.getElementById('country');
const uniInput = document.getElementById('university');
const emailInput = document.getElementById('email');
const checkComplete = () => {
	let counter = 0;
	function fill() {
		counter += 25;
		percentage.innerHTML = `${counter}%`;
		line.style.width = `${counter}%`;
	}
	let selectedVisaValue = visaInput.options[visaInput.selectedIndex].value;
	if (selectedVisaValue) {
		fill();
	}
	let selectedCountryValue = countryInput.options[countryInput.selectedIndex].value;
	if (selectedCountryValue) {
		fill();
	}
	if (uniInput.value.length >= 2 && uniInput.value.length < 32) {
		fill();
	}
	//using regex to do generic validation (could be optimized...)
	if (
		emailInput.value.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
	) {
		fill();
	}
};

inputs.forEach(input => input.addEventListener('change', checkComplete));
