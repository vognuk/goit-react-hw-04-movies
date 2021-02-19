import { Link, withRouter } from 'react-router-dom';
import s from './Movies.module.css';
import PropTypes from 'prop-types';

import BlankImageLoader from '../NoImage';
import BASE_IMG_URL from '../../utils/fetchImage';

const Movies = ({ movies, location, pageTitle }) => {
  return (
    <>
      <div className={s.wrapper}>
        {pageTitle && <h1 className={s.heading}> {pageTitle}</h1>}
        <ul className={s.list}>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id} className={s.item}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: location },
                }}
              >
                {poster_path ? (
                  <img src={`${BASE_IMG_URL}${poster_path}`} alt="poster" />
                ) : (
                    <BlankImageLoader />
                  )}

                <span className={s.title}>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Movies.propTypes = PropTypes.shape({
  movies: PropTypes.array,
  location: PropTypes.object,
  pageTitle: PropTypes.string,
}).isRequired;

export default withRouter(Movies);
