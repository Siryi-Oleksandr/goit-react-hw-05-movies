import { NavLink, useLocation } from 'react-router-dom';

function MoviesList({ movies }) {
  //   const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          {/* <NavLink state={{ from: location }} to={`/movies/${movie.id}`}> */}
          {movie.original_title ?? movie.name} {/* </NavLink> */}
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;
