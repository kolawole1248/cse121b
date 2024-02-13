// ... (other code)
const baseUrl = 'https://api.themoviedb.org/3/search/movie';
const apiKey = 'acda100e10bed5b5a2a47fcd5d11af49'; // Replace with your API key


async function searchMovies() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value;

  if (!query) {
    alert('Please enter a movie name');
    return;
  }

  // Update the URL construction to include the API key
  const url = `${baseUrl}?api_key=${apiKey}&query=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    displayMovies(data.results);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// ... (other code)

function displayMovies(movies) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '';

  movies.forEach((movie) => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    const titleElement = document.createElement('h2');
    titleElement.textContent = movie.title;

    const overviewElement = document.createElement('p');
    overviewElement.textContent = movie.overview;

    movieElement.appendChild(titleElement);
    movieElement.appendChild(overviewElement);

    resultsContainer.appendChild(movieElement);
  });
}
