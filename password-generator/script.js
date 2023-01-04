const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

// Copying the passwotd given into the clipboard
clipboardEl.addEventListener('click', () => {
	const password = resultEl.innerText;
	if (!password) {
		return;
	}
	navigator.clipboard.writeText(password);
	alert('Password copied to clipboard!');
});

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

generateEl.addEventListener('click', () => {
	// + sign transforms value to number
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	//sending the booleans to a function that generates the password
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	// Counting the boolean with a true value
	const typesCount = lower + upper + number + symbol;
	// typesArr is set to all the boolean values that are true
	// Filter array method is used to filter based on the truthiness of the boolean
	// Only the booleans that are true will be based to typesArr
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
		item => Object.values(item)[0]
	);

	//In case all are false (all checkboxes unchecked)
	if (typesCount > 0) {
		// Loop to select a function at random and append it to the
		// generated password. The loop will run until the length value
		// that the the user set has met.
		for (let i = 0; i < length; i++) {
			// In funcname, we find the name of the boolean passed using Object keys
			// Math.random is used to select a random boolean from the typesArr
			const funcName = Object.keys(typesArr[Math.floor(Math.random() * typesCount)])[0];
			// Here the function gets called using the index object and appended to the empty string
			generatedPassword += randomFunc[funcName]();
		}
		return generatedPassword;
	} else {
		alert('No checkbox has been checked');
		return '';
	}
}

// Returns random lowercase letter
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Returns random uppercase letter
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Returns random number
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// function that returns a random symbol
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.';
	return symbols[Math.floor(Math.random() * symbols.length)];
}
