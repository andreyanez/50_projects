// selectiong boxes
const boxes = document.querySelectorAll('.box_item')

// triggering animation on window scroll
window.addEventListener('scroll', checkBoxes)

// trigger animation on load
checkBoxes()

function checkBoxes() {
    //We are taking a little less than the window height.
    // window.InnerHeight*4/5
    // Here 4/5 is equivalent to 80% of the window height.
    // So if our box top is inside the 80% of window height the show class will be added.
    const triggerBottom = window.innerHeight / 5 * 4

    //loop thru boxes to get the top position relative to viewport
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        // if the position of the box is less than the height of the viewport
        // it will add the class
        if(boxTop < triggerBottom) box.classList.add('show')
    })
}

// Conclusion
/* this whole exercise could be done with an Observer,
    however I believed it was useful to learn about the getBoundingClientRect(),
    as well as calculating window height with an equation
*/