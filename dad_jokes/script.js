const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')


const config = {
    headers: {
        Accept: 'application/json',
    },
}

async function generateJoke(){
    // using then()
    // fetch('https://icanhazdadjoke.com', config)
    // .then(res => res.json())
    // .then(data => {
    //     jokeEl.innerHTML = data.joke
    // })

    // using async/await
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke

}

jokeBtn.addEventListener('click', generateJoke)

generateJoke()
