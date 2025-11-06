const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const movieList = document.getElementById('movie-list');

searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
    const response = await fetch(`https://api.example.com/movies?search=${query}`);
    const movies = await response.json();
    displayMovies(movies);
});

function displayMovies(movies) {
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `<h3>${movie.title}</h3><p>Rating: ${movie.rating}</p><p>${movie.description}</p>`;
        movieList.appendChild(movieItem);
    });
}