import Loader from 'react-loader-spinner';

const Preloader = () => (
  <Loader className="loader"
    type="Puff"
    color="grey"
    height={180}
    width={180}
  />
);

export default Preloader;
