import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';
import { List } from './Cast.styled';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const abortConroller = new AbortController();
    API.getMovieCast(movieId, abortConroller).then(setCast);

    return () => {
      abortConroller.abort();
    };
  }, [movieId]);

  return (
    <div>
      <List>
        {cast.map(cast => (
          <li key={cast.cast_id}>
            <img
              width={250}
              src={BASE_IMG_URL + cast.profile_path}
              alt={cast.original_name}
            />
            <p>{cast.original_name}</p>
          </li>
        ))}
      </List>
    </div>
  );
}
