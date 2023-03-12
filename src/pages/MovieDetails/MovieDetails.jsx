import Loader from 'components/Loader';
import {
  ImgWrapper,
  InfoWrapper,
  ItemWrapper,
  Btn,
  AdditionInfoWrapper,
  Link,
} from './MovieDetails.styled';
import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import * as API from '../../services/api';
import { BiArrowBack } from 'react-icons/bi';
import loader from 'components/Loader/Loader';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const abortConroller = new AbortController();
    API.getMoviesDetailsById(movieId, abortConroller).then(setMovie);

    return () => {
      abortConroller.abort();
    };
  }, [movieId]);

  if (!movie) {
    return Loader();
  }

  const {
    poster_path,
    genres,
    title,
    original_title,
    overview,
    release_date,
    vote_average,
  } = movie;

  const imgUrl = BASE_IMG_URL + poster_path;
  const genresToShow = genres.map(genre => genre.name).join(', ');

  return (
    <div>
      <Btn type="button" onClick={() => console.log('😋')}>
        <BiArrowBack size="1.5em" />
        Go back
      </Btn>
      <ItemWrapper>
        <ImgWrapper>
          <img src={imgUrl} alt={title} />
        </ImgWrapper>
        <InfoWrapper>
          <h2>
            {title ?? original_title} ({Number.parseInt(release_date)})
          </h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genresToShow} </p>
        </InfoWrapper>
      </ItemWrapper>
      <AdditionInfoWrapper>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </AdditionInfoWrapper>
      <Suspense fallback={loader()}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetails;
