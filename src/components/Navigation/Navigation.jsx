import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import { Link, Header } from './Navigation.styled';

function Navigation() {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={Loader()}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Navigation;
