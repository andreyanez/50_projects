const smallCupsList = document.querySelectorAll('.cup--small');
const liters = document.getElementById('liters');
const percentageDrank = document.getElementById('percentage');
const literGoal = document.getElementById('literGoal').dataset.liters;
const cupsLength = smallCupsList.length;
const bigCupHeight = document.getElementById('bigCup').offsetHeight;

//find each small cup and add the highlight event, sending the index
smallCupsList.forEach((cup, idx) => {
	cup.addEventListener('click', () => {
		highlightCups(idx);
	});
});

const highlightCups = idx => {
	//instance of cup selected usindg idx parameters
	let cupIndex = smallCupsList[idx];

	//check if the selected cup is the last cup when clicked twice
	if (idx === cupsLength - 1 && cupIndex.classList.contains('full')) idx--;
	else if (
		//check if the selected cup has been clicked and removes class
		cupIndex.classList.contains('full') &&
		!cupIndex.nextElementSibling.classList.contains('full')
	) {
		idx--;
	}

	smallCupsList.forEach((cup, idx2) => {
		idx2 <= idx ? cup.classList.add('full') : cup.classList.remove('full');
	});

	updateBigCup();
};

const updateBigCup = () => {
	const fullCups = document.querySelectorAll('.cup--small.full').length;

	if (fullCups === 0) {
		percentageDrank.style.visibility = 'hidden';
		percentageDrank.style.height = 0;
	} else {
		percentageDrank.style.visibility = 'visible';
		percentageDrank.style.height = `${
			(fullCups / cupsLength) * bigCupHeight
		}px`;
		percentageDrank.innerText = `${(fullCups / cupsLength) * 100}%`;
	}

	if (fullCups === cupsLength) {
		remained.style.visibility = 'hidden';
		remained.style.height = 0;
	} else {
		remained.style.visibility = 'visible';
		liters.innerText = `${literGoal - (250 * fullCups) / 1000}L`;
	}
};

updateBigCup();
