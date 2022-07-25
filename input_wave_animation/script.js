const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    // gets the text from each label
    label.innerHTML = label.innerText
        // makes an array of all the letters
        .split('')
        // with each element of the Array, we map it and wrap it under a span element
        .map((letter,idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        // we join the elements of the array with join('')
        .join('')
})