const API_URL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies(url) {
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	showMovies(data.results);
}

const showMovies = movieList => {
	main.innerHTML = '';

	movieList.map(movie => {
		// destructuring the movie bject, renaming img path
		const {
			id: movieId,
			title,
			poster_path: poster_url,
			vote_average,
			overview,
		} = movie;

		const movieEl = document.createElement('a');
		movieEl.classList.add('movie');
		movieEl.setAttribute('href', `movie.html?id=${movieId}`);

		movieEl.innerHTML = `
            <img src = "${IMG_PATH + poster_url}" alt="${title}">
            <div class="movie__info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
									vote_average
								)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Synopsis</h3>
                <p>${overview}</p>
            </div>
        `;

		main.appendChild(movieEl);
	});
};

const getClassByRate = vote => {
	return vote >= 8 ? 'green' : vote >= 5 ? 'orange' : 'red';
};

form.addEventListener('submit', e => {
	e.preventDefault();
	const searchTerm = search.value;

	if (!!searchTerm && searchTerm != '') {
		getMovies(SEARCH_API + searchTerm);
		search.value = '';
	} else {
		window.location.reload();
	}
});
