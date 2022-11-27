import axios from 'axios';

const API_KEY = 'fe13ab826a741d40ca015441d0a0f529';
const BACKEND = 'https://api.themoviedb.org/3/';

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

export const findMovies = {
  backend: 'https://api.themoviedb.org/3/',
  page: 1,
  query: '',
  queryType: '',
  previousPage: NaN,

  async find() {
    if (this.query !== '' && this.queryType === 'search-on-query') {
      this.query = `${BACKEND}search/movie?api_key=${API_KEY}&query=${this.query}&page=${this.page}`;
    } else if (this.query !== '' && this.queryType === 'on-query-per-page') {
      this.query = `${BACKEND}trending/all/week?api_key=${API_KEY}&page=${this.page}`;
    } else if (this.queryType === 'popular') {
      this.query = `${BACKEND}trending/all/week?api_key=${API_KEY}&page=${this.page}`;
    } else if (this.queryType === 'full-info') {
      this.query = `${BACKEND}movie/${this.query}?api_key=${API_KEY}`;
    } else if (this.queryType === 'trailer-info') {
      this.query = `${BACKEND}movie/${this.query}/videos?api_key=${API_KEY}`;
    }
    try {
      const response = await axios.get(`${this.query}`);
      const answer = await response.data;
      // ===NEW LINE START====
      answer.results = await genresNames(response.data.results);
      // ===NEW LINE END====
      return await answer;
    } catch (error) {
      console.log(error.message);
    }
  },
};


// ========


async function genresIDsDatabase() {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=fe13ab826a741d40ca015441d0a0f529&language=en-US`);
    const answer = await response.data;
    console.log(answer.genres);
  } catch (error) {
    console.log(error.message);
  }
};

genresIDsDatabase();


// =======



// arr - response.data.results
function genresNames(arr) {
  const namesArr = arr.map(element => {
    const genresArr = [];
    for (const genreId of element.genre_ids) {
      if (genres.find(genre => genre.id === genreId)) {
        // console.log(genres.find(genre => genre.id === genreId).name);
        genresArr.push(genres.find(genre => genre.id === genreId).name)
      }
    }
    // console.log(genresArr);
    // return genresArr
    element.genre_ids = genresArr;
    return element;
  })
  console.log(namesArr);
  return namesArr;
}


// ======= BACKUP 27/11/2022
/*

export const findMovies = {
  backend: 'https://api.themoviedb.org/3/',
  page: 1,
  query: '',
  queryType: '',
  previousPage: NaN,

  async find() {
    if (this.query !== '' && this.queryType === 'search-on-query') {
      this.query = `${BACKEND}search/movie?api_key=${API_KEY}&query=${this.query}&page=${this.page}`;
    } else if (this.query !== '' && this.queryType === 'on-query-per-page') {
      this.query = `${BACKEND}trending/all/week?api_key=${API_KEY}&page=${this.page}`;
    } else if (this.queryType === 'popular') {
      this.query = `${BACKEND}trending/all/week?api_key=${API_KEY}&page=${this.page}`;
    } else if (this.queryType === 'full-info') {
      this.query = `${BACKEND}movie/${this.query}?api_key=${API_KEY}`;
    } else if (this.queryType === 'trailer-info') {
      this.query = `${BACKEND}movie/${this.query}/videos?api_key=${API_KEY}`;
    }
    try {
      const response = await axios.get(`${this.query}`);
      const answer = await response.data;
      return await answer;
    } catch (error) {
      console.log(error.message);
    }
  },
};
*/

// TESTING ON THIS:
/*
const findMovies2 = {
  backend: 'https://api.themoviedb.org/3/',
  page: 1,
  query: '',
  queryType: '',
  previousPage: NaN,

  async find() {
    if (this.query !== '' && this.queryType === 'search-on-query') {
      this.query = `${BACKEND}search/movie?api_key=${API_KEY}&query=${this.query}&page=${this.page}`;
    } else if (this.query !== '' && this.queryType === 'on-query-per-page') {
      this.query = `${BACKEND}trending/all/week?api_key=${API_KEY}&page=${this.page}`;
    } else if (this.queryType === 'popular') {
      this.query = `${BACKEND}trending/all/week?api_key=${API_KEY}&page=${this.page}`;
    } else if (this.queryType === 'full-info') {
      this.query = `${BACKEND}movie/${this.query}?api_key=${API_KEY}`;
    } else if (this.queryType === 'trailer-info') {
      this.query = `${BACKEND}movie/${this.query}/videos?api_key=${API_KEY}`;
    }
    try {
      const response = await axios.get(`${this.query}`);
      const answer = await response.data;

      // const newResults = await genresNames(response.data.results);
      // answer.results = await newResults;
      // console.log(newResults);
      answer.results = await genresNames(response.data.results);

      console.log(await answer);
      return await answer;
    } catch (error) {
      console.log(error.message);
    }
  },
};

function searchingMorePopular2(page = 1) {
  findMovies2.page = page;
  findMovies2.query = '';
  findMovies2.queryType = 'popular';
  const request = findMovies2.find().then(function (answer) {
    console.log('searching by popularity, page #:', page);
    // console.log(answer); // у відповідь отримуємо об'єкт, який для прикладу консолимо.
  });
}

searchingMorePopular2()
*/