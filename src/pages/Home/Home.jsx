import * as API from '../../services/api';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';
// import { toast } from 'react-hot-toast';
import Error from 'components/Error';

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
        setError(error);
      });
  }, []);

  return (
    <div>
      <h1>Tranding movies</h1>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MoviesList movies={movies} />}
      {status === 'rejected' && <Error error={error.message} />}
    </div>
  );
}

export default Home;
