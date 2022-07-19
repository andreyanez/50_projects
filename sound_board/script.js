// searches for all the audio elements
let sounds = document.querySelectorAll('audio')

sounds.forEach(sound => {
    //for each audio element, create a button, add a class
    // add a event listener and append it to the container
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound.id

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound.id).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound.id)

        song.pause()
        song.currentTime = 0;
    })
}