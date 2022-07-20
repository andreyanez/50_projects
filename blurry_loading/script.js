const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// setting initial load value
let load = 0

// calling function with a 30ms interval
let int = setInterval(blurring, 30)

function blurring(){
    // increasing load value
    load++

    // if value reaches 100, it will reset, ending the counter
    // clearInterval is a js function
    if (load > 99) {clearInterval(int)}

    // setting the text of the loading text to the load value
    loadText.innerText = `${load}%`
    //setting the opacity of the loading text via mapping of values (0 to 100 mapped to 1 to 0)
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    //setting the blue of the bg text via mapping of values (0 to 100 mapped to 30px to 0px)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

//Stack Overflow function that maps a range of numbers to another range of numbers

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}