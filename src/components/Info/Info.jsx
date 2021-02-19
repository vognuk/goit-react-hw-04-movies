import { NavLink, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Info.module.css';
import Cast from '../../views/Cast';
import Reviews from '../../views/Reviews';

const Info = ({ url, path, locationState }) => {
  return (
    <>
      <ul className={s.list}>
        <li>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { ...locationState },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { ...locationState },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Route path={`${path}/cast`} component={Cast} />
      <Route path={`${path}/reviews`} component={Reviews} />
    </>
  );
};

Info.propTypes = {
  url: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  locationFrom: PropTypes.string.isRequired,
}.isRequired;

export default withRouter(Info);
