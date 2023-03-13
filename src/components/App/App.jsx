import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { Toaster } from 'react-hot-toast';
import Navigation from 'components/Navigation';
import { GlobalStyle } from 'GlobalStyle';
// import Reviews from 'components/Reviews';
// import Home from 'pages/Home';
// import MovieDetails from 'pages/MovieDetails';
// import Movies from 'pages/Movies';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster toastOptions={{ duration: 2500 }} />
    </Container>
  );
};

export default App;
