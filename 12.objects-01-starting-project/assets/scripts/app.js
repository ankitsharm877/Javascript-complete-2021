const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    const { info, ...other } = movie;
    //let text = info.title + ' - ';
    let text = movie.getFormattedTitle() + ' - ';
   // let { getFormattedTitle } = movie;
    //getFormattedTitle = getFormattedTitle.bind(movie);
    //console.log(getFormattedTitle());
    //console.log(getFormattedTitle.call(movie));
    //console.log(getFormattedTitle.apply(movie));
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random(),
    getFormattedTitle: function() {
        return this.info.title.toUpperCase();
    },
    getText() {
        return this.info.title;
    }
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
    console.log(this); // refer to window object
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
