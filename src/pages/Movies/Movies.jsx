// import PropTypes from 'prop-types';
import MoviesList from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { FcSearch } from 'react-icons/fc';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../services/api';
import { Form, Input, SearchBtn } from './Movies.styled';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [value, setValue] = useState(query ?? '');

  useEffect(() => {
    if (!query) {
      return;
    }
    const abortConroller = new AbortController();
    API.getMoviesByQuery(query, abortConroller).then(setMovies);

    return () => {
      abortConroller.abort();
    };
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const nextParams = query !== '' ? { query: e.target.query.value } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <h1>Movies</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          name="query"
        />
        <SearchBtn type="submit" className="searchForm-button">
          <FcSearch size="2em" />
        </SearchBtn>
      </Form>
      <MoviesList movies={movies} />
    </div>
  );
}

// Movies.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

export default Movies;
