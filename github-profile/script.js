const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const colorThief = new ColorThief();

const rgbToHex = (r, g, b) =>
	'#' +
	[r, g, b]
		.map(x => {
			const hex = x.toString(16);
			return hex.length === 1 ? '0' + hex : hex;
		})
		.join('');

async function getUser(username) {
	try {
		const { data } = await axios(`${APIURL}${username}`);

		createUserCard(data);
	} catch (err) {
		if (err.response.status == 404) {
			createErrorCard('No profile with this username');
		}
	}
}

async function getRepos(username) {
	try {
		const { data } = await axios(APIURL + username + '/repos?sort=created');

		return data;
	} catch (err) {
		createErrorCard('Problem fetching repos');
	}
}

form.addEventListener('submit', e => {
	e.preventDefault();

	const user = search.value;

	user && getUser(user);

	search.value = '';
});

async function createUserCard(user) {
	const userID = user.name || user.login;
	const userBio = user.bio ? `<p>${user.bio}</p>` : '';

	const repos = await getRepos(user.login);
	const repoList = await addReposToCard(repos);

	const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>
      ${repoList}
    </div>
  </div>
    `;

	const img = new Image();
	img.addEventListener('load', function () {
		const pallete = colorThief.getColor(img);
		const imgEl = document.querySelector('.card');
		imgEl.style.backgroundColor = rgbToHex(pallete[0], pallete[1], pallete[2]);
	});
	img.crossOrigin = 'Anonymous';
	img.src = user.avatar_url;

	main.innerHTML = cardHTML;
}

async function addReposToCard(repos) {
	const reposEl = document.createElement('ul');
	repos.slice(0, 5).forEach(repo => {
		const repoEl = document.createElement('a');
		repoEl.classList.add('repo');
		repoEl.href = repo.html_url;
		repoEl.target = '_blank';
		repoEl.innerText = repo.name;

		reposEl.appendChild(repoEl);
	});

	return reposEl;
}

function createErrorCard(msg) {
	const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

	main.innerHTML = cardHTML;
}
