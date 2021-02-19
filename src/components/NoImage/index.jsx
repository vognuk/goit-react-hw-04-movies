import NoImagePoster from '../../images/No_image_poster.png';
import s from './NoImage.module.css'
const NoImage = () => {
  return <img className={s.image} src={NoImagePoster} alt="No image" />;
};

export default NoImage;
