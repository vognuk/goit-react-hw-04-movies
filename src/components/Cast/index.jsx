/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from 'prop-types';
import s from './Cast.module.css';
import NoImage from '../NoImage';
import BASE_IMG_URL from '../../utils/fetchImage';

const Cast = ({ cast }) => {
  return (
    <>
      {cast.length > 0 ?
        (<ul className={s.list}>
          {cast.map(({ profile_path, name, character }, index) => (
            <li key={index} className={s.item}>
              {profile_path ?
                (<div className={s.photoWrapper}>
                  <img
                    src={`${BASE_IMG_URL}${profile_path}`}
                    alt="Photo"
                  />
                </div>) :
                (<NoImage />)
              }
              <div className={s.description}>
                <span className={s.name}>{name}</span>
                <span className={s.characterTitle}>Character <br /> <span className={s.character}>{character}<span /></span></span>
              </div>
            </li>
          ))}
        </ul>) :
        (<p className={s.content}>
          There is no any info about cast for this movie.
        </p>)
      }
    </>
  );
};

Cast.propTypes = {
  cast: PropTypes.array.isRequired,
}.isRequired;

export default Cast;
