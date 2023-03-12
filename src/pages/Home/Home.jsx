import * as API from '../../services/api';
import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // const abortConroller = new AbortController();
    API.getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
