import PropTypes from 'prop-types';
import s from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews.length > 0 ?
        (<ul className={s.list}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={s.item}>
              <h4 className={s.title}>Author: {author}</h4>
              <p className={s.content}>{content}</p>
            </li>
          ))}
        </ul>) :
        (<p className={s.content}> No reviews.</p>
        )}
    </>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
}.isRequired;

export default ReviewsList;
