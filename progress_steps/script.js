// instancing elements
const progressbar = document.getElementById('progress')
const prevBtn = document.getElementById('prevButton')
const nextBtn = document.getElementById('nextButton')
const circles = document.querySelectorAll('.circle')

// setting initial value of progress
let currentActive = 1

//increasing the value with the "next" button, and updating circles
nextBtn.addEventListener('click', ()=>{
    currentActive++
    // console.log(currentActive);
    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    updateProgressBar()

})

//decreasing the value with the "prev" button, and updating circles
prevBtn.addEventListener('click', ()=>{
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    updateProgressBar()

})

// updating the circle based on the current value
function updateProgressBar(){
    // looping thru circles and adding active class
    circles.forEach((circle,index) =>{
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    // finding all the active circles
    const actives = document.querySelectorAll('.active')

    // setting the width of the progress bar based on percentage
    progressbar.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    // setting the disable state of the button based on the current value
    if(currentActive === 1) {
        prevBtn.disabled = true
    } else if(currentActive === circles.length) {
        nextBtn.disabled = true
    } else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }

}

