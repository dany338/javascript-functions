import React  from "react";
import "./index.css";

function MovieList(props) {

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input 
          type="number"
          className="large"
          placeholder="Enter Year eg 2015"
          data-testid="app-input"
          value={props.searchValue}
          onChange={(e) => props.setSearchValue(e.target.value)}
        />
        <button className="" data-testid="submit-button" onClick={() => props.getMoviesByYearRequest()}>Search</button>
      </section>

      <ul className="mt-50 styled" data-testid="movieList">
        {props.movies.map((movie, _) =>
          <li key={movie.imdbID} className="slide-up-fade-in py-10">{movie.Title}</li>
        )}
      </ul>

      {(props.movies.length === 0 && props.searchValue !== '' && props.finished) && (
        <div className="mt-50 slide-up-fade-in" data-testid="no-result">No Results Found</div>
      )}
    </div>
  );
}

export default MovieList