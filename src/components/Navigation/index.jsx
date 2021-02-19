import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.siteNav}>
      <NavLink
        exact
        to={routes.homePage}
        className={s.item}
        activeClassName={s.activeItem}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to={routes.moviesPage}
        className={s.item}
        activeClassName={s.activeItem}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
