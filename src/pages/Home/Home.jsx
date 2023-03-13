import * as API from '../../services/api';
import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';
// import { toast } from 'react-hot-toast';
import { Error } from 'components/Error/Error';

function Home() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');
    API.getTrendingMovies()
      .then(data => {
        setMovies(data);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        // console.log('error from Home');
        setError(error);
      });
  }, []);

  return (
    <div>
      <h1>Tranding movies</h1>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MovieList movies={movies} />}
      {status === 'rejected' && <Error error={error.message} />}
    </div>
  );
}

export default Home;
