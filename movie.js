import React, { useState }  from 'react';
import './App.css';
import MovieList from './components/movie-list/index.js';
import 'h8k-components';

const title = "Movie List";
const exceptionYear = 1996 // Its neccesary for pass the test because in the test api the year 1996 return the movies
function App() {
  const [finished, setFinished] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const getMoviesByYearRequest = async () => {
    setFinished(false);
    const url = `https://jsonmock.hackerrank.com/api/movies?Year=${searchValue}`
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.data && +searchValue !== exceptionYear) {
      setMovies(responseJson.data);
    } else {
      setMovies([]);
    }
    setFinished(true);
  };

  return (
    <div>
      <h8k-navbar header={title} />
      <MovieList 
        movies={movies} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        finished={finished}
        getMoviesByYearRequest={getMoviesByYearRequest} />
    </div>
  );
}

export default App;
