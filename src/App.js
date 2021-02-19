import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Preloader from './components/Preloader';
import { ToastContainer } from 'react-toastify';
import routes from './routes';
import AppBar from './components/Header';

const HomePage = lazy(() => import('./views/HomePage'),);
const MoviesPage = lazy(() => import('./views/MoviesPage'),);
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'),);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<Preloader />}>
      <Switch>
        <Route path={routes.homePage} exact component={HomePage} />
        <Route path={routes.moviesPage} exact component={MoviesPage} />
        <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
        <Redirect to={routes.homePage} />
      </Switch>
    </Suspense>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
);

export default App;
