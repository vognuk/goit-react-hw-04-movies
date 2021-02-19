import PropTypes from 'prop-types';
import s from './Details.module.css';
import AdditionalInfo from '../Info/Info';
import BlankImageLoader from '../NoImage';
import BASE_IMG_URL from '../../utils/fetchImage';

const Details = ({
  movie,
  url,
  path,
  handleGoBack,
  locationState,
}) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  return (
    <>
      <section className={s.section}>
        <div className={s.wrapper}>
          <div className={s.imgWrapper}>
            <button
              type="button"
              className={s.button}
              onClick={handleGoBack}
            > Back
            </button>
            {poster_path ?
              (<img className={s.image} src={`${BASE_IMG_URL}${poster_path}`} alt="Poster" />) :
              (<BlankImageLoader />)
            }
          </div>

          <div className={s.container}>
            <h1 className={s.heading}>{`${title}(${release_date.slice(0, 4,)})`}</h1>
            <p className={s.description}>{`User score: ${vote_average * 10}%`}</p>
            <h2 className={s.title}>Overview:</h2>
            <p className={s.description}>{overview}</p>
            <h3 className={s.title}>Genres:</h3>

            <ul className={s.list}>
              {genres.map(({ id, name }) => (
                <li key={id} className={s.item}>
                  <span className={s.itemText}>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <AdditionalInfo url={url} path={path} locationState={locationState} />
      </section>
    </>
  );
};

Details.propTypes = PropTypes.shape({
  movie: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  handleGoBack: PropTypes.func.isRequired,
  locationState: PropTypes.object.isRequired,
}).isRequired;

export default Details;
