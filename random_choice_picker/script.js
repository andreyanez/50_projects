const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

// sets the focus on the textarea, ready to start typing
textarea.focus();

textarea.addEventListener("keyup", event => {
	// with each type, it will fire createTags()
	createTags(event.target.value);
	//When the key entered is enter, it will clear
	//the textarea box and fire randomSelect()
	if (event.key === "Enter") {
		setTimeout(() => {
			event.target.value = "";
		}, 10);
		randomSelect();
	}
});

const createTags = input => {
	/*
        with each input, it will look out
        for when you type , and will add
        another element to the array
        it will also trim if you type whitespace to the word
        and if the element added is just empty space
    */
	const tags = input
		.split(",")
		//this filter is to filter empty string
		.filter(tag => tag.trim() !== "")
		//this is to trim whitespace
		.map(tag => tag.trim());

	// sets the html of the tags container
	tagsEl.innerHTML = "";

	//for each tag created, it will create html element
	//and add it to the container
	tags.forEach(tag => {
		const tagEl = document.createElement("span");
		tagEl.classList.add("tag");
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	});
};

const randomSelect = () => {
	// number of times it will be firing
	const times = 5;

	const interval = setInterval(() => {
		// will select a randomTag
		const randomTag = pickRandomTag();

		// if the tag isnt undefined, it will highlight
		// once highlighted, it will unhighlight it after 10ms
		if (randomTag !== undefined) {
			highlightTag(randomTag);

			setTimeout(() => {
				unHighlightTag(randomTag);
			}, 100);
		}
	}, 100);

	// after n times, it will clear(stop) the interval
	// and after 100ms it will select a randomTag and highllight it
	setTimeout(() => {
		clearInterval(interval);
		setTimeout(() => {
			const randomTag = pickRandomTag();
			highlightTag(randomTag);
		}, 100);
	}, times * 100);
};

const pickRandomTag = () => {
	const tags = document.querySelectorAll(".tag");
	//it will loop thru all of the tags and
	// return the element randomly
	return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = tag => tag.classList.add("highlight");
const unHighlightTag = tag => tag.classList.remove("highlight");
