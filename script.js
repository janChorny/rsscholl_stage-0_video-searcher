'use strict'

const apiKey = 'beecd01a5fa12257bbc018dc301ade45';
let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=beecd01a5fa12257bbc018dc301ade45';
const main = document.querySelector('.main');
const search = document.querySelector('.header__search');
const popularMovieButton = document.querySelector('.header__item--popular');
const topRatedMovieButton = document.querySelector('.header__item--rated');
const latestMovieButton = document.querySelector('.header__item--latest');
const upcomingMovieButton = document.querySelector('.header__item--upcoming');

function showDataMovie(data) {
	const arrayMovie = data.results.map(element => {
	const movie = document.createElement('div');
	const movieText = document.createElement('div'); 
	const moviePoster = document.createElement('img');
	const movieTittle = document.createElement('h3');
	const movieRate = document.createElement('div');
	const movieOverview = document.createElement('p');
	const movieOverviewTitle = document.createElement('h4');
	movie.classList.add('movie');
	moviePoster.classList.add('movie__poster');
	movieText.classList.add('movie__text')
	movieTittle.classList.add('movie__title');
	movieRate.classList.add('movie__rate');
	movieOverview.classList.add('movie__overview');
	movieOverviewTitle.classList.add('movie__overview-title')
	moviePoster.src = `https://image.tmdb.org/t/p/w1280${element.poster_path}`;
	movieTittle.textContent = `${element.title}`;
	movieRate.textContent = `${element.vote_average.toFixed(1)}`;
		if (movieRate.textContent >= 8) movieRate. classList.add('green');
		if (movieRate.textContent < 8 && movieRate.textContent >= 5) movieRate.classList.add('orange');
		if (movieRate.textContent < 5) movieRate.classList.add('red');
	movieOverview.textContent = `${element.overview}`;
	movieOverviewTitle.textContent = `Overview`;
	movie.append(moviePoster);
	movie.append(movieText);
	movieText.append(movieTittle);
	movieText.append(movieRate);
	movieText.append(movieOverview);
	movieOverview.prepend(movieOverviewTitle);
	return movie;
	})
	main.append(...arrayMovie);
};

async function getData(url) {
	const res = await fetch(url);
	const data = await res.json();
	// console.log(data);
	showDataMovie(data);
};

getData(url);

function filmSearch() {
	main.innerHTML = '';
	url = `https://api.themoviedb.org/3/search/movie?query=${search.value}&api_key=${apiKey}`
	getData(url);
};

function onClear() {
	if (search.value === '' || search.value.length < 1){
	main.innerHTML = '';
	url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
	getData(url);
	}
};

function popularMovie() {
	main.innerHTML = '';
	url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
	getData(url);
}

function topRatedMovie() {
	main.innerHTML = '';
	url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
	getData(url);
}

function latestMovie() {
	main.innerHTML = '';
	url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`
	getData(url);
}

function upcomingMovie() {
	main.innerHTML = '';
	url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
	getData(url);
}

search.addEventListener('change', filmSearch);
search.addEventListener('dblclick', filmSearch);
search.addEventListener('input', onClear);
search.addEventListener('dblclick', onClear);
search.addEventListener('focusout', onClear);
popularMovieButton.addEventListener('click', popularMovie);
topRatedMovieButton.addEventListener('click', topRatedMovie);
latestMovieButton.addEventListener('click', latestMovie);
upcomingMovieButton.addEventListener('click', upcomingMovie);

//hamburger menu
const hamburger = document.querySelector('.hamburger');
const headerList = document.querySelector('.header__list');
const navLinks = document.querySelectorAll('.header__item');
function toggleMenu() {
	hamburger.classList.toggle('open');
	headerList.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);
function closeMenu() {
	hamburger.classList.remove('open');
	headerList.classList.remove('open');
}
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

console.log(`Ваша отметка - 70 балла(ов)
Отзыв по пунктам ТЗ:
Все пункты выполнены полностью!
`)





